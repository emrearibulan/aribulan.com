window.crashStory = {
  "title": "Crash in the Black Pines",
  "setup": "The player survived a plane crash in a deep forest. They are injured, bleeding, and mobile, but time is limited. Every choice matters. The goal is to escape the forest and find help before blood loss, cold, panic, or predators end the run.\nGood Ending: The player reaches a ranger road and is rescued.\nOther Endings: Bleed out, freeze, fall into the ravine, get taken by wolves, signal the wrong thing.",
  "start": "scene-1",
  "scenes": [
    {
      "id": "scene-1",
      "code": "Scene 1",
      "title": "The Crash",
      "kind": "scene",
      "text": "The world returns in pieces. Smoke. Rain. The smell of fuel. Your ears ring as you crawl out of the torn plane cabin and collapse into wet pine needles. Your left side is bleeding badly. The forest around you is black, endless, and moving in the wind.\n\nBehind you, the wreckage groans. Ahead, trees stretch in every direction. You need help. Fast.",
      "options": [
        {
          "label": "Wreckage",
          "response": "Wreckage. I turn back toward the broken plane. If there is anything useful left inside, I need it before I move.",
          "nextId": "scene-2a"
        },
        {
          "label": "Forest",
          "response": "Forest. I leave the wreck behind and push into the trees. Every second I stay near the fuel smell feels like a gamble.",
          "nextId": "scene-2b"
        }
      ]
    },
    {
      "id": "scene-2a",
      "code": "Scene 2A",
      "title": "Inside the Plane",
      "kind": "scene",
      "text": "The cabin is tilted at an impossible angle. Suitcases hang from torn overhead bins. A dead phone blinks weakly under a seat. Rain hisses through the cracked ceiling. Somewhere near the cockpit, you hear metal ticking from the heat.\n\nYou see two things you might grab quickly: a red emergency kit wedged under a seat, and a passenger's backpack near the broken door.",
      "options": [
        {
          "label": "Medkit",
          "response": "Medkit. I pull the red kit free and tear it open with shaking hands. Bandages. Tape. Painkillers. It is not much, but it may keep me alive longer.",
          "nextId": "scene-3"
        },
        {
          "label": "Backpack",
          "response": "Backpack. I grab the bag and stumble back out into the rain. Inside, I find a half-full water bottle, a lighter, and a crushed granola bar.",
          "nextId": "scene-3"
        }
      ]
    },
    {
      "id": "scene-2b",
      "code": "Scene 2B",
      "title": "Into the Trees",
      "kind": "scene",
      "text": "You force yourself away from the wreck. Each step sends pain through your ribs. Behind you, the plane lets out a deep metallic shriek, then something inside bursts with a dull orange flash.\n\nThe fire gives you one last look at the forest. To your left, the ground slopes downward toward the sound of running water. To your right, the trees thin slightly over a ridge.",
      "options": [
        {
          "label": "Water",
          "response": "Water. I follow the sound downhill. People build near water. Roads cross rivers. That has to mean something.",
          "nextId": "scene-4a"
        },
        {
          "label": "Ridge",
          "response": "Ridge. I climb toward higher ground. If I can see lights, smoke, or a road, I might still have a chance.",
          "nextId": "scene-4b"
        }
      ]
    },
    {
      "id": "scene-3",
      "code": "Scene 3",
      "title": "Stop the Bleeding",
      "kind": "scene",
      "text": "You stagger away from the crash as rain turns the ash into black mud. Your shirt is soaked red on one side. The bleeding is steady now, warm against the cold night.\n\nYou can stop and treat the wound properly, or keep moving while applying pressure with one hand.",
      "options": [
        {
          "label": "Bandage",
          "response": "Bandage. I force myself to stop. It hurts to slow down, but I wrap the wound tight until the bleeding eases. I lose time, but gain a little life.",
          "nextId": "scene-4b"
        },
        {
          "label": "Move",
          "response": "Move. I keep walking, pressing one hand against the wound. I can feel blood slipping between my fingers, but standing still feels like dying.",
          "nextId": "scene-4a"
        }
      ]
    },
    {
      "id": "scene-4a",
      "code": "Scene 4A",
      "title": "The Stream",
      "kind": "scene",
      "text": "You reach a narrow stream cutting through the forest. The water is fast and silver in the moonlight. On the opposite bank, you spot something unnatural: a strip of orange plastic caught on a branch.\n\nDownstream, the water rushes into darker trees. Upstream, the ground rises toward broken rocks.",
      "options": [
        {
          "label": "Downstream",
          "response": "Downstream. I follow the current. Rivers lead somewhere. Maybe a road. Maybe a cabin. Maybe people.",
          "nextId": "scene-5a"
        },
        {
          "label": "Upstream",
          "response": "Upstream. I climb along the rocks toward the orange plastic. It could be from the plane, but it could also be a trail marker.",
          "nextId": "scene-5b"
        }
      ]
    },
    {
      "id": "scene-4b",
      "code": "Scene 4B",
      "title": "The Ridge",
      "kind": "scene",
      "text": "The climb is brutal. Your legs shake. Your breath comes thin and sharp. At the top of the ridge, you look out over a black sea of trees.\n\nThen you see it: a faint blinking light far away. Maybe a tower. Maybe a road beacon. Maybe your imagination.\n\nBelow the ridge, smoke from the crash rises behind you.",
      "options": [
        {
          "label": "Light",
          "response": "Light. I lock my eyes on the blinking point and start moving toward it. It may be nothing, but it is the only sign of civilization I have.",
          "nextId": "scene-5c"
        },
        {
          "label": "Smoke",
          "response": "Smoke. I turn back toward the crash smoke. Search teams may look there first. Staying near the wreck might be smarter than wandering blind.",
          "nextId": "scene-5d"
        }
      ]
    },
    {
      "id": "scene-5a",
      "code": "Scene 5A",
      "title": "The Deer Trail",
      "kind": "scene",
      "text": "The stream leads you to a narrow path pressed into the mud. Hoofprints. Broken grass. A deer trail, maybe. It curves between the trees and disappears into fog.\n\nThen you hear a low growl behind you.\n\nNot close. Not far.",
      "options": [
        {
          "label": "Trail",
          "response": "Trail. I stay on the narrow path and move faster. Animals use trails because they go somewhere. I just hope whatever growled is not using it too.",
          "nextId": "scene-6a"
        },
        {
          "label": "Hide",
          "response": "Hide. I drop behind a fallen tree and hold my breath. The growl passes through the dark, followed by more than one set of footsteps.",
          "nextId": "scene-6b"
        }
      ]
    },
    {
      "id": "scene-5b",
      "code": "Scene 5B",
      "title": "The Orange Marker",
      "kind": "scene",
      "text": "You reach the orange plastic. It is not from the plane. It is tied to a branch with faded black writing: SURVEY LINE 12.\n\nA survey line means people have been here. Maybe workers. Maybe a road.\n\nThe markers continue uphill, but the rocks are slick. A safer dirt slope leads around them, longer but easier.",
      "options": [
        {
          "label": "Markers",
          "response": "Markers. I follow the orange tags directly over the rocks. If someone marked this route, it must lead somewhere important.",
          "nextId": "scene-6c"
        },
        {
          "label": "Slope",
          "response": "Slope. I take the longer dirt path. My body is already failing. One bad fall could end this.",
          "nextId": "scene-6a"
        }
      ]
    },
    {
      "id": "scene-5c",
      "code": "Scene 5C",
      "title": "Toward the Light",
      "kind": "scene",
      "text": "The blinking light appears and vanishes between trees. You walk toward it until the forest floor suddenly drops away.\n\nA ravine splits the woods in front of you. The light is on the other side.\n\nA fallen tree crosses part of the gap. Farther left, the ravine narrows, but reaching that crossing will cost time.",
      "options": [
        {
          "label": "Tree",
          "response": "Tree. I step onto the fallen trunk, arms out, rain dripping from my face. The bark is slick. The drop below is deep enough to kill me.",
          "nextId": "scene-6d"
        },
        {
          "label": "Narrow",
          "response": "Narrow. I force myself along the ravine edge toward the safer crossing. Every extra minute matters, but falling matters more.",
          "nextId": "scene-6a"
        }
      ]
    },
    {
      "id": "scene-5d",
      "code": "Scene 5D",
      "title": "Back to Smoke",
      "kind": "scene",
      "text": "You return toward the glow of the crash. The fire has spread into the trees. Heat rolls through the rain. Pieces of metal hiss in the mud.\n\nThen you hear something else.\n\nA faint voice from the wreckage.\n\n\"Help...\"",
      "options": [
        {
          "label": "Help",
          "response": "Help. I turn toward the voice. I cannot leave someone burning behind me, even if every step costs blood.",
          "nextId": "scene-6e"
        },
        {
          "label": "Leave",
          "response": "Leave. I whisper an apology and turn away. I am barely alive myself. If I stay, we both die.",
          "nextId": "scene-6a"
        }
      ]
    },
    {
      "id": "scene-6a",
      "code": "Scene 6A",
      "title": "The Service Path",
      "kind": "scene",
      "text": "The forest begins to change. The trees are spaced wider here. The ground has old tire marks hidden under leaves. You have found some kind of service path.\n\nBut the path splits.\n\nOne side is muddy and flat. The other is dry but covered with thorn bushes.",
      "options": [
        {
          "label": "Mud",
          "response": "Mud. I take the flat path, even though every step sinks deep. Tire tracks mean vehicles. Vehicles mean people.",
          "nextId": "scene-7a"
        },
        {
          "label": "Thorns",
          "response": "Thorns. I push into the dry brush. The thorns tear at my arms and face, but at least I am not losing my boots in the mud.",
          "nextId": "scene-7b"
        }
      ]
    },
    {
      "id": "scene-6b",
      "code": "Scene 6B",
      "title": "The Wolves",
      "kind": "scene",
      "text": "You stay hidden as shadows move between the trees. Wolves. Three of them. Maybe four.\n\nThey sniff the ground near your blood trail.\n\nOne wolf lifts its head.\n\nIt knows.",
      "options": [
        {
          "label": "Run",
          "response": "Run. I explode from behind the log and sprint blindly through the trees. Pain tears through my side, but fear pushes harder.",
          "nextId": "scene-7b"
        },
        {
          "label": "Still",
          "response": "Still. I stay frozen, barely breathing. The wolves circle closer. One steps over the log and sees me.",
          "nextId": "ending-4"
        }
      ]
    },
    {
      "id": "scene-6c",
      "code": "Scene 6C",
      "title": "Slick Rocks",
      "kind": "scene",
      "text": "The survey markers lead across wet stone. You climb on hands and knees. The orange tags flutter above you like warning flags.\n\nYour boot slips.\n\nYou catch yourself with one hand, but pain flashes white across your ribs.\n\nAbove you, the final marker is tied to a metal post.",
      "options": [
        {
          "label": "Climb",
          "response": "Climb. I keep going. The metal post means infrastructure. I can feel it. I am close to something built by people.",
          "nextId": "scene-7c"
        },
        {
          "label": "Descend",
          "response": "Descend. I stop climbing and back down slowly. The rocks are too dangerous. I would rather lose minutes than lose my life.",
          "nextId": "scene-6a"
        }
      ]
    },
    {
      "id": "scene-6d",
      "code": "Scene 6D",
      "title": "The Fallen Tree",
      "kind": "scene",
      "text": "Halfway across the trunk, the bark shifts under your boot. Your arms windmill in the rain. The ravine opens beneath you like a mouth.\n\nYou can drop low and crawl the rest of the way, or try to rush across before your legs give out.",
      "options": [
        {
          "label": "Crawl",
          "response": "Crawl. I drop onto the trunk and hug it with both arms, dragging myself forward inch by inch. It is humiliating, terrifying, and it works.",
          "nextId": "scene-7c"
        },
        {
          "label": "Rush",
          "response": "Rush. I force myself forward. Three steps. Four. Then my foot slides off the trunk, and the forest flips upside down.",
          "nextId": "ending-3"
        }
      ]
    },
    {
      "id": "scene-6e",
      "code": "Scene 6E",
      "title": "The Other Survivor",
      "kind": "scene",
      "text": "You crawl into the wreckage and find a woman trapped beneath a row of seats. Her face is covered in soot. She is alive, but barely.\n\nThe fire is spreading fast. You may be able to pull her free, but it will take strength you do not have.",
      "options": [
        {
          "label": "Pull",
          "response": "Pull. I grab her under the arms and pull until something in my side feels like it tears open. She comes free. We stumble into the rain together.",
          "nextId": "scene-7d"
        },
        {
          "label": "Comfort",
          "response": "Comfort. I kneel beside her and hold her hand. I tell her help is coming, even though I do not know if that is true. The smoke grows thicker.",
          "nextId": "ending-2"
        }
      ]
    },
    {
      "id": "scene-7a",
      "code": "Scene 7A",
      "title": "Mud Path",
      "kind": "scene",
      "text": "The muddy service path becomes clearer. You see deep tire tracks now. Fresh ones.\n\nThen headlights sweep through the trees ahead.\n\nA vehicle is moving somewhere beyond the bend.",
      "options": [
        {
          "label": "Shout",
          "response": "Shout. I scream until my throat burns. The headlights slow. For one beautiful second, I think they heard me.",
          "nextId": "scene-8a"
        },
        {
          "label": "Follow",
          "response": "Follow. I save my breath and follow the tire tracks toward the vehicle. If I shout too early, I may waste my last strength.",
          "nextId": "scene-8b"
        }
      ]
    },
    {
      "id": "scene-7b",
      "code": "Scene 7B",
      "title": "Thorn Route",
      "kind": "scene",
      "text": "You push through the thorns until your jacket hangs in strips. The forest opens suddenly into a clearing.\n\nAt the center stands an old hunting blind on wooden legs.\n\nFrom inside it, something creaks.\n\nWind, maybe.\n\nOr someone.",
      "options": [
        {
          "label": "Blind",
          "response": "Blind. I climb toward the hunting blind. High ground. Shelter. Maybe supplies. Maybe a radio.",
          "nextId": "scene-8c"
        },
        {
          "label": "Clear",
          "response": "Clear. I stay in the open clearing. I do not trust old wooden boxes in the dark. At least here, I can see what is coming.",
          "nextId": "scene-8d"
        }
      ]
    },
    {
      "id": "scene-7c",
      "code": "Scene 7C",
      "title": "The Tower Fence",
      "kind": "scene",
      "text": "You reach a chain-link fence crowned with rusted wire. Behind it stands a small radio tower, its red light blinking through the rain.\n\nThere is a locked gate. Beside it, a maintenance sign hangs loose.\n\nYou can try to climb the fence, or follow it around looking for an opening.",
      "options": [
        {
          "label": "Climb",
          "response": "Climb. I grip the wet chain-link and pull myself up. The wire bites into my hands, but the tower is right there. I refuse to turn away now.",
          "nextId": "scene-8e"
        },
        {
          "label": "Circle",
          "response": "Circle. I follow the fence line, searching for a break. There has to be another way in. There always is.",
          "nextId": "scene-8b"
        }
      ]
    },
    {
      "id": "scene-7d",
      "code": "Scene 7D",
      "title": "Two Survivors",
      "kind": "scene",
      "text": "The woman leans on you as both of you stagger away from the burning plane. She says her name is Mara. She was a nurse.\n\nShe sees your wound and goes pale.\n\n\"You need pressure. Now.\"\n\nYou can let her treat the wound, or keep moving and guide her through the forest.",
      "options": [
        {
          "label": "Treat",
          "response": "Treat. I let Mara wrap the wound properly. Her hands are steady, even while everything burns behind us. For the first time, I feel like I might survive.",
          "nextId": "scene-8b"
        },
        {
          "label": "Guide",
          "response": "Guide. I tell Mara we need distance first. She argues, but follows. We move together into the dark, slower than before.",
          "nextId": "scene-8d"
        }
      ]
    },
    {
      "id": "scene-8a",
      "code": "Scene 8A",
      "title": "The Headlights",
      "kind": "scene",
      "text": "The headlights stop.\n\nA truck door opens.\n\nYou wave your arms, laughing and crying at the same time. But then the light turns away from you. The engine revs.\n\nThey are leaving.\n\nMaybe they never saw you clearly.",
      "options": [
        {
          "label": "Chase",
          "response": "Chase. I run after the headlights, slipping in the mud, screaming until my voice breaks. The truck is my only chance.",
          "nextId": "scene-9a"
        },
        {
          "label": "Signal",
          "response": "Signal. I grab branches, leaves, anything dry enough, and try to make smoke and movement. If I cannot run, I can still be seen.",
          "nextId": "scene-9b"
        }
      ]
    },
    {
      "id": "scene-8b",
      "code": "Scene 8B",
      "title": "The Maintenance Road",
      "kind": "scene",
      "text": "The tire tracks lead to a real road. Not paved, but maintained. Gravel. Drainage ditches. Cut branches.\n\nYou almost laugh.\n\nThen you see two directions.\n\nLeft slopes downhill. Right climbs toward the blinking tower.",
      "options": [
        {
          "label": "Downhill",
          "response": "Downhill. I follow the road downward. Roads lead out. Downhill means water, houses, and maybe town lights.",
          "nextId": "scene-9c"
        },
        {
          "label": "Tower",
          "response": "Tower. I climb toward the tower. If there is a radio, a phone line, or a maintenance cabin, help may be closer than the road's end.",
          "nextId": "scene-9d"
        }
      ]
    },
    {
      "id": "scene-8c",
      "code": "Scene 8C",
      "title": "The Hunting Blind",
      "kind": "scene",
      "text": "Inside the blind, you find old cans, a moldy blanket, and a cracked flare gun with one flare loaded.\n\nOutside, the forest moves.\n\nThe wolves have reached the clearing.",
      "options": [
        {
          "label": "Flare",
          "response": "Flare. I raise the flare gun and fire into the sky. Red light explodes above the trees, turning the clearing into a nightmare of shadows.",
          "nextId": "scene-9b"
        },
        {
          "label": "Blanket",
          "response": "Blanket. I wrap myself in the moldy blanket and crouch low. Maybe I can wait them out. Maybe morning will come.",
          "nextId": "ending-5"
        }
      ]
    },
    {
      "id": "scene-8d",
      "code": "Scene 8D",
      "title": "The Open Clearing",
      "kind": "scene",
      "text": "The clearing feels safer for only a moment. Then the rain grows heavier. Your hands are numb. Your legs feel far away. The blood loss is catching up.\n\nAcross the clearing, you see a line of wooden posts. Maybe a fence. Maybe a path marker.\n\nBehind you, branches snap.",
      "options": [
        {
          "label": "Posts",
          "response": "Posts. I move toward the wooden posts. Straight lines do not belong in wild forests. Someone put them there for a reason.",
          "nextId": "scene-9c"
        },
        {
          "label": "Branches",
          "response": "Branches. I turn toward the snapping sound, hoping it is another survivor or a search party. The darkness answers with low growls.",
          "nextId": "ending-4"
        }
      ]
    },
    {
      "id": "scene-8e",
      "code": "Scene 8E",
      "title": "Inside the Fence",
      "kind": "scene",
      "text": "You drop hard on the other side of the fence. Pain bursts through your side. The tower hums above you.\n\nAt its base is a locked metal utility box. A small maintenance shed stands nearby, door hanging open.",
      "options": [
        {
          "label": "Shed",
          "response": "Shed. I stumble into the maintenance shed. It smells of oil, wet wood, and dust. There may be tools, a phone, anything.",
          "nextId": "scene-9d"
        },
        {
          "label": "Box",
          "response": "Box. I go straight for the utility box and try to force it open with shaking hands. If there is power, there may be a way to signal.",
          "nextId": "scene-9e"
        }
      ]
    },
    {
      "id": "scene-9a",
      "code": "Scene 9A",
      "title": "The Chase",
      "kind": "scene",
      "text": "You chase the truck lights until your vision tunnels. The road tilts beneath you. Your feet slap mud. Your wound opens again.\n\nThe truck slows at a bend.\n\nThis is your last chance.",
      "options": [
        {
          "label": "Jump",
          "response": "Jump. I throw myself into the road, directly in front of the headlights. The truck brakes hard, sliding sideways in the mud.",
          "nextId": "scene-10a"
        },
        {
          "label": "Wave",
          "response": "Wave. I stay at the side and wave both arms, but my strength gives out. My knees hit the mud as the red taillights fade away.",
          "nextId": "ending-1"
        }
      ]
    },
    {
      "id": "scene-9b",
      "code": "Scene 9B",
      "title": "The Signal",
      "kind": "scene",
      "text": "Red flare smoke twists above the trees. For a moment, the forest becomes bright enough to see every raindrop.\n\nThen you hear it.\n\nA helicopter.\n\nFar away, but real.\n\nYou need to make yourself visible.",
      "options": [
        {
          "label": "Clearing",
          "response": "Clearing. I drag myself into the most open space I can find and wave through the pain. If they pass over, they have to see me.",
          "nextId": "scene-10b"
        },
        {
          "label": "Trees",
          "response": "Trees. I stay under cover, afraid the wolves or the weather will finish me before the helicopter arrives. The sound passes overhead, then fades.",
          "nextId": "ending-1"
        }
      ]
    },
    {
      "id": "scene-9c",
      "code": "Scene 9C",
      "title": "Fence Line",
      "kind": "scene",
      "text": "The posts become a fence. The fence becomes a road. A real paved road.\n\nYou reach the edge of the forest and nearly collapse.\n\nIn the distance, you see a small ranger station with one light on.\n\nBetween you and it is the road, empty and shining with rain.",
      "options": [
        {
          "label": "Station",
          "response": "Station. I step onto the road and force myself toward the light. I do not look back. I do not slow down. I only move.",
          "nextId": "scene-10c"
        },
        {
          "label": "Rest",
          "response": "Rest. I sit beside the road for just one second. Just one breath. The rain feels softer now. The station light blurs into a star.",
          "nextId": "ending-1"
        }
      ]
    },
    {
      "id": "scene-9d",
      "code": "Scene 9D",
      "title": "The Maintenance Shed",
      "kind": "scene",
      "text": "Inside the shed, you find a wall phone in a cracked plastic case. No dial tone.\n\nBeside it is an emergency radio with a dead battery slot. On a shelf are two batteries, one corroded and one wrapped in plastic.\n\nYour fingers are clumsy. You can only try one before you lose focus.",
      "options": [
        {
          "label": "Wrapped",
          "response": "Wrapped. I tear open the plastic and slam the battery into the radio. Static bursts through the speaker like thunder.",
          "nextId": "scene-10d"
        },
        {
          "label": "Corroded",
          "response": "Corroded. I shove the old battery into place. The radio sparks once, spits smoke, and dies in my hands.",
          "nextId": "ending-1"
        }
      ]
    },
    {
      "id": "scene-9e",
      "code": "Scene 9E",
      "title": "Utility Box",
      "kind": "scene",
      "text": "You force open the metal box and find switches, labels, and wires you do not understand.\n\nOne label reads BEACON POWER.\nAnother reads GRID RESET.\n\nYour blood drips onto the panel.",
      "options": [
        {
          "label": "Beacon",
          "response": "Beacon. I flip the beacon switch. The tower light above me burns brighter, pulsing red against the storm.",
          "nextId": "scene-10b"
        },
        {
          "label": "Reset",
          "response": "Reset. I pull the grid reset. The tower dies. The red light vanishes, and the forest becomes completely dark.",
          "nextId": "ending-6"
        }
      ]
    },
    {
      "id": "scene-10a",
      "code": "Scene 10A",
      "title": "Road Rescue",
      "kind": "scene",
      "text": "The truck stops inches from you. A man jumps out, shouting. His face changes when he sees the blood.\n\n\"Don't move. I've got you.\"\n\nYou try to answer, but only rain comes into your mouth.",
      "options": [
        {
          "label": "Awake",
          "response": "Awake. I fight to stay conscious while he wraps my wound and calls emergency services. Sirens arrive through the rain.",
          "nextId": "good-ending"
        },
        {
          "label": "Sleep",
          "response": "Sleep. I let my eyes close, but this time I hear voices around me. Real voices. Human voices. I made it far enough.",
          "nextId": "good-ending"
        }
      ]
    },
    {
      "id": "scene-10b",
      "code": "Scene 10B",
      "title": "Seen From Above",
      "kind": "scene",
      "text": "The helicopter circles once. Then again.\n\nA spotlight cuts through the trees and lands near you.\n\nYou raise one shaking hand.\n\nThe light stops moving.\n\nThey have seen you.",
      "options": [
        {
          "label": "Wave",
          "response": "Wave. I wave until my arm drops. The helicopter lowers, and rescue workers spill into the rain below.",
          "nextId": "good-ending"
        },
        {
          "label": "Collapse",
          "response": "Collapse. I fall onto my back, staring into the white light. For once, the brightness is not fire. It is help.",
          "nextId": "good-ending"
        }
      ]
    },
    {
      "id": "scene-10c",
      "code": "Scene 10C",
      "title": "Ranger Station",
      "kind": "scene",
      "text": "The ranger station door opens before you reach it. Someone inside must have seen you through the window.\n\nA woman runs out with a flashlight.\n\n\"Oh my God. Stay with me.\"\n\nYou fall into her arms.",
      "options": [
        {
          "label": "Help",
          "response": "Help. I tell her about the crash, the fire, the forest, the others. She calls it in while pressing towels hard against my wound.",
          "nextId": "good-ending"
        },
        {
          "label": "Crash",
          "response": "Crash. I force out the word again and again until she understands. Crash. Plane. Forest. Others. Then the room turns warm and bright.",
          "nextId": "good-ending"
        }
      ]
    },
    {
      "id": "scene-10d",
      "code": "Scene 10D",
      "title": "Radio Call",
      "kind": "scene",
      "text": "The radio crackles.\n\nA voice answers.\n\n\"Emergency channel. Identify yourself.\"\n\nYou almost laugh. You almost cry. Your thumb slips on the button.\n\nYou have enough strength for one message.",
      "options": [
        {
          "label": "Mayday",
          "response": "Mayday. I give the crash, the forest, the tower, and the bleeding. My words are broken, but enough gets through. The voice tells me to stay awake. Help is coming.",
          "nextId": "good-ending"
        },
        {
          "label": "Location",
          "response": "Location. I repeat the tower number from the wall, slowly and clearly. The voice confirms it. They know where I am now.",
          "nextId": "good-ending"
        }
      ]
    },
    {
      "id": "ending-1",
      "code": "Ending 1",
      "title": "Bleed Out",
      "kind": "ending",
      "text": "You try to keep moving, but your body stops listening. The forest bends around you. Rain taps softly on your face. Somewhere far away, something mechanical hums, or maybe it is only blood in your ears.\n\nYou almost made it.\n\nThen the dark closes in.",
      "options": [],
      "endingType": "Bad Ending"
    },
    {
      "id": "ending-2",
      "code": "Ending 2",
      "title": "Smoke and Fire",
      "kind": "ending",
      "text": "The smoke thickens until the world becomes gray. The woman squeezes your hand once, weakly.\n\nOutside, rain falls. Inside, the fire eats through the broken plane.\n\nYou stayed so she would not be alone.",
      "options": [],
      "endingType": "Tragic Ending"
    },
    {
      "id": "ending-3",
      "code": "Ending 3",
      "title": "Ravine Fall",
      "kind": "ending",
      "text": "The branch slips away. For a second, you are weightless. The red tower light blinks above you, impossibly far away.\n\nThen the ravine takes you.",
      "options": [],
      "endingType": "Bad Ending"
    },
    {
      "id": "ending-4",
      "code": "Ending 4",
      "title": "Taken by Wolves",
      "kind": "ending",
      "text": "The first wolf steps into view. Then another. Then another.\n\nYou try to stand, but your legs fail. Your blood has already told them everything they need to know.\n\nThe forest moves in.",
      "options": [],
      "endingType": "Bad Ending"
    },
    {
      "id": "ending-5",
      "code": "Ending 5",
      "title": "Cold Sleep",
      "kind": "ending",
      "text": "The blanket smells of dust and rot, but it is warm enough for one moment of comfort. You tell yourself you will rest only until the rain slows.\n\nYour eyes close.\n\nMorning comes without you.",
      "options": [],
      "endingType": "Bad Ending"
    },
    {
      "id": "ending-6",
      "code": "Ending 6",
      "title": "Wrong Signal",
      "kind": "ending",
      "text": "The tower goes dark.\n\nNo beacon. No radio. No light.\n\nThe forest becomes endless again.\n\nYou stumble through the black until you no longer know which way is forward.",
      "options": [],
      "endingType": "Bad Ending"
    },
    {
      "id": "good-ending",
      "code": "Good Ending",
      "title": "Rescued",
      "kind": "ending",
      "text": "You wake under white hospital lights. Your side burns, your throat is dry, and your whole body feels like it belongs to someone else.\n\nA nurse notices your eyes open and smiles.\n\n\"You're lucky,\" she says.\n\nYou think of the rain, the trees, the smoke, and the impossible distance between the crash and safety.\n\nLucky.\n\nNo.\n\nYou chose to keep moving.",
      "options": [],
      "endingType": "Good Ending"
    }
  ]
};
