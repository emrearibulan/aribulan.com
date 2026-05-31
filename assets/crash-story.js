window.crashStory = {
  "title": "The Starry Night Job",
  "setup": "The player is already halfway through a fictional art heist when everything breaks. The painting has left the wall, the crew fractures, and the real Van Gogh vanishes into the city. The goal is to find the true canvas, survive the fallout, and sell it without becoming part of the evidence.\nGood Endings: The player sells The Starry Night to either a private collector or a syndicate broker and escapes rich.\nNeutral Ending: The player gives up the sale, returns the painting through a broker, and survives with less than promised.\nBad Endings: Betrayal, panic, bad buyers, and ugly deaths in locked rooms, wet streets, and hidden storage.",
  "start": "scene-1",
  "scenes": [
    {
      "id": "scene-1",
      "code": "Scene 1",
      "title": "The Wall Is Empty",
      "kind": "scene",
      "text": "You are already past the point where a person can pretend this is only planning.\n\nThe Starry Night is off the wall. The famous blue sky trembles inside a black travel crate at your feet. Sirens have not started yet, but the museum lights have changed from warm gold to surgical white.\n\nIn your earpiece, Morse whispers, \"Move now. Leave the liner. Bring only the canvas.\"\n\nThat is not the plan. The plan said the crate protects the painting. The plan said no improvising.\n\nThis is the middle of the theft. This is where it breaks.",
      "prompt": "How do you carry the painting out?",
      "options": [
        {
          "label": "Carry protected crate",
          "response": "Crate. I keep the painting sealed and lift the whole case. It is heavy, awkward, and alive with panic, but the sky inside it stays protected.",
          "nextId": "scene-2"
        },
        {
          "label": "Pull out bare canvas",
          "response": "Canvas. I tear the canvas free like Morse said. The frame bites back, the liner cracks, and blue-black varnish flakes over my gloves like dead skin.",
          "nextId": "ending-splintered-blue"
        }
      ]
    },
    {
      "id": "scene-2",
      "code": "Scene 2",
      "title": "The Blue Stair",
      "kind": "scene",
      "text": "The service stairwell smells of wax, dust, and hot wiring. Somewhere below, a steel door slams.\n\nMorse says the east stairs are clear. He says it too quickly.\n\nYour tablet shows three routes:\n\nE-2: black screen.\nC-12: live camera, empty corridor.\nMORSE: voice only, no video.\n\nA maintenance card taped to the crate reads: IF BLIND, TRUST THE LIVE FEED.",
      "prompt": "Which route do you trust?",
      "options": [
        {
          "label": "Use live C-12 feed",
          "response": "C-12. I match the live feed to the conservation corridor and shoulder the crate sideways through the service door.",
          "nextId": "scene-3"
        },
        {
          "label": "Follow black E-2 feed",
          "response": "E-2. I follow the black feed toward the east stairs. The first landing is empty. The second has no floor.",
          "nextId": "ending-shaft"
        },
        {
          "label": "Trust Morse's voice",
          "response": "Morse. I trust the voice in my ear and run where he tells me. His breathing stops just before the floor does.",
          "nextId": "ending-shaft"
        }
      ]
    },
    {
      "id": "scene-3",
      "code": "Scene 3",
      "title": "Conservation Wing",
      "kind": "scene",
      "text": "You pass x-ray plates of old saints and half-cleaned portraits waiting under linen. Every covered face seems to turn as you move.\n\nAt the far end, a flood door begins to descend with a patient hydraulic scream. Beyond it is the courtyard route.\n\nBeside you, a freight lift hangs open with its warning light blinking red. The manual door chain is slower, but it is meant for emergencies exactly like this.",
      "prompt": "Do you slow down for the flood door or risk the lift?",
      "options": [
        {
          "label": "Hold door manually",
          "response": "Yellow manual. The door stutters. Ten seconds is not much, but it is enough to drag the crate under and keep every limb attached.",
          "nextId": "scene-4"
        },
        {
          "label": "Risk freight lift",
          "response": "Green lift. I call the one machine already blinking red. It drops before the gate closes, and the ceiling arrives like a verdict.",
          "nextId": "ending-pressed"
        }
      ]
    },
    {
      "id": "scene-4",
      "code": "Scene 4",
      "title": "Glass Courtyard",
      "kind": "scene",
      "text": "Rain drums on the courtyard roof. The glass above you flashes with blue police light from streets you cannot see.\n\nYour exit is across the marble floor: a service arch hidden behind hanging banners. Between you and it, a guard sweeps a flashlight in slow arcs.\n\nThe banners shift every few seconds in the storm. When they move, the shadows move with them.",
      "prompt": "How do you cross the courtyard?",
      "options": [
        {
          "label": "Cross with banners",
          "response": "Five. I move on the visor wipe, when the banners swing and the flashlight points at nothing. The guard sees cloth, rain, and an empty wall behind him.",
          "nextId": "scene-5"
        },
        {
          "label": "Sprint across marble",
          "response": "Run. I stop counting and bolt. The courtyard comes down in glittering knives before I make the arch.",
          "nextId": "ending-glass-rain"
        }
      ]
    },
    {
      "id": "scene-5",
      "code": "Scene 5",
      "title": "The Hearse Van",
      "kind": "scene",
      "text": "The service arch opens onto an alley where the crew van waits under funeral-home lettering. Morse stands by the rear doors, smiling without warmth.\n\n\"Change of buyer,\" he says. \"Change of split. Put it in.\"\n\nBehind his smile, you see the gun tucked under his raincoat. In the driver's mirror, Iris taps twice, then points at the silver funeral wreath painted on the van.\n\nBlack tape will peel in the rain. Red paint will vanish among the brake lights. Silver will catch even weak light.",
      "prompt": "How do you handle Morse without losing the crate?",
      "options": [
        {
          "label": "Mark crate quietly",
          "response": "Silver corner. I smear wet paint across one edge as I load the crate, a small bright scar only I will know to look for.",
          "nextId": "scene-6"
        },
        {
          "label": "Use black tape",
          "response": "Black tape. Morse sees me reach for it, smiles, and steps aside while the van rolls backward.",
          "nextId": "ending-meat-hook"
        },
        {
          "label": "Punch Morse first",
          "response": "Punch Morse. I swing first. He was waiting for that. The alley flashes white, and the van's meat hook catches my coat as I fall.",
          "nextId": "ending-meat-hook"
        }
      ]
    },
    {
      "id": "scene-6",
      "code": "Scene 6",
      "title": "Empty Safehouse",
      "kind": "scene",
      "text": "The safehouse is above a closed pawn shop, three streets from the museum and a lifetime from the plan.\n\nMorse is gone. Iris is gone. The hearse van is gone.\n\nOn the table sits your silver-marked crate, open and empty. Inside is a cheap printed copy of The Starry Night, its blue swirls too clean, too dead. The fake is signed V. VAN GO.\n\nThis is the real breaking point. You stole the painting. Then someone stole it from you.\n\nThree clues remain: the bad signature, a ringing buyer phone, and one smear of real ultramarine leading toward the back stairs.",
      "prompt": "What lead do you follow?",
      "options": [
        {
          "label": "Follow pigment trail",
          "response": "Ultramarine. I ignore the fake signature and follow the one clue the print could not leave behind.",
          "nextId": "scene-7"
        },
        {
          "label": "Study fake signature",
          "response": "V. Van Go. I chase the signature on the fake instead of the paint trail. By the time I realize the joke, headlights bloom in the pawn shop windows.",
          "nextId": "ending-caller"
        },
        {
          "label": "Answer buyer phone",
          "response": "Phone. I demand answers from the only number I have. The voice on the line breathes once, laughs once, and tells someone beside him to start the car.",
          "nextId": "ending-caller"
        }
      ]
    },
    {
      "id": "scene-7",
      "code": "Scene 7",
      "title": "The Underpass",
      "kind": "scene",
      "text": "The blue trail ends under a railway bridge where rainwater runs in oily ropes. A violinist plays beside a burn barrel, sawing one bright note over and over.\n\nHe stops when he sees the pigment on your glove.\n\n\"Looking for a night sky? Blue goes to Agnes. White goes to teeth.\"\n\nAcross the underpass, a dealer in a white leather coat watches from the mouth of a basement club. Beside him, a sign blinks WHITE ROOM.\n\nThe violinist's case is open. So is your knife.",
      "prompt": "How do you ask for the lead?",
      "options": [
        {
          "label": "Tip the violinist",
          "response": "Tip him. I drop cash in the violin case. He lifts the false bottom and shows me a matchbook stamped SAINT AGNES STORAGE.",
          "nextId": "scene-8"
        },
        {
          "label": "Threaten the violinist",
          "response": "Threaten him. I let him see the knife. He gives up the matchbook, but the look he gives me follows longer than the rain.",
          "nextId": "scene-8-rude"
        },
        {
          "label": "Approach White Room",
          "response": "White Room. I walk toward the white coat. He smiles like he has practiced on mirrors, then opens the basement door to a room lined in plastic.",
          "nextId": "ending-backroom"
        }
      ]
    },
    {
      "id": "scene-8-rude",
      "code": "Scene 8",
      "title": "Saint Agnes Storage",
      "kind": "scene",
      "text": "Saint Agnes is no longer a church. It is a storage business with stained glass, security shutters, and a neon office sign buzzing in the nave.\n\nThrough a crack in the loading bay, you see Morse arguing with a woman called Saint. The silver-marked crate sits between them, empty. Beside it is a narrow climate case with frost on the hinges.\n\nSaint says, \"Dawn. Florist truck. Blue roses on the doors. Not lilies. Not the plain cold van.\"\n\nYour phone buzzes once. Unknown number: WORD TRAVELS. BE KINDER WHEN YOU NEED WITNESSES.",
      "prompt": "How do you use what you overhear?",
      "options": [
        {
          "label": "Wait for blue-rose truck",
          "response": "Blue roses. I stay hidden and take the clue, but someone in this city already knows how I asked for it.",
          "nextId": "scene-9-rude"
        },
        {
          "label": "Grab case now",
          "response": "Grab. I rush the case. Saint turns with a box cutter already open, and the old church floor drinks far more red than blue.",
          "nextId": "ending-saints-knife"
        },
        {
          "label": "Follow plain van",
          "response": "Plain van. I chase the wrong vehicle into the loading bay. Saint catches me halfway across the floor.",
          "nextId": "ending-saints-knife"
        }
      ]
    },
    {
      "id": "scene-8",
      "code": "Scene 8",
      "title": "Saint Agnes Storage",
      "kind": "scene",
      "text": "Saint Agnes is no longer a church. It is a storage business with stained glass, security shutters, and a neon office sign buzzing in the nave.\n\nThrough a crack in the loading bay, you see Morse arguing with a woman called Saint. The silver-marked crate sits between them, empty. Beside it is a narrow climate case with frost on the hinges.\n\nSaint says, \"Dawn. Florist truck. Blue roses on the doors. Not lilies. Not the plain cold van.\"\n\nThe real painting is close enough to feel like weather.",
      "prompt": "How do you use what you overhear?",
      "options": [
        {
          "label": "Wait for blue-rose truck",
          "response": "Blue roses. I stay behind stacked pews long enough to learn which truck carries the sky.",
          "nextId": "scene-9"
        },
        {
          "label": "Grab case now",
          "response": "Grab. I rush the case. Saint turns with a box cutter already open, and the old church floor drinks far more red than blue.",
          "nextId": "ending-saints-knife"
        },
        {
          "label": "Follow plain van",
          "response": "Plain van. I chase the wrong vehicle into the loading bay. Saint catches me halfway across the floor.",
          "nextId": "ending-saints-knife"
        }
      ]
    },
    {
      "id": "scene-9-rude",
      "code": "Scene 9",
      "title": "Florist Truck",
      "kind": "scene",
      "text": "Dawn finds the florist truck under an overpass, blue roses peeling from the doors. Cold vapor breathes from the cargo seam.\n\nInside, buckets of lilies crowd the narrow aisle. Beneath them, strapped to the floor, is the climate case.\n\nA sticker by the latch reads: OPEN ONLY ON GREEN.\n\nThe alarm cycles softly: red chirp, red chirp, green click, silence.\n\nIris texts only two words: heard underpass.",
      "prompt": "When do you touch the case latch?",
      "options": [
        {
          "label": "Wait for green click",
          "response": "Green click. I wait through the two red chirps and touch the latch only when the case goes quiet.",
          "nextId": "scene-10-rude"
        },
        {
          "label": "Open on first red",
          "response": "First red. I touch the latch too early. White coolant floods out, turning the lilies brittle and my fingers blue before I can scream.",
          "nextId": "ending-blue-frost"
        },
        {
          "label": "Force the latch",
          "response": "Force latch. I jam the mechanism and twist. The case answers with freezing white vapor.",
          "nextId": "ending-blue-frost"
        }
      ]
    },
    {
      "id": "scene-9",
      "code": "Scene 9",
      "title": "Florist Truck",
      "kind": "scene",
      "text": "Dawn finds the florist truck under an overpass, blue roses peeling from the doors. Cold vapor breathes from the cargo seam.\n\nInside, buckets of lilies crowd the narrow aisle. Beneath them, strapped to the floor, is the climate case.\n\nA sticker by the latch reads: OPEN ONLY ON GREEN.\n\nThe alarm cycles softly: red chirp, red chirp, green click, silence.",
      "prompt": "When do you touch the case latch?",
      "options": [
        {
          "label": "Wait for green click",
          "response": "Green click. I wait through the two red chirps and touch the latch only when the case goes quiet.",
          "nextId": "scene-10"
        },
        {
          "label": "Open on first red",
          "response": "First red. I touch the latch too early. White coolant floods out, turning the lilies brittle and my fingers blue before I can scream.",
          "nextId": "ending-blue-frost"
        },
        {
          "label": "Force the latch",
          "response": "Force latch. I jam the mechanism and twist. The case answers with freezing white vapor.",
          "nextId": "ending-blue-frost"
        }
      ]
    },
    {
      "id": "scene-10-rude",
      "code": "Scene 10",
      "title": "The Borrowed Conservator",
      "kind": "scene",
      "text": "Iris reappears in the mirror of a closed tailor shop, but she stays out of arm's reach.\n\n\"The violinist called ahead,\" she says. \"My clean conservator will not touch a job that brings knives to witnesses. I can still get you a broker who likes pressure, or a museum channel that likes leverage. No collector. No quiet money.\"\n\nThe case hums at your feet. A warning stencil on its side reads: KEEP FLAT. DO NOT ROLL. DO NOT CLEAN.",
      "prompt": "How do you repair enough trust to keep moving?",
      "options": [
        {
          "label": "Apologize and continue",
          "response": "Apologize. It does not fix the underpass, but Iris hears the difference. She leads me to the rougher buyer table, not the clean one.",
          "nextId": "scene-11-rude"
        },
        {
          "label": "Blame the violinist",
          "response": "Blame him. Iris steps back. The next door opens from the inside, and the room beyond has no air left for people.",
          "nextId": "ending-inert-gas"
        },
        {
          "label": "Roll the canvas",
          "response": "Roll it. I decide buyers pay for the name, not the condition. The first curl makes the varnish crack like thin ice. The second trips the case alarm.",
          "nextId": "ending-inert-gas"
        }
      ]
    },
    {
      "id": "scene-10",
      "code": "Scene 10",
      "title": "The Borrowed Conservator",
      "kind": "scene",
      "text": "Iris reappears in the mirror of a closed tailor shop.\n\n\"Morse sold us both,\" she says. \"But the canvas is real. It needs a clean hand before anyone pays real money. I know one conservator who asks questions only after the money clears.\"\n\nThe case hums at your feet. A warning stencil on its side reads: KEEP FLAT. DO NOT ROLL. DO NOT CLEAN.\n\nThe city is waking. Every siren now sounds personal.",
      "prompt": "How do you protect the canvas before the sale?",
      "options": [
        {
          "label": "Keep case flat",
          "response": "Keep flat. I follow Iris to a room above a bakery with the case level between us. An old woman looks at the canvas and whispers, \"Poor star. They dragged you through mud.\"",
          "nextId": "scene-11"
        },
        {
          "label": "Roll the canvas",
          "response": "Roll it. I decide buyers pay for the name, not the condition. The first curl makes the varnish crack like thin ice. The second trips the case alarm.",
          "nextId": "ending-inert-gas"
        },
        {
          "label": "Clean the canvas",
          "response": "Clean it. I try to make the canvas look less stolen. The solvent blooms wrong, the alarm wakes, and the room seals itself.",
          "nextId": "ending-inert-gas"
        }
      ]
    },
    {
      "id": "scene-11-rude",
      "code": "Scene 11",
      "title": "Aquarium Auction",
      "kind": "scene",
      "text": "The sale happens under a closed aquarium, in a tunnel where moon jellyfish drift behind thick glass.\n\nThe clean collector never comes. Word from the underpass reached him first.\n\nTwo buyers arrive instead: a syndicate broker with dirty protection, and a museum channel that can return the painting if you accept a smaller life.\n\nIris slides you a short note: DO NOT OPEN IT. SHOW EDGE FIBER. SEND ESCROW HASH.",
      "prompt": "How do you prove it without exposing it?",
      "options": [
        {
          "label": "Show edge fiber proof",
          "response": "Edge fiber. I show the microscopic proof and send the escrow hash while the canvas stays sealed. The broker respects restraint more than kindness.",
          "nextId": "scene-12-rude"
        },
        {
          "label": "Open the case",
          "response": "Reveal. I open the case in the tunnel. Every buyer leans in. Above us, aquarium glass cracks under a bullet meant for someone else.",
          "nextId": "ending-aquarium"
        },
        {
          "label": "Take phone photo",
          "response": "Phone photo. The flash pops before I can stop it. Someone flinches, someone fires, and the aquarium glass takes the bullet meant for me.",
          "nextId": "ending-aquarium"
        }
      ]
    },
    {
      "id": "scene-11",
      "code": "Scene 11",
      "title": "Aquarium Auction",
      "kind": "scene",
      "text": "The sale happens under a closed aquarium, in a tunnel where moon jellyfish drift behind thick glass. Three buyers arrive without names.\n\nOne offers clean money and a new passport.\nOne offers more money, dirty protection, and the location of Morse.\nOne offers a museum channel that will return the painting and erase your face from the cameras.\n\nThe conservator's last note is folded in your palm: DO NOT OPEN IT. SHOW EDGE FIBER. SEND ESCROW HASH.\n\nEveryone wants proof. Everyone has brought people with quiet hands.",
      "prompt": "How do you prove it without exposing it?",
      "options": [
        {
          "label": "Show edge fiber proof",
          "response": "Edge fiber. I show the microscopic proof and send the escrow hash while the canvas stays sealed. The buyers hate caution. That means it is working.",
          "nextId": "scene-12"
        },
        {
          "label": "Open the case",
          "response": "Reveal. I open the case in the tunnel. Every buyer leans in. Above us, aquarium glass cracks under a bullet meant for someone else.",
          "nextId": "ending-aquarium"
        },
        {
          "label": "Take phone photo",
          "response": "Phone photo. The flash pops before I can stop it. Someone flinches, someone fires, and the aquarium glass takes the bullet meant for me.",
          "nextId": "ending-aquarium"
        }
      ]
    },
    {
      "id": "scene-12-rude",
      "code": "Scene 12",
      "title": "Price of the Night",
      "kind": "scene",
      "text": "The proof clears. The clean fortune is gone, but not every future is.\n\nThe syndicate broker will pay more than you deserve, protect you harder than you trust, and deliver Morse tied to a chair by sunrise.\n\nThe museum channel will return the painting, pay only a fraction, and leave you alive but ordinary under a new name.\n\nIris watches you like she is deciding whether apologies count when money arrives.",
      "prompt": "Which remaining future do you choose?",
      "options": [
        {
          "label": "Sell to syndicate",
          "response": "Syndicate. I choose the dangerous fortune. The broker smiles, transfers the money, and sends me a live video of Morse learning what betrayal costs.",
          "nextId": "good-ending-syndicate"
        },
        {
          "label": "Return painting",
          "response": "Return. I choose survival over legend. The painting goes home by a route I never learn, and Iris finally nods like I have done one thing right.",
          "nextId": "neutral-ending-return"
        },
        {
          "label": "Keep painting",
          "response": "Keep it. I close the case and step away from both offers. For one wild second, owning the impossible feels better than selling it.",
          "nextId": "ending-last-possession"
        }
      ]
    },
    {
      "id": "scene-12",
      "code": "Scene 12",
      "title": "Price of the Night",
      "kind": "scene",
      "text": "The proof clears. The money waits in three different futures.\n\nThe private collector will bury The Starry Night in a mountain room and make you rich enough to become a rumor.\n\nThe syndicate broker will pay more, protect you harder, and deliver Morse tied to a chair by sunrise.\n\nThe museum channel will return the painting, pay only a fraction, and leave you alive but ordinary under a new name.\n\nThe canvas rests in its case, bright as a wound, calm as a sky.",
      "prompt": "Which future do you choose?",
      "options": [
        {
          "label": "Sell to collector",
          "response": "Collector. I choose the quiet fortune. The collector's people take the case without touching the seal, and the account number blooms with impossible zeroes.",
          "nextId": "good-ending-collector"
        },
        {
          "label": "Sell to syndicate",
          "response": "Syndicate. I choose the dangerous fortune. The broker smiles, transfers the money, and sends me a live video of Morse learning what betrayal costs.",
          "nextId": "good-ending-syndicate"
        },
        {
          "label": "Return painting",
          "response": "Return. I choose survival over legend. The painting goes home by a route I never learn, and I leave the tunnel with less money but all my blood inside me.",
          "nextId": "neutral-ending-return"
        },
        {
          "label": "Keep painting",
          "response": "Keep it. I close the case and step away from all three offers. For one wild second, owning the impossible feels better than selling it.",
          "nextId": "ending-last-possession"
        }
      ]
    },
    {
      "id": "ending-splintered-blue",
      "code": "Ending 1",
      "title": "Splintered Blue",
      "kind": "ending",
      "text": "The painting tears with a sound too soft for the crime it ends.\n\nYou freeze. Morse curses. The alarm finally screams.\n\nA guard finds you kneeling in a drift of blue flakes, hands cut open by gilded splinters, trying to press a dead sky back together.",
      "endingSummary": "You ruined the canvas while trying to rush the theft, and the guards found you with the dead sky in your hands.",
      "endingArt": "splintered-blue",
      "options": [],
      "endingType": "Bad Ending"
    },
    {
      "id": "ending-shaft",
      "code": "Ending 2",
      "title": "The Missing Landing",
      "kind": "ending",
      "text": "The stair landing has been removed for renovation. Morse knew. Maybe he planned it. Maybe he only hoped.\n\nYou fall through dust, scaffolding, and plastic sheeting. The crate lands first. You land after it.\n\nThe last thing you see is a swirl of painted stars through a crack in the lid.",
      "endingSummary": "You trusted the wrong route and fell through the missing stair landing with the crate below you.",
      "endingArt": "shaft",
      "options": [],
      "endingType": "Gruesome Ending"
    },
    {
      "id": "ending-pressed",
      "code": "Ending 3",
      "title": "Pressed Flat",
      "kind": "ending",
      "text": "The freight lift drops, catches, and drops again.\n\nThe crate wedges sideways. Your shoulder wedges with it. Steel grinds down with patient museum silence.\n\nBy the time the guards pry the gate open, the masterpiece has survived better than you.",
      "endingSummary": "You gambled on the failing freight lift, and the machine preserved the painting better than it preserved you.",
      "endingArt": "pressed",
      "options": [],
      "endingType": "Gruesome Ending"
    },
    {
      "id": "ending-glass-rain",
      "code": "Ending 4",
      "title": "Glass Rain",
      "kind": "ending",
      "text": "The roof gives way in bright pieces.\n\nYou cover the crate instead of your head. It is an honest instinct and a fatal one.\n\nThe courtyard floor becomes a field of glittering teeth, and the sirens arrive too late to matter.",
      "endingSummary": "You crossed the courtyard too openly and died under the collapsing glass roof.",
      "endingArt": "glass-rain",
      "options": [],
      "endingType": "Gruesome Ending"
    },
    {
      "id": "ending-meat-hook",
      "code": "Ending 5",
      "title": "The Hearse Hook",
      "kind": "ending",
      "text": "Morse steps aside while the van rolls backward.\n\nThe old funeral hook catches your coat, then your ribs, then everything underneath that was never meant to hold weight.\n\nThe van leaves the alley clean. Rain handles the rest.",
      "endingSummary": "You challenged Morse before securing the crate, and the hearse van dragged you out of the job for good.",
      "endingArt": "meat-hook",
      "options": [],
      "endingType": "Gruesome Ending"
    },
    {
      "id": "ending-caller",
      "code": "Ending 6",
      "title": "The Caller",
      "kind": "ending",
      "text": "The buyer traces your call faster than fear can become regret.\n\nHeadlights bloom in the pawn shop windows. Doors open below. Boots climb the stairs.\n\nThey do not ask where the painting is until after they have made sure you cannot run from the question.",
      "endingSummary": "You followed the wrong lead, and the buyer's people reached the safehouse before you found the painting.",
      "endingArt": "caller",
      "options": [],
      "endingType": "Gruesome Ending"
    },
    {
      "id": "ending-backroom",
      "code": "Ending 7",
      "title": "Backroom Teeth",
      "kind": "ending",
      "text": "The basement door shuts behind you. Plastic crackles under your shoes.\n\nThe dealer keeps smiling as two men take your arms. On a table nearby, pliers sit in a neat silver row.\n\nBy sunrise, they know everything you know, and you no longer have enough mouth left to lie.",
      "endingSummary": "You walked into the White Room and gave the wrong people all the time they needed.",
      "endingArt": "backroom",
      "options": [],
      "endingType": "Gruesome Ending"
    },
    {
      "id": "ending-saints-knife",
      "code": "Ending 8",
      "title": "Saint's Knife",
      "kind": "ending",
      "text": "Saint moves like she has cut faster people than you.\n\nThe blade opens your sleeve, then your wrist, then the night itself. You fall between stacked pews while Morse lifts the case and does not look back.\n\nOld stained glass turns your blood blue.",
      "endingSummary": "You moved on Saint too early, and her knife ended the heist before dawn.",
      "endingArt": "saints-knife",
      "options": [],
      "endingType": "Gruesome Ending"
    },
    {
      "id": "ending-blue-frost",
      "code": "Ending 9",
      "title": "Blue Frost",
      "kind": "ending",
      "text": "The climate case vents white.\n\nYour fingers freeze to the latch. Your breath crystallizes in your throat. The lilies turn to glass around you.\n\nWhen the truck is found, the painting is intact, and you are curled beside it like a warning label.",
      "endingSummary": "You opened the climate case at the wrong moment and froze beside the protected canvas.",
      "endingArt": "blue-frost",
      "options": [],
      "endingType": "Gruesome Ending"
    },
    {
      "id": "ending-inert-gas",
      "code": "Ending 10",
      "title": "No Air for Stars",
      "kind": "ending",
      "text": "The case alarm opens the room's emergency system.\n\nInvisible gas pours from the ceiling to protect art from fire, theft, and fools. The conservator pounds on the locked door from the other side.\n\nYou die without smoke, without flame, and without enough air to curse yourself.",
      "endingSummary": "You mishandled the canvas and triggered the protection system that values art above air.",
      "endingArt": "inert-gas",
      "options": [],
      "endingType": "Gruesome Ending"
    },
    {
      "id": "ending-aquarium",
      "code": "Ending 11",
      "title": "Aquarium Glass",
      "kind": "ending",
      "text": "The tunnel window splits from floor to ceiling.\n\nCold saltwater punches everyone sideways. Jellyfish spill into the auction light like torn moons.\n\nYou clutch the case until the current folds you against the broken glass and keeps folding.",
      "endingSummary": "You exposed the painting at the auction and the deal drowned in broken aquarium glass.",
      "endingArt": "aquarium",
      "options": [],
      "endingType": "Gruesome Ending"
    },
    {
      "id": "ending-last-possession",
      "code": "Ending 12",
      "title": "Last Possession",
      "kind": "ending",
      "text": "Nobody in the tunnel argues. That is how you know you chose wrong.\n\nThe broker nods once. The collector looks away. The museum channel steps back from the splash zone.\n\nYou keep The Starry Night for almost nine seconds.",
      "endingSummary": "You tried to keep the painting for yourself, and every buyer in the room agreed that you could not leave with it.",
      "endingArt": "last-possession",
      "options": [],
      "endingType": "Bad Ending"
    },
    {
      "id": "good-ending-collector",
      "code": "Good Ending 1",
      "title": "Buried Sky",
      "kind": "ending",
      "text": "Six months later, you live under a name that has never been arrested.\n\nThe money is clean enough to spend slowly. The news still runs anniversary segments about the vanished Van Gogh. Experts talk about loss. Curators talk about history.\n\nYou say nothing.\n\nSomewhere in a mountain vault, The Starry Night hangs in perfect darkness, and you are the only thief who knows which door swallowed the sky.",
      "endingSummary": "You sold the painting to the private collector and disappeared into a quiet fortune.",
      "endingArt": "collector",
      "options": [],
      "endingType": "Good Ending"
    },
    {
      "id": "good-ending-syndicate",
      "code": "Good Ending 2",
      "title": "Paid in Stars",
      "kind": "ending",
      "text": "The syndicate pays before sunrise.\n\nBy noon, your old records are ash. By dusk, Morse is a rumor with broken hands. By midnight, you are on a plane with Iris, two passports, and a balance large enough to bend morality into a new shape.\n\nYou sold the night sky and lived to count it.",
      "endingSummary": "You sold the painting to the syndicate and escaped rich, protected, and impossible to find.",
      "endingArt": "syndicate",
      "options": [],
      "endingType": "Good Ending"
    },
    {
      "id": "neutral-ending-return",
      "code": "Neutral Ending",
      "title": "Returned Sky",
      "kind": "ending",
      "text": "The museum announces an anonymous recovery two weeks later.\n\nNo arrests. No reward ceremony. No fortune large enough to become myth.\n\nYou receive a modest account, a new passport, and one photograph: The Starry Night back under careful light, unharmed.\n\nYou did not win the heist. You survived it. Some nights, that feels close enough.",
      "endingSummary": "You returned the painting through the museum channel and survived with less money but a cleaner exit.",
      "endingArt": "returned",
      "options": [],
      "endingType": "Neutral Ending"
    }
  ]
};
