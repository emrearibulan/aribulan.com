#!/usr/bin/env python3
"""Written by and owned by emr. Free to use under the MIT License."""
import json
import sys
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse


class PublishedPage(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []
        self.ids = []
        self.links = []
        self.script = None
        self.data = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        for key in ('href', 'src'):
            if key in attrs:
                self.links.append(attrs[key])
        if tag == 'script':
            assert attrs.get('type') == 'application/ld+json', 'Unexpected script'
            self.script = ''

    def handle_data(self, value):
        if self.script is not None:
            self.script += value

    def handle_endtag(self, tag):
        if tag == 'script':
            self.data.append(json.loads(self.script))
            self.script = None


def check(root):
    root = Path(root)
    text = (root / 'index.html').read_text()
    page = PublishedPage()
    page.feed(text)
    assert len(page.ids) == len(set(page.ids))
    assert sum(tag == 'h1' for tag, _ in page.tags) == 1
    assert any(tag == 'link' and attrs.get('rel') == 'canonical' and attrs.get('href') == 'https://www.aribulan.com/emr27/' for tag, attrs in page.tags)
    assert not any(tag == 'meta' and attrs.get('name') == 'robots' and 'noindex' in attrs.get('content', '') for tag, attrs in page.tags)
    for link in page.links:
        url = urlparse(link)
        if url.scheme:
            assert url.scheme == 'https', link
        elif url.fragment:
            assert not url.path and url.fragment in page.ids, link
        elif url.path:
            assert (root / url.path).is_file(), link
    app = page.data[0]['@graph'][1]
    assert app['@type'] == 'SoftwareApplication'
    assert app['name'] == 'emr27 save editor'
    assert 'v' + app['softwareVersion'] in text
    assert page.links.count(app['downloadUrl']) >= 2
    assert app['isAccessibleForFree'] is True and app['offers']['price'] == '0'
    assert 'aggregateRating' not in app
    assert 'https://www.aribulan.com/emr27/' in (root / 'sitemap.xml').read_text()
    ET.parse(root / 'sitemap.xml')
    print('PASS: published HTML, navigation/assets, canonical, release schema, downloads and sitemap')


if __name__ == '__main__':
    check(sys.argv[1] if len(sys.argv) > 1 else 'emr27')
