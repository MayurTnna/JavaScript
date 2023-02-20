let jokes=
     [
        {
            "category": "Programming",
            "type": "single",
            "joke": "Debugging is like being the detective in a crime movie where you're also the murderer at the same time.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 42,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "What does the MacBook have in common with Donald Trump?\n\nI would tell you....\nBut I don't compare apples to oranges.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": true,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 233,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Documentation is like sex:\nWhen it's good, it's very good.\nWhen it's bad, it's better than nothing...",
            "flags": {
                "nsfw": true,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": false,
            "id": 305,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Judge: \"I sentence you to the maximum punishment...\"\nMe (thinking): \"Please be death, please be death...\"\nJudge: \"Learn Java!\"\nMe: \"Damn.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 45,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Two SQL tables sit at the bar. A query approaches and asks \"Can I join you?\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 221,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "My ex had an accident. I told the paramedics the wrong blood type for her. She'll finally experience what rejection is really like.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 152,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 37,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "single",
            "joke": "How do you make holy water? You freeze it and drill holes in it.",
            "flags": {
                "nsfw": false,
                "religious": true,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 203,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "Women are like KFC, once you're done with the breasts and thighs, you just have a greasy box to put your bone in.",
            "flags": {
                "nsfw": true,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": true,
                "explicit": true
            },
            "id": 149,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 4,
            "safe": true,
            "lang": "en"
        }
    ]

let j1= Math.floor(Math.random()*(jokes.length-1));
console.log(j1)
myjoke.innerHTML=jokes[j1].myjoke