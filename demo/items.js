var Items =[
    {
        "id" : 0
    },
    {
        "id" : 1,
        "name" : "Assault Cuirass",
        "price" : 5250,
        "additional_information" : [
            "Positive Armor Aura +5 armor 900 AoE",
            "Negative Armor Aura -5 armor 900 AoE",
            "Attack Speed Aura +20 attack speed  900 AoE"
        ],
        "required_by" : [],
        "shop" : "Protectorate",
        "requires" : [
            {
                "count" : 1,
                "id" : 116
            },
            {
                "count" : 1,
                "id" : 122
            },
            {
                "count" : 1,
                "id" : 114
            },
            {
                "count" : 1,
                "id" : 1
            }
        ],
        "description" : "A hellish mail forged in the depths of the river\nStyx."
    },
    {
        "required_by" : [],
        "shop" : "Protectorate",
        "requires" : [
            {
                "count" : 1,
                "id" : 120
            },
            {
                "id" : 128,
                "count" : 1
            },
            {
                "id" : 2,
                "count" : 1
            }
        ],
        "description" : "Preserved heart of an extinct monster. Bolsters\nthe bearer's fortitude.",
        "name" : "Heart of Tarrasque",
        "id" : 2,
        "price" : 5500,
        "additional_information" : [
            "Health Regeneration",
            "Regenerates 2% of the bearer's total hit points\nper second",
            "Disabled if the bearer took damage from a player\nor from Roshan in the last 6 seconds (4 for\nmelee)",
            "Does not stack with itself"
        ]
    },
    {
        "required_by" : [],
        "shop" : "Protectorate",
        "requires" : [
            {
                "count" : 1,
                "id" : 113
            },
            {
                "id" : 102,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 3
            }
        ],
        "description" : "A powerful rod imbued with the strength of\ngiants.",
        "name" : "Black King Bar",
        "id" : 3,
        "price" : 3975,
        "additional_information" : [
            "Cannot be sold",
            "Avatar",
            "Gives magic immunity",
            "Duration and cooldown decrease each time it is\nused",
            "Duration is 10/9/8/7/6/5/4 seconds, and cooldown\nis 80/75/70/65/60/55/50 seconds. After 6 uses it\nstays at 4 second duration and 50 second cooldown"
        ]
    },
    {
        "required_by" : [],
        "requires" : [],
        "description" : "Roshan, the Immortal, was said to own a shield\nthat protected him from death itself.",
        "shop" : "Protectorate",
        "name" : "Aegis of the Immortal",
        "id" : 4,
        "additional_information" : [
            "Drops from Roshan",
            "Reincarnation",
            "Brings you to life with full health and mana 5\nseconds after you die, at the location where you\ndied",
            "Aegis of the Immortal is removed from your\ninventory after reincarnating you once",
            "Aegis of the Immortal is also removed from your\ninventory when Roshan respawns (6 minutes after\nhe was killed)"
        ],
        "price" : 0
    },
    {
        "required_by" : [],
        "shop" : "Protectorate",
        "description" : "Said to have belonged to a goddess, this magical\npiece of armor was forged by divine wisps in the\ndeeps of Winterspring and even today it retains\nmuch of its former power.",
        "requires" : [
            {
                "count" : 1,
                "id" : 125
            },
            {
                "id" : 116,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 5
            }
        ],
        "id" : 5,
        "name" : "Shiva's Guard",
        "price" : 4700,
        "additional_information" : [
            "Can be disassembled",
            "Freezing Aura -40 attack speed 900 AoE",
            "Arctic Blast",
            "Emits a freezing wave around the caster",
            "Enemies hit by the wave take 200 magical damage\nand have their movement speed slowed by 40% for 4\nseconds",
            "The wave extends at a speed of 350 to a max size\nof 900",
            "Costs 100 mana and has a 30 second cooldown"
        ]
    },
    {
        "additional_information" : [
            "Starts with 8 charges.",
            "Pocket Suicide",
            "Instantly commits suicide.",
            "Targeted on the ground to avoid accidental use",
            "Costs 100 mana and has a 300 second cooldown.",
            "Bloodpact",
            "Bloodstone gains 1 charge each time an enemy hero\ndies in 1600 AoE or you get a kill",
            "Each charge gives 1 Mana regeneration per second",
            "When the bearer dies, Bloodpact restores 500 + 30\nper charge HP to allied units in 1675 range, and\nBloodstone loses a third (0.333) of its charges\n(rounded up)",
            "While dead, the bearer gains 1800/1800 AoE vision\nat the location of death, and gains experience in\n1000 AoE at that location",
            "Gold lost on death is reduced by 25 per charge",
            "Respawn time is reduced by 4 seconds per charge",
            "Bloodpact only functions for the highest priority\nBloodstone in the inventory"
        ],
        "price" : 5050,
        "name" : "Bloodstone",
        "id" : 6,
        "description" : "The last of the blood artifacts forged by the\npowerful Hemomancer Erythros centuries ago.",
        "requires" : [
            {
                "id" : 10,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 65
            }
        ],
        "shop" : "Protectorate",
        "required_by" : []
    },
    {
        "price" : 5175,
        "additional_information" : [
            "Spell Block",
            "Blocks most targeted spells once every 17 seconds",
            "Can be cast on an ally to transfer the spell\nblock to it. (Lasts 17 seconds.)",
            "Goes on cooldown when cast or when a spell is\nblocked (by you or the target)",
            "When the cooldown ends, the buff is removed from\nthe ally 700 cast range"
        ],
        "name" : "Linken's Sphere",
        "id" : 7,
        "shop" : "Protectorate",
        "description" : "This magical sphere once protected one of the\nmost famous heroes in history.",
        "requires" : [
            {
                "id" : 65,
                "count" : 1
            },
            {
                "id" : 105,
                "count" : 1
            },
            {
                "id" : 7,
                "count" : 1
            }
        ],
        "required_by" : []
    },
    {
        "required_by" : [],
        "requires" : [
            {
                "count" : 1,
                "id" : 123
            },
            {
                "id" : 128,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 111
            }
        ],
        "description" : "The discarded mantlet of one of Gul'Dan's death\nknights, Vanguard defends its wielder from even\nthe most vicious attacks with ease.",
        "shop" : "Protectorate",
        "id" : 8,
        "name" : "Vanguard",
        "additional_information" : [
            "Damage Block",
            "Gives a 80% chance to block 40 damage if the\nwielder is melee, or an 80% chance to block 20\ndamage if the wielder is ranged (Due to an\ninternal WC3 miscalculation, the block chance is\nin fact about 67% on average rather than the\nstated 80%. Vanguard has an exactly 50% chance to\nblock damage if it blocked on the last attack and\na 100% chance to block if it did not block on the\nlast attack.)"
        ],
        "price" : 2225
    },
    {
        "additional_information" : [
            "Damage Return",
            "Returns any damage you take (after reductions) to\nthe unit that dealt the damage (you still take\nthe damage as well)",
            "Damage is returned as pure damage",
            "Lasts 4.5 seconds, costs 25 mana, and has a 17\nsecond cooldown",
            "Does not return damage that was caused by another\nBlademail"
        ],
        "price" : 2200,
        "id" : 9,
        "name" : "Blade Mail",
        "description" : "Razor-sharp coat of mail, invented by the Burning\nLegion",
        "requires" : [
            {
                "id" : 107,
                "count" : 1
            },
            {
                "id" : 114,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 100
            }
        ],
        "shop" : "Protectorate",
        "required_by" : []
    },
    {
        "id" : 10,
        "name" : "Soul Booster",
        "price" : 3300,
        "additional_information" : [],
        "required_by" : [
            {
                "count" : 1,
                "id" : 6
            }
        ],
        "shop" : "Protectorate",
        "requires" : [
            {
                "id" : 127,
                "count" : 1
            },
            {
                "id" : 128,
                "count" : 1
            },
            {
                "id" : 126,
                "count" : 1
            }
        ],
        "description" : "The crystalized Soul of an ancient dragon."
    },
    {
        "name" : "Hood of Defiance",
        "id" : 11,
        "price" : 2125,
        "additional_information" : [],
        "required_by" : [
            {
                "id" : 29,
                "count" : 1
            }
        ],
        "shop" : "Protectorate",
        "requires" : [
            {
                "id" : 123,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 78
            },
            {
                "count" : "2",
                "id" : 73
            }
        ],
        "description" : "A furred, magic resistant headpiece originally\nworn by Orcish shamans during conjuration\nceremonies, it also heightens the life\nregeneration rate of whoever wears it."
    },
    {
        "additional_information" : [
            "Movespeed and attack speed bonus does not stack\nwith Yasha, Sange and Yasha, or Manta Style",
            "Can be disassembled",
            "Mirror Image (melee)",
            "Creates 2 images that deal 33% damage and take\n350% damage",
            "Has a 0.1 second animation delay for which you\nare invulnerable",
            "Lasts 20 seconds, costs 165 mana, and has a 35\nsecond cooldown",
            "Mirror Image (ranged)",
            "Creates 2 images that deal 28% damage and take\n400% damage",
            "Has a 0.1 second animation delay for which you\nare invulnerable",
            "Lasts 20 seconds, costs 165 mana, and has a 50\nsecond cooldown"
        ],
        "price" : 5050,
        "id" : 12,
        "name" : "Manta Style",
        "requires" : [
            {
                "count" : 1,
                "id" : 105
            },
            {
                "count" : 1,
                "id" : 55
            },
            {
                "id" : 12,
                "count" : 1
            }
        ],
        "description" : "A funky looking axe.",
        "shop" : "Protectorate",
        "required_by" : []
    },
    {
        "description" : "Guinsoo's flaming staff that he uses to turn\npeople into sheep on a whim.",
        "requires" : [
            {
                "count" : 1,
                "id" : 125
            },
            {
                "id" : 105,
                "count" : 1
            },
            {
                "id" : 124,
                "count" : 1
            }
        ],
        "shop" : "Arcane Sanctum",
        "required_by" : [],
        "additional_information" : [
            "Hex",
            "Turns a target unit into a sheep",
            "Hex disables damage block and evasion, and\nreduces the units base movement speed to 140",
            "Affected unit retains its normal health, mana,\narmor value, and armor type",
            "If cast on an illusion, it is immediately\ndestroyed  Lasts 3.5 seconds, costs 100 mana, has\na 35 second cooldown, and an 800 cast range"
        ],
        "price" : 5675,
        "id" : 13,
        "name" : "Guinsoo's Scythe of Vyse"
    },
    {
        "required_by" : [],
        "shop" : "Arcane Sanctum",
        "description" : "A garnet rod constructed from the essence of a\nfire demon, Orchid Malevolence can burn away an\nenemy's spellcasting capabilities for a limited\ntime.",
        "requires" : [
            {
                "count" : "2",
                "id" : 64
            },
            {
                "count" : 1,
                "id" : 14
            }
        ],
        "name" : "Orchid Malevolence",
        "id" : 14,
        "price" : 4125,
        "additional_information" : [
            "Soul Burn",
            "Silences a target unit and amplifies the damage\nit takes by 30%",
            "Amplified damage is dealt at the end of the\nduration as magical damage",
            "Lasts 5 seconds, costs 100 mana, has a 18 second\ncooldown, and a 900 cast range"
        ]
    },
    {
        "id" : 15,
        "name" : "Eul's Scepter of Divinity",
        "price" : 2700,
        "additional_information" : [
            "Movement speed bonus does not stack with other\nEul's Scepters of Divinity",
            "Cyclone",
            "Cyclones a target unit, making it invulnerable\nand unable to act",
            "Double clicking the item will make cyclone be\nused on yourself, even if you are magic immune.",
            "Can target enemies or self",
            "Lasts 2.5 seconds, deals 50 damage, costs 75\nmana, has a 23 second cooldown, and has a 700\ncast range"
        ],
        "required_by" : [],
        "shop" : "Arcane Sanctum",
        "requires" : [
            {
                "count" : 1,
                "id" : 104
            },
            {
                "count" : 1,
                "id" : 75
            },
            {
                "count" : 1,
                "id" : 124
            },
            {
                "count" : 1,
                "id" : 15
            }
        ],
        "description" : "A very powerful relic, a reminder to us of the\narchaic age."
    },
    {
        "additional_information" : [
            "Force",
            "Pushes any unit 600 units in the direction it is\nfacing over a 0.4s duration.",
            "Double clicking the item will make Force be used\non yourself.",
            "Does not interrupt the target's actions.",
            "The -disablehelp command will prevent an ally\nfrom casting this spell on you.",
            "Will not work on a unit inside Chronosphere or\nBlack Hole.",
            "Costs 25 mana, has a 20 second cooldown, and a\n800 cast range."
        ],
        "price" : 2250,
        "name" : "Force Staff",
        "id" : 16,
        "requires" : [
            {
                "count" : 1,
                "id" : 104
            },
            {
                "count" : 1,
                "id" : 73
            },
            {
                "count" : 1,
                "id" : 16
            }
        ],
        "description" : "",
        "shop" : "Arcane Sanctum",
        "required_by" : []
    },
    {
        "id" : 17,
        "name" : "Dagon",
        "additional_information" : [
            "Buy recipe to upgrade (5 levels)",
            "Energy Burst",
            "Deals 400/500/600/700/800 magical damage to a\ntarget unit",
            "Costs 180/160/140/120/100 mana, has a\n35/30/25/20/15 seconds cooldown, and a\n600/650/700/750/800 cast range"
        ],
        "price" : 2720,
        "required_by" : [],
        "requires" : [
            {
                "id" : 104,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 69
            },
            {
                "id" : 17,
                "count" : 1
            }
        ],
        "description" : "A lesser scepter that has been duplicated time\nand time again.",
        "shop" : "Arcane Sanctum"
    },
    {
        "shop" : "Arcane Sanctum",
        "requires" : [
            {
                "count" : 1,
                "id" : 104
            },
            {
                "count" : 1,
                "id" : 98
            },
            {
                "id" : 18,
                "count" : 1
            }
        ],
        "description" : "Considered the holy grail of necromancy and\ndemonology, a powerful malefic force is locked\nwithin its pages. Can be upgraded (3 levels)",
        "required_by" : [],
        "price" : 2700,
        "additional_information" : [
            "Buy recipe to upgrade (3 levels)",
            "Demonic Summoning",
            "Summons a Necronomicon Warrior and a Necronomicon\nArcher to fight for you, their strength and\nabilities are dependant on the Necronomicon's\nlevel",
            "Lasts 40 seconds, costs 50 mana, and has a 95\nsecond cooldown",
            "Necronomicon Warrior has a 25/50/75 mana Feedback\norb (deals 60% of mana burned as damage) and Last\nWill which deals 400/500/600 pure damage to the\nunit that kills it. Level 3 Necronomicon Warrior\nhas a 1000 AoE True Sight aura",
            "Necronomicon Archer has a 125/175/225 mana Mana\nBurn with a 20 second cooldown and 600 cast range\nand a +3%/+6%/+9% movement and attack speed aura\nwith a 900 AoE",
            "Both summons have 4 armor and 40% spell\nresistance.",
            "Full stats of the Necronomicon Warrior and\nNecronomicon Archer can be found on the Unit\nStatistics page"
        ],
        "name" : "Necronomicon",
        "id" : 18
    },
    {
        "required_by" : [],
        "shop" : "Arcane Sanctum",
        "description" : "The scepter of a wizard with Demigod-like powers.",
        "requires" : [
            {
                "id" : 127,
                "count" : 1
            },
            {
                "id" : 102,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 103
            },
            {
                "count" : 1,
                "id" : 104
            }
        ],
        "id" : 19,
        "name" : "Aghanim's Scepter",
        "price" : 4200,
        "additional_information" : [
            "Can be disassembled",
            "Ultimate Upgrade",
            "Upgrades the ultimate of certain heroes when\nacquired, details can be found on the appropriate\nhero page Only affects Beastmaster , Earthshaker\n, Pandaren Brewmaster , Stone Giant , Clockwerk\nGoblin , Sacred Warrior , Axe , Doom Bringer ,\nLord of Avernus , Night Stalker , Butcher ,\nUndying , Spiritbreaker , Sand King , Juggernaut\n, Moon Rider , Gyrocopter , Vengeful Spirit ,\nVenomancer , Netherdrake , Geomancer , Lightning\nRevenant , Faceless Void , Crystal Maiden ,\nEnchantress , Faerie Dragon , Holy Knight , Lord\nof Olympus , Prophet , Slayer , Windrunner , Ogre\nMagi , Goblin Techies , Twin Head Dragon , Shadow\nShaman , Bane Elemental , Dark Seer , Demon Witch\n, Lich , Necrolyte , Oblivion , Obsidian\nDestroyer , Queen of Pain , Warlock , Shadow\nPriest , Invoker , Necro'lic , Tormented Soul ,\nWitch Doctor"
        ]
    },
    {
        "price" : 5225,
        "additional_information" : [
            "Reset Cooldowns",
            "Resets the cooldowns of all your abilities and\nitems",
            "Costs 375 mana, and has a 160 second cooldown"
        ],
        "name" : "Refresher Orb",
        "id" : 20,
        "shop" : "Arcane Sanctum",
        "requires" : [
            {
                "id" : 64,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 65
            },
            {
                "count" : 1,
                "id" : 20
            }
        ],
        "description" : "A powerful artifact created for the wizard\nAghanim.",
        "required_by" : []
    },
    {
        "additional_information" : [
            "Discord",
            "Applies a debuff on all enemy units in a 600 AoE,\ncausing them to have reduced magic resistance for\na duration.",
            "Amplifies magic damage by 25%  Lasts 25 seconds,\ncosts 75 mana, has a 30 second cooldown, and an\n1000 cast range"
        ],
        "price" : 2670,
        "id" : 21,
        "name" : "Veil of Discord",
        "requires" : [
            {
                "id" : 115,
                "count" : 1
            },
            {
                "id" : 69,
                "count" : 1
            },
            {
                "id" : 21,
                "count" : 1
            }
        ],
        "description" : "",
        "shop" : "Arcane Sanctum",
        "required_by" : []
    },
    {
        "name" : "Rod of Atos",
        "id" : 22,
        "price" : 3100,
        "additional_information" : [
            "Cripple  Slows the target's movement speed by 60%\nfor 4 seconds.",
            "Costs 50 mana, has a 10 seconds cooldown, and a\n1200 cast range"
        ],
        "required_by" : [],
        "shop" : "Arcane Sanctum",
        "description" : "",
        "requires" : [
            {
                "count" : "2",
                "id" : 104
            },
            {
                "count" : 1,
                "id" : 128
            }
        ]
    },
    {
        "requires" : [
            {
                "id" : 27,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 31
            },
            {
                "id" : 23,
                "count" : 1
            }
        ],
        "description" : "A glowing jewel formed out of assorted parts that\nsomehow fit together perfectly, Mekansm protects\nits bearer from danger.",
        "shop" : "Supportive Vestments",
        "required_by" : [],
        "additional_information" : [
            "Mekansm Aura +4 HP regeneration 750 AoE",
            "Restore",
            "Heals 250 HP and gives +2 armor in 750 AoE",
            "Armor bonus lasts 25 seconds",
            "Heal does not affect units that have been healed\nby any Restore in the last 25 seconds",
            "Costs 150 mana, and has a 45 second cooldown"
        ],
        "price" : 2300,
        "name" : "Mekansm",
        "id" : 23
    },
    {
        "required_by" : [],
        "requires" : [
            {
                "id" : 72,
                "count" : 1
            },
            {
                "id" : 28,
                "count" : 1
            },
            {
                "id" : 73,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 24
            }
        ],
        "description" : "An eerie mask that is haunted with the malice of\na fallen vampire.",
        "shop" : "Supportive Vestments",
        "name" : "Vladmir's Offering",
        "id" : 24,
        "additional_information" : [
            "Vampiric Aura +16% Lifesteal",
            "Only affects melee units 900 AoE",
            "Damage Aura +15% damage",
            "Bonus damage is based off of base damage and\ndamage from attribute points 900 AoE",
            "Armor Aura +5 armor",
            "Does not stack with armor auras from Assault\nCuirass, Ring of Basilius, Ring of Aquila, or\nVladmir's Offering 900 AoE",
            "Mana Regeneration Aura +0.8 mana regeneration 900\nAoE"
        ],
        "price" : 2050
    },
    {
        "additional_information" : [
            "Movement speed bonus does not stack with other\nboots (Boots of Speed, Power Treads, Boots of\nTravel, Arcane Boots, Phase Boots, Tranquil\nBoots)",
            "Can be disassembled",
            "Replenish Mana",
            "Restores 135 Mana to allies in 600 AoE",
            "Costs 35 Mana",
            "Does not work on Meepo clones",
            "Has a 55 second cooldown"
        ],
        "price" : 1450,
        "id" : 25,
        "name" : "Arcane Boots",
        "requires" : [
            {
                "id" : 126,
                "count" : 1
            },
            {
                "id" : 76,
                "count" : 1
            }
        ],
        "description" : "",
        "shop" : "Supportive Vestments",
        "required_by" : []
    },
    {
        "requires" : [
            {
                "id" : 28,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 68
            }
        ],
        "description" : "",
        "shop" : "Supportive Vestments",
        "required_by" : [],
        "additional_information" : [
            "Clicking the item will toggle whether Armor Aura\naffects heroes and units, or just heroes",
            "Can be disassembled",
            "Mana Aura +0.65 mana regeneration 900 AoE",
            "Does not stack with mana auras from Ring of\nBasilius or Ring of Aquila",
            "Armor Aura +2 armor 900 AoE",
            "Does not stack with armor auras from Assault\nCuirass, Ring of Basilius, Ring of Aquila, or\nVladmir's Offering"
        ],
        "price" : 985,
        "id" : 26,
        "name" : "Ring of Aquila"
    },
    {
        "additional_information" : [
            "Armor Bonus",
            "Gives +2 armor to allied units in a 750 AoE",
            "Lasts 25 seconds on heroes, 30 seconds on units,\ncosts 10 mana, and has a 25 second cooldown"
        ],
        "price" : 800,
        "name" : "Nathrezim Buckler",
        "id" : 27,
        "requires" : [
            {
                "id" : 114,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 97
            },
            {
                "count" : 1,
                "id" : 27
            }
        ],
        "description" : "A powerful shield that imbues the bearer with the\nstrength of heroes past.",
        "shop" : "Supportive Vestments",
        "required_by" : [
            {
                "id" : 23,
                "count" : 1
            }
        ]
    },
    {
        "shop" : "Supportive Vestments",
        "description" : "Ring given as a reward to the greatest Mages of\nthe Alliance during the Second War.",
        "requires" : [
            {
                "count" : 1,
                "id" : 75
            },
            {
                "id" : 110,
                "count" : 1
            }
        ],
        "required_by" : [
            {
                "count" : 1,
                "id" : 26
            },
            {
                "count" : 1,
                "id" : 24
            }
        ],
        "price" : 500,
        "additional_information" : [
            "Clicking the item will toggle whether Armor Aura\naffects heroes and units, or just heroes",
            "Can be disassembled",
            "Mana Aura +0.65 mana regeneration 900 AoE",
            "Does not stack with mana auras from Ring of\nBasilius or Ring of Aquila",
            "Armor Aura +2 armor 900 AoE",
            "Does not stack with armor auras from Assault\nCuirass, Ring of Basilius, Ring of Aquila, or\nVladmir's Offering"
        ],
        "id" : 28,
        "name" : "Ring of Basilius"
    },
    {
        "description" : "A powerful artifact of mysterious origin, this\npipe gives the bearer the insight to summon\nfields of null energy which envelop nearby\nallies.",
        "requires" : [
            {
                "id" : 11,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 31
            },
            {
                "id" : 29,
                "count" : 1
            }
        ],
        "shop" : "Supportive Vestments",
        "required_by" : [],
        "additional_information" : [
            "Barrier",
            "Gives allied units within 900 range a shield that\nblocks 400 spell damage",
            "Lasts 10 seconds, costs 100 mana, and has a 60\nsecond cooldown",
            "Does not affect units that have been affected by\nBarrier in the last 50 seconds",
            "Insight Aura  +4 HP/sec regen  900 AoE"
        ],
        "price" : 3625,
        "name" : "Khadgar's Pipe of Insight",
        "id" : 29
    },
    {
        "additional_information" : [
            "Whenever an enemy hero dies within 1400 AoE,\ngains 2 charges if it has 0 charges, else gains 1\ncharge (each death can only charge one of these\nitems, if two or more heroes in the AoE have this\nitem, only one will be charged)",
            "Soul Release  Can expend one charge to target an\nallied or enemy hero  If an ally is targeted, it\nis healed for 400 HP over 8 seconds (this effect\nends if the hero takes damage from a source other\nthan Sentinel, Scourge or neutral creeps)  If an\nenemy is targeted, it loses 150 HP over 8 seconds\n Has a 7 second cooldown, and 950 cast range"
        ],
        "price" : 875,
        "name" : "Urn of Shadows",
        "id" : 30,
        "requires" : [
            {
                "count" : 1,
                "id" : 75
            },
            {
                "count" : "2",
                "id" : 94
            },
            {
                "count" : 1,
                "id" : 30
            }
        ],
        "description" : "",
        "shop" : "Supportive Vestments",
        "required_by" : []
    },
    {
        "name" : "Headdress of Rejuvenation",
        "id" : 31,
        "price" : 600,
        "additional_information" : [
            "Regeneration Aura +3 HP regeneration 750 AoE"
        ],
        "required_by" : [
            {
                "count" : 1,
                "id" : 29
            },
            {
                "id" : 23,
                "count" : 1
            }
        ],
        "shop" : "Supportive Vestments",
        "requires" : [
            {
                "count" : 1,
                "id" : 73
            },
            {
                "id" : 97,
                "count" : 1
            },
            {
                "id" : 31,
                "count" : 1
            }
        ],
        "description" : "Creates a soothing aura that restores hit points\nfor nearby units."
    },
    {
        "shop" : "Supportive Vestments",
        "description" : "",
        "requires" : [
            {
                "id" : 114,
                "count" : 1
            },
            {
                "id" : 75,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 32
            }
        ],
        "required_by" : [],
        "price" : 1075,
        "additional_information" : [
            "Valor",
            "Target enemy and you lose 6 armor  Lasts 7\nseconds, has a 7 second cooldown, and a 1000 cast\nrange"
        ],
        "name" : "Medallion of Courage",
        "id" : 32
    },
    {
        "requires" : [
            {
                "count" : 1,
                "id" : 67
            },
            {
                "count" : 1,
                "id" : 100
            },
            {
                "id" : 33,
                "count" : 1
            }
        ],
        "description" : "",
        "shop" : "Supportive Vestments",
        "required_by" : [],
        "additional_information" : [
            "Comes with 5 charges. The charges can be\nreplenished by buying the recipe again.",
            "Endurance Aura +5 attack speed +5% movement speed\n900 AoE",
            "Endurance",
            "Gives +10 attack speed and +10% movement speed\nduring 6 seconds to all allied player-controlled\nunits in a 900 AoE",
            "Has a 30 second cooldown"
        ],
        "price" : 1850,
        "name" : "Ancient Janggo of Endurance",
        "id" : 33
    },
    {
        "price" : 975,
        "additional_information" : [
            "Movement speed bonus does not stack with other\nboots (Boots of Speed, Power Treads, Boots of\nTravel, Arcane Boots, Phase Boots, Tranquil\nBoots)",
            "Can be disassembled",
            "If you attack or are attacked, Tranquil Boots\nloses 30 movement speed and all 12 HP regen for\n13 seconds."
        ],
        "name" : "Tranquil Boots",
        "id" : 34,
        "shop" : "Supportive Vestments",
        "requires" : [
            {
                "id" : 76,
                "count" : 1
            },
            {
                "id" : 73,
                "count" : 1
            },
            {
                "id" : 110,
                "count" : 1
            }
        ],
        "description" : "",
        "required_by" : []
    },
    {
        "shop" : "Ancient Weaponary",
        "requires" : [
            {
                "count" : 1,
                "id" : 118
            },
            {
                "id" : 121,
                "count" : 1
            }
        ],
        "description" : "The Divine Rapier was granted by God himself to\nthe rebels in the War of the Magi.",
        "required_by" : [],
        "price" : 6200,
        "additional_information" : [
            "Drops on death.",
            "Cannot be destroyed.",
            "Can switch between 2 states, being in the\n\"Original Rapier\" mode when assembled.",
            "Original Rapier",
            "Can be dropped freely by its wearer",
            "Can be picked up by allies, but only its original\nowner benefits from it (unshareable)",
            "Will switch permanently to the \"Free Rapier\" mode\nwhen picked up by an enemy of the original owner",
            "Free Rapier",
            "Cannot be dropped once picked up",
            "Anyone wearing it will benefit from it (fully\nshareable)"
        ],
        "name" : "Divine Rapier",
        "id" : 35
    },
    {
        "name" : "Monkey King Bar",
        "id" : 36,
        "price" : 5400,
        "additional_information" : [
            "Clicking the item will toggle True Strike on and\noff",
            "True Strike",
            "Prevents your attacks from missing (except due to\nexceeding Movement Buffer Range on melee units)",
            "Interferes with some attack modifiers on ranged\nunits",
            "Mini-Bash",
            "Gives a 35% chance to bash on attacks",
            "Deals 100 bonus damage and stuns for 0.01 seconds"
        ],
        "required_by" : [],
        "shop" : "Ancient Weaponary",
        "requires" : [
            {
                "id" : 112,
                "count" : "2"
            },
            {
                "id" : 118,
                "count" : 1
            }
        ],
        "description" : "A powerful staff used by a martial arts master."
    },
    {
        "id" : 37,
        "name" : "Radiance",
        "price" : 5150,
        "additional_information" : [
            "Clicking Radiance will toggle Burn Damage on and\noff",
            "Burn Damage",
            "Deals 50 magical damage per second in a 700 AoE"
        ],
        "required_by" : [],
        "shop" : "Ancient Weaponary",
        "requires" : [
            {
                "count" : 1,
                "id" : 121
            },
            {
                "count" : 1,
                "id" : 37
            }
        ],
        "description" : "A divine weapon that gives damage and a bright\nburning effect that damages nearby enemies."
    },
    {
        "shop" : "Ancient Weaponary",
        "description" : "The Butterfly is a blade that was magically\ncreated for use in the War of the Magi, but never\nused.  Only recently recovered from the Avalan\nvault.",
        "requires" : [
            {
                "count" : 1,
                "id" : 119
            },
            {
                "id" : 80,
                "count" : 1
            },
            {
                "id" : 108,
                "count" : 1
            }
        ],
        "required_by" : [],
        "price" : 6000,
        "additional_information" : [],
        "id" : 38,
        "name" : "The Butterfly"
    },
    {
        "required_by" : [],
        "shop" : "Ancient Weaponary",
        "requires" : [
            {
                "count" : 1,
                "id" : 118
            },
            {
                "id" : 43,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 39
            }
        ],
        "description" : "When Blizzard made Buriza in .08 it was good.\nThen they decided it wasn't good enough. So in\n.09 they IMPROVED it.",
        "id" : 39,
        "name" : "Buriza-do Kyanon",
        "price" : 5550,
        "additional_information" : [
            "Critical Strike",
            "Gives a 25% chance to deal 2.4x normal damage on\nan attack"
        ]
    },
    {
        "id" : 40,
        "name" : "Cranium Basher",
        "price" : 2950,
        "additional_information" : [
            "Bash",
            "Gives a 25% chance for melee heroes, and 10%\nchance for ranged heroes to bash on attack",
            "Stuns for 1.4 seconds",
            "Has a 2 second cooldown",
            "Does not function with other Cranium Bashers,\nAbyssal Blades, Troll Warlord's Bash, Slithereen\nGuard's Bash, Faceless Void's Time Lock or\nSpiritbreaker's Greater Bash"
        ],
        "required_by" : [
            {
                "count" : 1,
                "id" : 42
            }
        ],
        "shop" : "Ancient Weaponary",
        "requires" : [
            {
                "count" : 1,
                "id" : 112
            },
            {
                "id" : 98,
                "count" : 1
            },
            {
                "id" : 40,
                "count" : 1
            }
        ],
        "description" : "A powerful weapon, used to bash skulls in."
    },
    {
        "price" : 4350,
        "additional_information" : [
            "Cleave 35% Cleave on attack 250 AoE",
            "Cleave does not work on ranged units"
        ],
        "id" : 41,
        "name" : "Battle Fury",
        "shop" : "Ancient Weaponary",
        "requires" : [
            {
                "count" : 1,
                "id" : 109
            },
            {
                "count" : 1,
                "id" : 107
            },
            {
                "id" : 65,
                "count" : 1
            }
        ],
        "description" : "The user becomes a powerful killing machine.",
        "required_by" : []
    },
    {
        "additional_information" : [
            "Can be disassembled",
            "Bash",
            "Gives a 25% chance for melee heroes, and 10%\nchance for ranged heroes to bash on attack",
            "Stuns for 1.4 seconds",
            "Has a 2 second cooldown",
            "Does not function with other Cranium Bashers,\nAbyssal Blades, Troll Warlord's Bash, Slithereen\nGuard's Bash, Faceless Void's Time Lock or\nSpiritbreaker's Greater Bash",
            "Overwhelm",
            "Disables a target unit for 2 seconds.",
            "Can be cast on magic immune units.",
            "Costs 150 mana, has a 60 seconds cooldown, and a\n140 cast range"
        ],
        "price" : 6750,
        "name" : "Abyssal Blade",
        "id" : 42,
        "description" : "",
        "requires" : [
            {
                "id" : 121,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 40
            }
        ],
        "shop" : "Ancient Weaponary",
        "required_by" : []
    },
    {
        "additional_information" : [
            "Critical Strike",
            "Gives a 20% chance to deal 1.75x normal damage on\nan attack"
        ],
        "price" : 2150,
        "name" : "Crystalys",
        "id" : 43,
        "requires" : [
            {
                "count" : 1,
                "id" : 107
            },
            {
                "count" : 1,
                "id" : 106
            },
            {
                "count" : 1,
                "id" : 43
            }
        ],
        "description" : "Named after a decisive battle in the War of the\nMagi, in which the Rebels rescued Roshan from his\nimprisonment at Crystalys.",
        "shop" : "Ancient Weaponary",
        "required_by" : [
            {
                "count" : 1,
                "id" : 39
            }
        ]
    },
    {
        "additional_information" : [
            "Can only carry one",
            "Unholy Strength",
            "Gives +31 damage, +10 attack speed, and +25\nStrength while active, but drains 40 HP per\nsecond which can't be reduced.",
            "Gives 475 HP over 0.7 seconds on activation and\nremoves 475 HP instantly on deactivation.",
            "You cannot die from the degen or from the health\nloss when deactivating"
        ],
        "price" : 2600,
        "name" : "Armlet of Mordiggian",
        "id" : 44,
        "requires" : [
            {
                "count" : 1,
                "id" : 115
            },
            {
                "count" : 1,
                "id" : 71
            },
            {
                "id" : 106,
                "count" : 1
            },
            {
                "id" : 44,
                "count" : 1
            }
        ],
        "description" : "Heirloom of the Cult of Mordiggian, this item\nallows heroes to exchange their life force for\nunholy strength.",
        "shop" : "Ancient Weaponary",
        "required_by" : []
    },
    {
        "additional_information" : [
            "Wind Walk",
            "Makes you invisible until the duration ends, or\nuntil you attack or use an ability",
            "While invisible you move 20% faster and can move\nthrough units",
            "Has a 0.3 second fade time",
            "Attacking to break the invisibility will cause\nyou to deal 150 bonus physical damage on your\nattack",
            "Lasts 14 seconds, costs 75 mana, and has a 28\nsecond cooldown"
        ],
        "price" : 3000,
        "name" : "Lothar's Edge",
        "id" : 45,
        "description" : "The legendary Lothar's blade that was dropped\nduring the Second War.",
        "requires" : [
            {
                "count" : 1,
                "id" : 109
            },
            {
                "count" : 1,
                "id" : 82
            }
        ],
        "shop" : "Ancient Weaponary",
        "required_by" : []
    },
    {
        "id" : 46,
        "name" : "Ethereal Blade",
        "additional_information" : [
            "Can be disassembled  Ether blast",
            "Ether Blast converts you and target unit into\nethereal form.\tLasts 4 seconds on allies and 3\nseconds on enemies.  Target unit, if it is an\nenemy, is slowed by 80% for 3 seconds and is\ndealt 75 + 2x your primary attribute as magical\ndamage.",
            "Ethereal units take 40% extra magic damage and\ncannot attack or be attacked.",
            "Costs 150 mana, has a 30s cooldown and a 800 cast\nrange.",
            "Shares cooldown with Ghost Scepter"
        ],
        "price" : 4900,
        "required_by" : [],
        "description" : "",
        "requires" : [
            {
                "count" : 1,
                "id" : 119
            },
            {
                "count" : 1,
                "id" : 81
            }
        ],
        "shop" : "Ancient Weaponary"
    },
    {
        "required_by" : [],
        "shop" : "Enchanted Artifacts",
        "requires" : [
            {
                "count" : 1,
                "id" : 51
            },
            {
                "id" : 55,
                "count" : 1
            }
        ],
        "description" : "Sange and Yasha, when attuned by the moonlight of\nTir'nogth and used together, become a very\npowerful combination.",
        "id" : 47,
        "name" : "Sange and Yasha",
        "price" : 4100,
        "additional_information" : [
            "Movespeed and attack speed bonus does not stack\nwith Yasha, Sange and Yasha, or Manta Style",
            "Can be disassembled",
            "Greater Maim",
            "Gives a 16% chance on attack to slow movement\nspeed and attack speed by 32% for 5 seconds"
        ]
    },
    {
        "name" : "Satanic",
        "id" : 48,
        "additional_information" : [
            "Lifesteal",
            "Gives 25% Lifesteal on attacks",
            "Orb effect",
            "Unholy Rage",
            "Gives +175% Lifesteal for 3.5 seconds",
            "Has a 35 second cooldown"
        ],
        "price" : 6150,
        "required_by" : [],
        "requires" : [
            {
                "count" : 1,
                "id" : 120
            },
            {
                "count" : 1,
                "id" : 52
            },
            {
                "count" : 1,
                "id" : 48
            }
        ],
        "description" : "Powerful weapon said to have been wielded by\nDrak'thul himself.",
        "shop" : "Enchanted Artifacts"
    },
    {
        "additional_information" : [
            "Can be disassembled.",
            "Static Charge",
            "Places a charged shield on a target unit. When\nthat unit is damaged, there is a 20% chance that\nlightning will strike the source of the damage\nand 4 enemies near the shielded unit",
            "Lightning deals 200 magical damage in a 900 AoE",
            "Cannot trigger more than once per second  Will\nhave no effect if cast on a unit that already has\na Static Charge active on it  Double clicking on\nthe item will cast Static Charge on yourself",
            "Lasts 15 seconds, costs 50 mana, has a 35 second\ncooldown, and 600 cast range",
            "Chain Lightning",
            "Gives a 25% chance on attack to release a Chain\nLightning that hits several units",
            "Hits 8 units, dealing 150 magical damage to each,\n900 bounce range",
            "Orb effect on regular attacks, orb effect and\nbuff placer on proc"
        ],
        "price" : 5600,
        "name" : "Mjollnir",
        "id" : 49,
        "requires" : [
            {
                "id" : 122,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 53
            },
            {
                "count" : 1,
                "id" : 49
            }
        ],
        "description" : "Thor's magical hammer, made for him by the dwarfs\nBrok and Eitri.",
        "shop" : "Enchanted Artifacts",
        "required_by" : []
    },
    {
        "id" : 50,
        "name" : "Eye of Skadi",
        "additional_information" : [
            "Cold Attack",
            "Causes attacks to slow the movement speed and\nattack speed of the target by 35%",
            "Lasts 5 seconds with melee Eye of Skadi, 3\nseconds with ranged Eye of Skadi",
            "Orb effect and buff placer with melee Eye of\nSkadi, buff placer with ranged Eye of Skadi"
        ],
        "price" : 5675,
        "required_by" : [],
        "description" : "Extremely rare artifact, guarded by the azure\ndragons of Northrend.",
        "requires" : [
            {
                "count" : "2",
                "id" : 105
            },
            {
                "count" : 1,
                "id" : 127
            },
            {
                "id" : 129,
                "count" : 1
            }
        ],
        "shop" : "Enchanted Artifacts"
    },
    {
        "requires" : [
            {
                "count" : 1,
                "id" : 102
            },
            {
                "count" : 1,
                "id" : 98
            },
            {
                "id" : 51,
                "count" : 1
            }
        ],
        "description" : "Sange is an unusually accurate weapon. Magically\nintelligent, it seeks weak points automatically.",
        "shop" : "Enchanted Artifacts",
        "required_by" : [
            {
                "id" : 58,
                "count" : 1
            },
            {
                "id" : 47,
                "count" : 1
            }
        ],
        "additional_information" : [
            "Lesser Maim",
            "Gives a 15% chance on attack to slow movement\nspeed and attack speed by 20% for 4 seconds"
        ],
        "price" : 2050,
        "id" : 51,
        "name" : "Sange"
    },
    {
        "shop" : "Enchanted Artifacts",
        "requires" : [
            {
                "id" : 115,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 72
            }
        ],
        "description" : "The powerful headpiece of a dead necromancer.",
        "required_by" : [
            {
                "id" : 48,
                "count" : 1
            }
        ],
        "price" : 1850,
        "additional_information" : [
            "Can be disassembled",
            "Lifesteal",
            "Gives 15% Lifesteal on attacks",
            "Orb effect",
            "Dominate",
            "Brings the target non-hero non-ancient unit under\nyour control",
            "Cannot dominate more than one unit at a time",
            "Cannot dominate Necronomicon summons.",
            "Dominated unit is not able to block other units\nfrom moving",
            "Spells last the same duration on Dominated units\nas they would on a hero",
            "Costs 75 mana, has a 60 second cooldown, and a\n700 cast range"
        ],
        "id" : 52,
        "name" : "Helm of the Dominator"
    },
    {
        "shop" : "Enchanted Artifacts",
        "requires" : [
            {
                "id" : 113,
                "count" : 1
            },
            {
                "id" : 71,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 53
            }
        ],
        "description" : "A hammer forged for the gods themselves,\nMaelstrom allows its user to harness the power of\nlightning when attacking.",
        "required_by" : [
            {
                "count" : 1,
                "id" : 49
            }
        ],
        "price" : 2700,
        "additional_information" : [
            "Chain Lightning",
            "Gives a 25% chance on attack to release a Chain\nLightning that hits several units",
            "Hits 4 units, dealing 120 magical damage to each,\n900 bounce range",
            "Orb effect on regular attacks, orb effect and\nbuff placer on proc"
        ],
        "id" : 53,
        "name" : "Maelstrom"
    },
    {
        "additional_information" : [
            "Corruption",
            "Causes attacks to place a buff that reduces armor\nby 7",
            "Buff lasts 15 seconds",
            "Works on buildings",
            "Orb effect and buff placer"
        ],
        "price" : 4100,
        "id" : 54,
        "name" : "Stygian Desolator",
        "requires" : [
            {
                "id" : 113,
                "count" : "2"
            },
            {
                "id" : 54,
                "count" : 1
            }
        ],
        "description" : "A wicked weapon, used in torturing political\ncriminals. It hungers for blood.",
        "shop" : "Enchanted Artifacts",
        "required_by" : []
    },
    {
        "id" : 55,
        "name" : "Yasha",
        "price" : 2050,
        "additional_information" : [
            "Movespeed and attack speed bonus does not stack\nwith Yasha, Sange and Yasha, or Manta Style."
        ],
        "required_by" : [
            {
                "count" : 1,
                "id" : 12
            },
            {
                "id" : 47,
                "count" : 1
            }
        ],
        "shop" : "Enchanted Artifacts",
        "requires" : [
            {
                "count" : 1,
                "id" : 103
            },
            {
                "id" : 99,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 55
            }
        ],
        "description" : "Yasha is regarded as the swiftest weapon ever\ncreated. The few that have wielded it say that it\nhas no weight whatsoever."
    },
    {
        "price" : 1900,
        "additional_information" : [
            "Lifesteal",
            "Gives 20% Lifesteal on attacks",
            "Orb effect",
            "Berserk",
            "Gives +100 attack speed and +30% movement speed\nbut causes you to take 30% extra damage",
            "Lasts 12 seconds, costs 25 mana, and has a 25\nsecond cooldown"
        ],
        "id" : 56,
        "name" : "Mask of Madness",
        "shop" : "Enchanted Artifacts",
        "description" : "This Mask looks so strange that it drives you\ninsane.",
        "requires" : [
            {
                "id" : 72,
                "count" : 1
            },
            {
                "id" : 56,
                "count" : 1
            }
        ],
        "required_by" : []
    },
    {
        "shop" : "Enchanted Artifacts",
        "description" : "An enchanted blade that allows the user to cut\nstraight into the enemy's soul.",
        "requires" : [
            {
                "id" : 103,
                "count" : "2"
            },
            {
                "id" : 100,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 57
            }
        ],
        "required_by" : [],
        "price" : 3300,
        "additional_information" : [
            "Can be upgraded once by buying the recipe again",
            "Starts with 8 charges, charges are refreshed to 8\nwhen it is upgraded",
            "Feedback",
            "Causes your attacks to burn 20 (36 when upgraded)\nmana and deal bonus physical damage equal to the\namount of mana burned",
            "Orb effect and buff placer",
            "Purge",
            "Purges a target unit, removing buffs, slowing,\nand dealing damage if it is a summoned unit",
            "Deals 99999 damage to summoned units",
            "Non-hero units will be paused for the first 3\nseconds instead of slowed",
            "Slow lasts 4 seconds, Purge has a 8 second\ncooldown, and a 600 cast range"
        ],
        "name" : "Diffusal Blade",
        "id" : 57
    },
    {
        "shop" : "Enchanted Artifacts",
        "requires" : [
            {
                "count" : 1,
                "id" : 51
            },
            {
                "count" : 1,
                "id" : 80
            }
        ],
        "description" : "",
        "required_by" : [],
        "price" : 3850,
        "additional_information" : [
            "Lesser Maim",
            "Gives a 15% chance on attack to slow movement\nspeed and attack speed by 20% for 4 seconds",
            "Disarm\tRemoves the target's ability to attack\nfor 4.5 seconds to ranged targets and 3 seconds\nto melee targets.",
            "Costs 100 mana, has a 30 seconds cooldown, and a\n600 cast range"
        ],
        "name" : "Heaven's Halberd",
        "id" : 58
    },
    {
        "id" : 59,
        "name" : "Boots of Travel",
        "additional_information" : [
            "Movement speed bonus does not stack with other\nboots (Boots of Speed, Power Treads, Boots of\nTravel, Arcane Boots, Phase Boots, Tranquil\nBoots)",
            "Teleport",
            "Teleports you to an allied non-hero unit",
            "Takes 3 seconds to teleport, costs 75 mana and\nhas a 60 second cooldown",
            "Shares cooldown with Scroll of Town Portal"
        ],
        "price" : 2450,
        "required_by" : [],
        "requires" : [
            {
                "id" : 76,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 59
            }
        ],
        "description" : "Boots that are enchanted by the fairy magic.",
        "shop" : "Gateway Relics"
    },
    {
        "required_by" : [],
        "shop" : "Gateway Relics",
        "requires" : [
            {
                "id" : 76,
                "count" : 1
            },
            {
                "count" : "2",
                "id" : 106
            }
        ],
        "description" : "'-noclip'",
        "name" : "Phase Boots",
        "id" : 60,
        "price" : 1350,
        "additional_information" : [
            "Movement speed bonus does not stack with other\nboots (Boots of Speed, Power Treads, Boots of\nTravel, Arcane Boots, Phase Boots, Tranquil\nBoots)",
            "Phase",
            "Gives 16% movement speed bonus and lets you move\nthrough units",
            "Using items or abilities cancels Phase",
            "Lasts 4 seconds, has a 8 second cooldown"
        ]
    },
    {
        "name" : "Power Treads",
        "id" : 61,
        "additional_information" : [
            "Can only carry one  Movement speed bonus does not\nstack with other boots (Boots of Speed, Power\nTreads, Boots of Travel, Arcane Boots, Phase\nBoots, Tranquil Boots)",
            "Switch Attribute",
            "Switches the attribute that receives a bonus from\nPower Treads",
            "Switches from Strength to Intelligence,\nIntelligence to Agility, and Agility to Strength"
        ],
        "price" : 1400,
        "required_by" : [],
        "requires" : [
            {
                "id" : 76,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 71
            },
            {
                "id" : 98,
                "count" : 1
            },
            {
                "id" : 100,
                "count" : 1
            },
            {
                "id" : 99,
                "count" : 1
            }
        ],
        "description" : "Name brand sneakers",
        "shop" : "Gateway Relics"
    },
    {
        "shop" : "Gateway Relics",
        "requires" : [
            {
                "id" : 73,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 75
            },
            {
                "count" : 1,
                "id" : 62
            }
        ],
        "description" : "The keeper died, sacrificing too much of his soul\nfor control.",
        "required_by" : [],
        "price" : 800,
        "additional_information" : [
            "Sacrifice",
            "Sacrifices 150 HP to temporarily gain 150 Mana.",
            "If the Mana gain cannot fit in your Mana pool, it\ncreates a buffer of Mana that is used before your\nMana pool.",
            "Lasts 10 seconds. Mana gained by Soul Ring that\nis not used in this time is lost.  Will not\nreduce HP below 1.  "
        ],
        "id" : 62,
        "name" : "Soul Ring"
    },
    {
        "required_by" : [],
        "shop" : "Gateway Relics",
        "requires" : [
            {
                "count" : 1,
                "id" : 71
            },
            {
                "id" : 63,
                "count" : 1
            }
        ],
        "description" : "Preserved through unknown magical means, the Hand\nof Midas still retains much of its original\npotency.",
        "id" : 63,
        "name" : "Hand of Midas",
        "price" : 2050,
        "additional_information" : [
            "Transmute",
            "Kills a target non-hero non-ancient unit, giving\nbonus gold and experience",
            "Gives 1.5 times the unit's normal experience as\nadditional bonus experience",
            "Gives 190 reliable gold (you do not get the\nnormal creep bounty)",
            "Cannot be used on Necronomicon summons.",
            "Has a 100 second cooldown"
        ]
    },
    {
        "description" : "A quarterstaff created by the master weaponsmith,\nJax. Deceptively hidden as an ordinary\nquarterstaff.",
        "requires" : [
            {
                "count" : 1,
                "id" : 108
            },
            {
                "id" : 100,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 75
            }
        ],
        "shop" : "Gateway Relics",
        "required_by" : [
            {
                "id" : 14,
                "count" : "2"
            },
            {
                "id" : 20,
                "count" : 1
            }
        ],
        "additional_information" : [],
        "price" : 1675,
        "name" : "Oblivion Staff",
        "id" : 64
    },
    {
        "id" : 65,
        "name" : "Perseverance",
        "additional_information" : [
            "Can be disassembled"
        ],
        "price" : 1750,
        "required_by" : [
            {
                "count" : 1,
                "id" : 41
            },
            {
                "count" : 1,
                "id" : 6
            },
            {
                "count" : 1,
                "id" : 7
            },
            {
                "id" : 20,
                "count" : 1
            }
        ],
        "requires" : [
            {
                "id" : 123,
                "count" : 1
            },
            {
                "id" : 124,
                "count" : 1
            }
        ],
        "description" : "A gem that grants heart to the bearer.",
        "shop" : "Gateway Relics"
    },
    {
        "requires" : [
            {
                "count" : 1,
                "id" : 111
            },
            {
                "count" : "2",
                "id" : 95
            }
        ],
        "description" : "",
        "shop" : "Gateway Relics",
        "required_by" : [],
        "additional_information" : [
            "Damage Block",
            "Gives a 100% chance to block 20 hero damage if\nwielder is melee, or 100% chance to block 10 hero\ndamage if wielder is ranged",
            "Gives a 60% chance to block 20 non-hero damage if\nwielder is melee, or 60% chance to block 10\nnon-hero damage if wielder is ranged"
        ],
        "price" : 550,
        "id" : 66,
        "name" : "Poor Man's Shield"
    },
    {
        "id" : 67,
        "name" : "Bracer",
        "price" : 525,
        "additional_information" : [],
        "required_by" : [
            {
                "id" : 33,
                "count" : 1
            }
        ],
        "shop" : "Gateway Relics",
        "requires" : [
            {
                "id" : 101,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 94
            },
            {
                "count" : 1,
                "id" : 67
            }
        ],
        "description" : "A decorated wrist band."
    },
    {
        "required_by" : [
            {
                "count" : 1,
                "id" : 26
            }
        ],
        "shop" : "Gateway Relics",
        "description" : "A circlet with faint whispers echoing about it.",
        "requires" : [
            {
                "count" : 1,
                "id" : 101
            },
            {
                "count" : 1,
                "id" : 95
            },
            {
                "count" : 1,
                "id" : 68
            }
        ],
        "name" : "Wraith Band",
        "id" : 68,
        "price" : 485,
        "additional_information" : []
    },
    {
        "additional_information" : [],
        "price" : 470,
        "id" : 69,
        "name" : "Null Talisman",
        "requires" : [
            {
                "id" : 101,
                "count" : 1
            },
            {
                "id" : 96,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 69
            }
        ],
        "description" : "A small gemstone attached to several chains.",
        "shop" : "Gateway Relics",
        "required_by" : [
            {
                "id" : 17,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 21
            }
        ]
    },
    {
        "additional_information" : [
            "Gains 1 charge every time a visible enemy unit\ncasts an ability in a 1200 AoE\tMaximum of 15\ncharges  Certain abilities, such as arrow\nabilites (Frost Arrow, Poison Attack, etc) and\nitem abilities, will not add a charge",
            "Energy Charge",
            "Restores 15 HP and mana for each charge"
        ],
        "price" : 500,
        "name" : "Magic Wand",
        "id" : 70,
        "requires" : [
            {
                "count" : 1,
                "id" : 79
            },
            {
                "id" : 97,
                "count" : "3"
            },
            {
                "id" : 70,
                "count" : 1
            }
        ],
        "description" : "A simple wand used to channel magic energies, it\nis favored by apprentice wizards and great\nwarlocks alike.",
        "shop" : "Gateway Relics",
        "required_by" : []
    },
    {
        "required_by" : [
            {
                "count" : 1,
                "id" : 44
            },
            {
                "count" : 1,
                "id" : 63
            },
            {
                "count" : 1,
                "id" : 53
            },
            {
                "count" : 1,
                "id" : 61
            }
        ],
        "description" : "A pair of magical gloves that seems to render\nweapons weightless",
        "requires" : [],
        "shop" : "Cache of Quel-thelan",
        "id" : 71,
        "name" : "Gloves of Haste",
        "additional_information" : [
            "Buyable from Goblin Merchant"
        ],
        "price" : 500
    },
    {
        "required_by" : [
            {
                "id" : 52,
                "count" : 1
            },
            {
                "id" : 56,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 24
            }
        ],
        "shop" : "Cache of Quel-thelan",
        "requires" : [],
        "description" : "The phattest lewt, definitely.",
        "id" : 72,
        "name" : "Mask of Death",
        "price" : 900,
        "additional_information" : [
            "Buyable from Goblin Laboratory",
            "Lifesteal",
            "Gives 15% Lifesteal on attacks",
            "Orb effect"
        ]
    },
    {
        "required_by" : [
            {
                "count" : 1,
                "id" : 16
            },
            {
                "count" : 1,
                "id" : 31
            },
            {
                "id" : 11,
                "count" : 1
            },
            {
                "id" : 62,
                "count" : 1
            },
            {
                "id" : 34,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 24
            }
        ],
        "description" : "This ring is considered a good luck charm among\nthe Gnomes.",
        "requires" : [],
        "shop" : "Cache of Quel-thelan",
        "id" : 73,
        "name" : "Ring of Regeneration",
        "additional_information" : [
            "Buyable from Goblin Laboratory"
        ],
        "price" : 350
    },
    {
        "required_by" : [],
        "requires" : [],
        "description" : "The fabled dagger used by Kelen, the fastest\nassassin ever to walk the lands of Azeroth.",
        "shop" : "Cache of Quel-thelan",
        "id" : 74,
        "name" : "Kelen's Dagger",
        "additional_information" : [
            "Kelen's Dagger cannot be held by Butcher or\nVengeful Spirit",
            "Buyable from Goblin Merchant",
            "Blink",
            "Teleports the caster to a nearby location\ninstantly 1200 range. Targeting a point more than\n1200 range away will cause the unit to blink 960\nunits in that direction.",
            "Targeting an item in your inventory will blink\nyou in the direction of that item's last pick-up\nlocation",
            "Cannot be used if the carrier was damaged by an\nenemy player-controlled unit or by Roshan in the\nlast 3 seconds\tHas a 12 second cooldown"
        ],
        "price" : 2150
    },
    {
        "name" : "Sobi Mask",
        "id" : 75,
        "additional_information" : [
            "Buyable from Goblin Laboratory"
        ],
        "price" : 325,
        "required_by" : [
            {
                "count" : 1,
                "id" : 15
            },
            {
                "count" : 1,
                "id" : 32
            },
            {
                "id" : 64,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 28
            },
            {
                "count" : 1,
                "id" : 62
            },
            {
                "count" : 1,
                "id" : 30
            }
        ],
        "requires" : [],
        "description" : "A common mask used by Mages and Warlocks for\nvarious rituals.",
        "shop" : "Cache of Quel-thelan"
    },
    {
        "requires" : [],
        "description" : "Generic sneakers.",
        "shop" : "Cache of Quel-thelan",
        "required_by" : [
            {
                "count" : 1,
                "id" : 25
            },
            {
                "id" : 59,
                "count" : 1
            },
            {
                "id" : 60,
                "count" : 1
            },
            {
                "id" : 61,
                "count" : 1
            },
            {
                "id" : 34,
                "count" : 1
            }
        ],
        "additional_information" : [
            "Buyable from Goblin Laboratory",
            "Movement speed bonus does not stack with other\nboots (Boots of Speed, Power Treads, Boots of\nTravel, Arcane Boots, Phase Boots, Tranquil\nBoots)"
        ],
        "price" : 450,
        "id" : 76,
        "name" : "Boots of Speed"
    },
    {
        "name" : "Gem of True Sight",
        "id" : 77,
        "price" : 900,
        "additional_information" : [
            "Maximum stock of 1 in store  Store stock takes 10\nminutes to replenish Drops on death Cannot be\ndestroyed",
            "True Sight",
            "Gives True Sight in 1100 AoE",
            "Disabled while carried by a courier or flying\ncourier"
        ],
        "required_by" : [],
        "shop" : "Cache of Quel-thelan",
        "requires" : [],
        "description" : "A magic stone that gives the bearer sight beyond\nsight."
    },
    {
        "name" : "Planeswalker's Cloak",
        "id" : 78,
        "price" : 550,
        "additional_information" : [
            "Buyable from Goblin Laboratory"
        ],
        "required_by" : [
            {
                "count" : 1,
                "id" : 11
            }
        ],
        "shop" : "Cache of Quel-thelan",
        "description" : "A cloak made of a magical material that works to\ndispel any magic cast on it, granting the wearer\n15% resistance to spell attacks.",
        "requires" : []
    },
    {
        "shop" : "Cache of Quel-thelan",
        "requires" : [],
        "description" : "A simple wand used to channel magic energies, it\nis favored by apprentice wizards and great\nwarlocks alike.",
        "required_by" : [
            {
                "count" : 1,
                "id" : 70
            }
        ],
        "price" : 200,
        "additional_information" : [
            "Buyable from Goblin Laboratory",
            "Gains 1 charge every time a visible enemy unit\ncasts an ability in a 1200 AoE\tMaximum of 10\ncharges  Certain abilities, such as arrow\nabilities (Frost Arrow, Poison Attack, etc) and\nitem abilities, will not add a charge",
            "Energy Charge",
            "Restores 15 HP and mana for each charge"
        ],
        "name" : "Magic Stick",
        "id" : 79
    },
    {
        "required_by" : [
            {
                "count" : 1,
                "id" : 58
            },
            {
                "count" : 1,
                "id" : 38
            }
        ],
        "shop" : "Cache of Quel-thelan",
        "requires" : [],
        "description" : "Can't touch this!",
        "id" : 80,
        "name" : "Talisman of Evasion",
        "price" : 1800,
        "additional_information" : [
            "Buyable from Goblin Merchant"
        ]
    },
    {
        "requires" : [],
        "description" : "",
        "shop" : "Cache of Quel-thelan",
        "required_by" : [
            {
                "id" : 46,
                "count" : 1
            }
        ],
        "additional_information" : [
            "Ghost Form",
            "Makes you unable to attack or be attacked, but\ntake 40% extra damage from spells",
            "Ends if you become magic immune, and will have no\neffect if you are already magic immune",
            "Lasts 4 seconds and has a 30 second cooldown.",
            "Shares cooldown with Ethereal Blade"
        ],
        "price" : 1600,
        "name" : "Ghost Scepter",
        "id" : 81
    },
    {
        "id" : 82,
        "name" : "Shadow Amulet",
        "price" : 1600,
        "additional_information" : [
            "Fade",
            "Upon activation, fades your hero out over 1.5\nseconds. If you move, you will lose your\ninvisibility. No cooldown."
        ],
        "required_by" : [
            {
                "id" : 45,
                "count" : 1
            }
        ],
        "shop" : "Cache of Quel-thelan",
        "requires" : [],
        "description" : ""
    },
    {
        "name" : "Clarity Potion",
        "id" : 83,
        "additional_information" : [
            "Stacks with itself in inventory  1 charge",
            "Regenerate Mana",
            "Restores 135 mana over 40 seconds",
            "Effect ends if affected unit takes damage  You\ncan target an ally or yourself to receive the\neffect\tDouble clicking the item will cause it be\nused on yourself"
        ],
        "price" : 50,
        "required_by" : [],
        "requires" : [],
        "description" : "A live wisp is captured in each bottle.",
        "shop" : "Ancient of Wonders"
    },
    {
        "shop" : "Ancient of Wonders",
        "requires" : [],
        "description" : "A magical salve that can quickly mend even the\ndeepest of wounds.",
        "required_by" : [],
        "price" : 115,
        "additional_information" : [
            "Stacks with itself in inventory 1 charge",
            "Regenerate Health",
            "Restores 400 HP over 10 seconds",
            "Effect ends if affected unit takes damage  You\ncan target an ally or yourself to receive the\neffect\tDouble clicking the item causes it to be\nused on yourself"
        ],
        "id" : 84,
        "name" : "Healing Salve"
    },
    {
        "shop" : "Ancient of Wonders",
        "requires" : [],
        "description" : "Created by cannibals that went vegan. Allows the\nbearer to consume three trees.",
        "required_by" : [],
        "price" : 125,
        "additional_information" : [
            "Stacks with itself in inventory 4 charges",
            "Eat Tree",
            "Eats a tree to restore 115 HP over 16 seconds",
            "Purge will end the effect even though the status\nicon will remain",
            "Can be cast on an ally with an open inventory\nslot to give a single charge tango",
            "If the inventory is full, the charge will be\ndropped on the ground.",
            "Single-charge tangoes do not stack in inventory,\ncannot be sold, and have a 60 second cooldown."
        ],
        "id" : 85,
        "name" : "Ancient Tango of Essifation"
    },
    {
        "id" : 86,
        "name" : "Empty Bottle",
        "price" : 650,
        "additional_information" : [
            "Refills to 3/3 full when you are near the\nfountain",
            "Couriers move 30% slower when carrying empty\nbottles",
            "Regenerate",
            "Restores 135 HP and 70 Mana over 3 seconds",
            "Effect ends if you take damage",
            "When used, 3/3 full Bottle changes to 2/3 full,\n2/3 Bottle changes to 1/3 full, and 1/3 full\nBottle changes to Empty Bottle",
            "Cannot be used when Bottle is empty",
            "Has a 0.5 second cooldown",
            "Rune Capture",
            "Stores the target rune in the Bottle, the rune\ncan be used by using the Bottle",
            "When a rune is used from the Bottle, the Bottle\nis refilled to 3/3 full",
            "Stored runes are automatically used after 120\nseconds",
            "Can only be used when Bottle is empty",
            "Bottle is not drop-able when it has a rune stored"
        ],
        "required_by" : [],
        "shop" : "Ancient of Wonders",
        "description" : "A magical bottle that has survived through the\nages. It can store healing water and runes.",
        "requires" : []
    },
    {
        "required_by" : [],
        "requires" : [],
        "description" : "Drops an Observer Ward to spy upon an area. Does\nnot have True Sight.",
        "shop" : "Ancient of Wonders",
        "name" : "Observer Wards",
        "id" : 87,
        "additional_information" : [
            "Maximum stock of 2 in store  Initial stock of 1 \nStore stock takes 6 minutes to replenish  Stacks\nwith itself in inventory 2 charges",
            "Place Ward",
            "Places an Observer Ward to give sight of the\nsurrounding area",
            "Observer Ward has 1600 vision, 200 HP, and is\ninvisible",
            "Observer Ward lasts 7 minutes",
            "Observer Ward gives a 50 gold bounty if killed \nCan be targeted on allies to transfer one charge"
        ],
        "price" : 150
    },
    {
        "id" : 88,
        "name" : "Sentry Wards",
        "price" : 200,
        "additional_information" : [
            "Stacks with itself in inventory 2 charges",
            "Place Ward",
            "Places a Sentry Ward to give True Sight of the\nsurrounding area",
            "Sentry Ward has 800 AoE True Sight, 200 HP, and\nis invisible",
            "Sentry Ward gives 150 ground vision for 12\nseconds after being placed",
            "Sentry Ward lasts 4 minutes",
            "Can be targeted on allies to transfer one charge"
        ],
        "required_by" : [],
        "shop" : "Ancient of Wonders",
        "requires" : [],
        "description" : "Drops a Sentry Ward which gives True Sight,\nrevealing nearby invisible units. Has no natural\nvision itself."
    },
    {
        "shop" : "Ancient of Wonders",
        "requires" : [],
        "description" : "Off to never never land!",
        "required_by" : [],
        "price" : 180,
        "additional_information" : [
            "Stacks with itself in inventory 2 charges",
            "Reveal",
            "Places a buff on enemy units in 1050 AoE that\nprevents them from becoming invisible",
            "Invisible units revealed by Dust are slowed by\n15%.",
            "Lasts 12 seconds, costs 5 mana, and has a 60\nsecond cooldown"
        ],
        "name" : "Dust of Appearance",
        "id" : 89
    },
    {
        "price" : 150,
        "additional_information" : [
            "1 charge",
            "Summon Animal Courier",
            "Summons an Animal Courier to carry items for you",
            "Animal Courier is not affected by most spells \nCosts 5 mana",
            "Full stats for the Animal Courier can be found at\nthe Unit Statistics page"
        ],
        "name" : "Animal Courier",
        "id" : 90,
        "shop" : "Ancient of Wonders",
        "requires" : [],
        "description" : "Creates a small fast unit that can carry items to\nand from your base.",
        "required_by" : [
            {
                "count" : 1,
                "id" : 93
            }
        ]
    },
    {
        "additional_information" : [
            "Buyable from Goblin Laboratory\tStacks with\nitself in inventory  1 charge",
            "Double clicking on the item will automatically\ntarget your fountain",
            "Teleport",
            "Teleports you to an allied building",
            "Can be targeted at a point up to 575 range away\nfrom the building instead of directly on it, it\nwill teleport you to that spot instead",
            "If the targeted point is closer than 50 range to\nthe tower, 70 will be used as the distance from\nthe tower instead",
            "When you use Teleport, the minimap is pinged for\nyour allies at the target location of your\nteleport, and you are given 200 AoE vision at the\ntarget location for the duration of the teleport",
            "When the teleport finishes, trees are destroyed\naround the landing spot in a 480x480 square",
            "The casting time of the teleport is determined by\nhow many allies have targeted a Scroll of Town\nPortal in a 1200 AoE around your target location\nin the last 25 seconds",
            "For each recent allied teleport in the area, time\nis added to your Teleport's casting time (2\nseconds for the first recent allied teleport, 0.5\nsecond for each additional one up to 6.5\nseconds), the default casting time is 3 seconds",
            "Recent allied teleports have no effect if the\ntarget is in the fountain area",
            "Shares cooldown with Boots of Travel",
            "Costs 75 Mana, and has a 65 second cooldown"
        ],
        "price" : 135,
        "id" : 91,
        "name" : "Scroll of Town Portal",
        "requires" : [],
        "description" : "Teleports you to a friendly bulding",
        "shop" : "Ancient of Wonders",
        "required_by" : []
    },
    {
        "id" : 92,
        "name" : "Smoke of Deceit",
        "additional_information" : [
            "Maximum stock of 3 in store  Store stock takes 12\nminutes to replenish  Stacks with itself in\ninventory 1 charge",
            "Deceit",
            "Places a buff on all allied player-controlled\nunits in a 1200 AoE. Makes them invisible, grants\n15% movespeed bonus, and prevents them from\nappearing on minimap to enemy players or being\ndetected by true sight",
            "If the affected unit gets within 1025 AoE of an\nenemy hero or tower, or if it begins an attack,\nthe buff wears off",
            "Buff lasts up to 35 seconds",
            "Dispels when Primal Split summons are in the area\nof effect  Has a 90 second cooldown"
        ],
        "price" : 100,
        "required_by" : [],
        "description" : "",
        "requires" : [],
        "shop" : "Ancient of Wonders"
    },
    {
        "shop" : "Ancient of Wonders",
        "requires" : [
            {
                "id" : 90,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 93
            }
        ],
        "description" : "Creates a small very fast flying unit that can\ncarry items to and from your base.",
        "required_by" : [],
        "price" : 370,
        "additional_information" : [
            "An Animal Courier will be upgraded to a Flying\nCourier if they carry a Flying Courier recipe.",
            "The Flying Courier recipe cannot be purchased\nuntil 3 minutes after first creep spawn.",
            "Summon Flying Courier",
            "Creates a Flying Courier to carry items",
            "Flying Courier has 150 HP, 10 armor, Burst (+50%\nmovespeed for a short time) and magic immunity",
            "Flying Courier cannot carry Aegis of the Immortal",
            "Costs 5 mana",
            "Full unit statistics available on the Unit\nStatistics page"
        ],
        "name" : "Flying Courier",
        "id" : 93
    },
    {
        "id" : 94,
        "name" : "Gauntlets of Ogre Strength",
        "price" : 150,
        "additional_information" : [],
        "required_by" : [
            {
                "count" : 1,
                "id" : 67
            },
            {
                "id" : 30,
                "count" : 1
            }
        ],
        "shop" : "Sena The Accesorizer",
        "requires" : [],
        "description" : "Deluxe version of Brass Knuckles"
    },
    {
        "id" : 95,
        "name" : "Slippers of Agility",
        "additional_information" : [
            "Buyable from Goblin Merchant"
        ],
        "price" : 150,
        "required_by" : [
            {
                "count" : 1,
                "id" : 66
            },
            {
                "id" : 68,
                "count" : 1
            }
        ],
        "requires" : [],
        "description" : "Light boots made from spider skin that tingles\nyour senses",
        "shop" : "Sena The Accesorizer"
    },
    {
        "shop" : "Sena The Accesorizer",
        "requires" : [],
        "description" : "A dandy looking sapphire mantle. Real hit this\nseason",
        "required_by" : [
            {
                "id" : 69,
                "count" : 1
            }
        ],
        "price" : 150,
        "additional_information" : [],
        "name" : "Mantle of Intelligence",
        "id" : 96
    },
    {
        "name" : "Ironwood Branch",
        "id" : 97,
        "additional_information" : [],
        "price" : 50,
        "required_by" : [
            {
                "count" : 1,
                "id" : 31
            },
            {
                "id" : 70,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 27
            }
        ],
        "requires" : [],
        "description" : "Wearing one of this ensures a Good Game",
        "shop" : "Sena The Accesorizer"
    },
    {
        "required_by" : [
            {
                "id" : 40,
                "count" : 1
            },
            {
                "id" : 18,
                "count" : 1
            },
            {
                "id" : 61,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 51
            }
        ],
        "requires" : [],
        "description" : "Not recommended for use by children or pregnant\nwomen",
        "shop" : "Sena The Accesorizer",
        "name" : "Belt of Giant Strength",
        "id" : 98,
        "additional_information" : [
            "Buyable from Goblin Merchant"
        ],
        "price" : 450
    },
    {
        "required_by" : [
            {
                "count" : 1,
                "id" : 61
            },
            {
                "id" : 55,
                "count" : 1
            }
        ],
        "shop" : "Sena The Accesorizer",
        "requires" : [],
        "description" : "A pair of boots often used for moonwalking",
        "id" : 99,
        "name" : "Boots of Elvenskin",
        "price" : 450,
        "additional_information" : [
            "Buyable from Goblin Merchant"
        ]
    },
    {
        "shop" : "Sena The Accesorizer",
        "requires" : [],
        "description" : "This robe corrupts the soul of the user, but\nprovides Intelligence points in return",
        "required_by" : [
            {
                "count" : 1,
                "id" : 33
            },
            {
                "count" : 1,
                "id" : 9
            },
            {
                "id" : 57,
                "count" : 1
            },
            {
                "id" : 64,
                "count" : 1
            },
            {
                "id" : 61,
                "count" : 1
            }
        ],
        "price" : 450,
        "additional_information" : [
            "Buyable from Goblin Merchant"
        ],
        "id" : 100,
        "name" : "Robe of the Magi"
    },
    {
        "name" : "Circlet of Nobility",
        "id" : 101,
        "additional_information" : [],
        "price" : 185,
        "required_by" : [
            {
                "count" : 1,
                "id" : 67
            },
            {
                "id" : 69,
                "count" : 1
            },
            {
                "id" : 68,
                "count" : 1
            }
        ],
        "requires" : [],
        "description" : "An elegant circlet designed for human princesses",
        "shop" : "Sena The Accesorizer"
    },
    {
        "name" : "Ogre Axe",
        "id" : 102,
        "additional_information" : [],
        "price" : 1000,
        "required_by" : [
            {
                "id" : 19,
                "count" : 1
            },
            {
                "id" : 3,
                "count" : 1
            },
            {
                "id" : 51,
                "count" : 1
            }
        ],
        "requires" : [],
        "description" : "You feel tougher just by holding it!",
        "shop" : "Sena The Accesorizer"
    },
    {
        "shop" : "Sena The Accesorizer",
        "requires" : [],
        "description" : "A long blade imbued with time magic",
        "required_by" : [
            {
                "id" : 19,
                "count" : 1
            },
            {
                "id" : 57,
                "count" : 1
            },
            {
                "id" : 55,
                "count" : 1
            }
        ],
        "price" : 1000,
        "additional_information" : [],
        "id" : 103,
        "name" : "Blade of Alacrity"
    },
    {
        "name" : "Staff of Wizardry",
        "id" : 104,
        "price" : 1000,
        "additional_information" : [],
        "required_by" : [
            {
                "count" : 1,
                "id" : 19
            },
            {
                "count" : 1,
                "id" : 17
            },
            {
                "count" : 1,
                "id" : 15
            },
            {
                "count" : 1,
                "id" : 16
            },
            {
                "id" : 18,
                "count" : 1
            },
            {
                "id" : 22,
                "count" : 1
            }
        ],
        "shop" : "Sena The Accesorizer",
        "description" : "You shall not pass!",
        "requires" : []
    },
    {
        "required_by" : [
            {
                "id" : 50,
                "count" : 1
            },
            {
                "id" : 13,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 7
            },
            {
                "count" : 1,
                "id" : 12
            }
        ],
        "shop" : "Sena The Accesorizer",
        "requires" : [],
        "description" : "A mystical orb containing the essence of life",
        "name" : "Ultimate Orb",
        "id" : 105,
        "price" : 2100,
        "additional_information" : [
            "Buyable from Goblin Merchant"
        ]
    },
    {
        "name" : "Blades of Attack",
        "id" : 106,
        "price" : 450,
        "additional_information" : [
            "Buyable from Goblin Merchant"
        ],
        "required_by" : [
            {
                "count" : 1,
                "id" : 44
            },
            {
                "id" : 43,
                "count" : 1
            },
            {
                "id" : 60,
                "count" : 1
            }
        ],
        "shop" : "Weapons Dealer",
        "requires" : [],
        "description" : "A weapon of choice among sadists."
    },
    {
        "requires" : [],
        "description" : "Any knight worth a damn should have one of these.",
        "shop" : "Weapons Dealer",
        "required_by" : [
            {
                "id" : 41,
                "count" : 1
            },
            {
                "id" : 9,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 43
            }
        ],
        "additional_information" : [],
        "price" : 1200,
        "name" : "Broadsword",
        "id" : 107
    },
    {
        "name" : "Quarterstaff",
        "id" : 108,
        "additional_information" : [
            "Buyable from Goblin Merchant"
        ],
        "price" : 900,
        "required_by" : [
            {
                "count" : 1,
                "id" : 64
            },
            {
                "id" : 38,
                "count" : 1
            }
        ],
        "requires" : [],
        "description" : "Four of these form an ordinary staff, duh!",
        "shop" : "Weapons Dealer"
    },
    {
        "id" : 109,
        "name" : "Claymore",
        "price" : 1400,
        "additional_information" : [],
        "required_by" : [
            {
                "count" : 1,
                "id" : 41
            },
            {
                "id" : 45,
                "count" : 1
            }
        ],
        "shop" : "Weapons Dealer",
        "requires" : [],
        "description" : "A sword that can cut through armor, and still\nslice a tomato."
    },
    {
        "id" : 110,
        "name" : "Ring of Protection",
        "price" : 175,
        "additional_information" : [],
        "required_by" : [
            {
                "count" : 1,
                "id" : 28
            },
            {
                "count" : 1,
                "id" : 34
            }
        ],
        "shop" : "Weapons Dealer",
        "requires" : [],
        "description" : "Due to its small size, many have troubles with\nputting it on."
    },
    {
        "id" : 111,
        "name" : "Stout Shield",
        "price" : 250,
        "additional_information" : [
            "Buyable from Goblin Laboratory",
            "Damage Block",
            "Gives a 60% chance to block 20 damage if the\nwielder is melee, or a 60% chance to block 10\ndamage if the wielder is ranged"
        ],
        "required_by" : [
            {
                "count" : 1,
                "id" : 66
            },
            {
                "id" : 8,
                "count" : 1
            }
        ],
        "shop" : "Weapons Dealer",
        "requires" : [],
        "description" : "One man's wine barrel bottom is another man's\nshield!"
    },
    {
        "name" : "Javelin",
        "id" : 112,
        "price" : 1500,
        "additional_information" : [],
        "required_by" : [
            {
                "count" : 1,
                "id" : 40
            },
            {
                "count" : 1,
                "id" : 36
            }
        ],
        "shop" : "Weapons Dealer",
        "description" : "A rather typical spear that can sometimes pierce\nthrough an enemy's armor when used to attack.",
        "requires" : []
    },
    {
        "name" : "Mithril Hammer",
        "id" : 113,
        "price" : 1600,
        "additional_information" : [],
        "required_by" : [
            {
                "count" : 1,
                "id" : 3
            },
            {
                "count" : 1,
                "id" : 53
            },
            {
                "id" : 54,
                "count" : 1
            }
        ],
        "shop" : "Weapons Dealer",
        "requires" : [],
        "description" : "A hammer forged of pure mithril. It's hammer\ntime!"
    },
    {
        "required_by" : [
            {
                "count" : 1,
                "id" : 1
            },
            {
                "count" : 1,
                "id" : 9
            },
            {
                "count" : 1,
                "id" : 32
            },
            {
                "count" : 1,
                "id" : 27
            }
        ],
        "shop" : "Weapons Dealer",
        "requires" : [],
        "description" : "A medium weave of metal chains.",
        "id" : 114,
        "name" : "Chain Mail",
        "price" : 550,
        "additional_information" : [
            "Buyable from Goblin Merchant"
        ]
    },
    {
        "name" : "Helm of Iron Will",
        "id" : 115,
        "additional_information" : [
            "Buyable from Goblin Laboratory"
        ],
        "price" : 950,
        "required_by" : [
            {
                "id" : 44,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 52
            },
            {
                "id" : 21,
                "count" : 1
            }
        ],
        "requires" : [],
        "description" : "The helmet of a legendary warrior who fell in\nbattle.",
        "shop" : "Weapons Dealer"
    },
    {
        "required_by" : [
            {
                "id" : 1,
                "count" : 1
            },
            {
                "id" : 5,
                "count" : 1
            }
        ],
        "requires" : [],
        "description" : "Thick metal plates that protect the entire upper\nbody. Avoid dropping on feet.",
        "shop" : "Weapons Dealer",
        "name" : "Plate Mail",
        "id" : 116,
        "additional_information" : [],
        "price" : 1400
    },
    {
        "requires" : [],
        "description" : "A lumberjack's axe at a bargain price. Also\nuseful against wild animals",
        "shop" : "Weapons Dealer",
        "required_by" : [],
        "additional_information" : [
            "Cannot carry more than one.",
            "Cannot be held by Admiral.",
            "Buyable from Goblin Merchant.  Demolish  Deals\n+32% bonus damage to non-hero units on your\nattacks (+12% for ranged)",
            "Does not stack with most orb effects",
            "Tree Chop",
            "Destroys a target tree or deals 100 damage to a\ntarget ward",
            "Has a 5 second cooldown, and a 350 cast range"
        ],
        "price" : 225,
        "name" : "Quelling Blade",
        "id" : 117
    },
    {
        "additional_information" : [],
        "price" : 2400,
        "name" : "Demon Edge",
        "id" : 118,
        "requires" : [],
        "description" : "A sword of a fallen general of a Demon Army,\nimbued with unholy strength.",
        "shop" : "Marketplace",
        "required_by" : [
            {
                "id" : 39,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 35
            },
            {
                "count" : 1,
                "id" : 36
            }
        ]
    },
    {
        "name" : "Eaglehorn",
        "id" : 119,
        "price" : 3300,
        "additional_information" : [],
        "required_by" : [
            {
                "id" : 46,
                "count" : 1
            },
            {
                "id" : 38,
                "count" : 1
            }
        ],
        "shop" : "Marketplace",
        "description" : "A swift, true-firing bow that almost aims itself",
        "requires" : []
    },
    {
        "shop" : "Marketplace",
        "requires" : [],
        "description" : "A massive axe capable of tearing whole mountains\ndown",
        "required_by" : [
            {
                "id" : 2,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 48
            }
        ],
        "price" : 3200,
        "additional_information" : [],
        "name" : "Messerschmidt's Reaver",
        "id" : 120
    },
    {
        "name" : "Sacred Relic",
        "id" : 121,
        "additional_information" : [],
        "price" : 3800,
        "required_by" : [
            {
                "count" : 1,
                "id" : 42
            },
            {
                "count" : 1,
                "id" : 35
            },
            {
                "count" : 1,
                "id" : 37
            }
        ],
        "requires" : [],
        "description" : "An ancient weapon, it's difficult to tell what\nSacred Relic even is.  Rumors say that it's a\nsword of immeasureable damage. Ouch!",
        "shop" : "Marketplace"
    },
    {
        "name" : "Hyperstone",
        "id" : 122,
        "additional_information" : [],
        "price" : 2000,
        "required_by" : [
            {
                "count" : 1,
                "id" : 1
            },
            {
                "count" : 1,
                "id" : 49
            }
        ],
        "requires" : [],
        "description" : "A mystical, carved stone that boosts the fervor\nof the holder",
        "shop" : "Marketplace"
    },
    {
        "required_by" : [
            {
                "id" : 11,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 65
            },
            {
                "count" : 1,
                "id" : 8
            }
        ],
        "description" : "A shiny ring found beneath a fat halfling's\ncorpse.",
        "requires" : [],
        "shop" : "Marketplace",
        "id" : 123,
        "name" : "Ring of Health",
        "additional_information" : [
            "Buyable from Goblin Laboratory"
        ],
        "price" : 875
    },
    {
        "description" : "A stone of seemingly endless inner power",
        "requires" : [],
        "shop" : "Marketplace",
        "required_by" : [
            {
                "count" : 1,
                "id" : 15
            },
            {
                "count" : 1,
                "id" : 13
            },
            {
                "count" : 1,
                "id" : 65
            }
        ],
        "additional_information" : [],
        "price" : 875,
        "name" : "Void Stone",
        "id" : 124
    },
    {
        "required_by" : [
            {
                "id" : 13,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 5
            }
        ],
        "shop" : "Marketplace",
        "requires" : [],
        "description" : "Enigmatic staff made of only the most expensive\ncrystals",
        "id" : 125,
        "name" : "Mystic Staff",
        "price" : 2700,
        "additional_information" : []
    },
    {
        "price" : 1000,
        "additional_information" : [
            "Buyable from Goblin Laboratory"
        ],
        "id" : 126,
        "name" : "Energy Booster",
        "shop" : "Marketplace",
        "requires" : [],
        "description" : "Enie",
        "required_by" : [
            {
                "id" : 25,
                "count" : 1
            },
            {
                "id" : 10,
                "count" : 1
            }
        ]
    },
    {
        "required_by" : [
            {
                "count" : 1,
                "id" : 19
            },
            {
                "id" : 50,
                "count" : 1
            },
            {
                "count" : 1,
                "id" : 10
            }
        ],
        "description" : "Meenie",
        "requires" : [],
        "shop" : "Marketplace",
        "id" : 127,
        "name" : "Point Booster",
        "additional_information" : [],
        "price" : 1200
    },
    {
        "price" : 1100,
        "additional_information" : [],
        "name" : "Vitality Booster",
        "id" : 128,
        "shop" : "Marketplace",
        "requires" : [],
        "description" : "Minie",
        "required_by" : [
            {
                "count" : 1,
                "id" : 2
            },
            {
                "count" : 1,
                "id" : 22
            },
            {
                "count" : 1,
                "id" : 10
            },
            {
                "id" : 8,
                "count" : 1
            }
        ]
    },
    {
        "price" : 275,
        "additional_information" : [
            "Buyable from Goblin Laboratory",
            "Poison attack",
            "Lasts 4 seconds",
            "Deals 3 damage per second",
            "Slows for 4%(ranged hero)/12%(melee hero)",
            "Buff placer"
        ],
        "name" : "Orb of Venom",
        "id" : 129,
        "shop" : "Marketplace",
        "requires" : [],
        "description" : "",
        "required_by" : [
            {
                "id" : 50,
                "count" : 1
            }
        ]
    }
];