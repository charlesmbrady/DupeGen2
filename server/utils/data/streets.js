const streets = [
    "Condor",
    "Lazy",
    "Rapid",
    "Trenton",
    "Greenway",
    "Validity",
    "Greenston",
    "Gruyere",
    "Hustler",
    "Green",
    "Bloomfield",
    "Bloomer",
    "Bloomberg",
    "Blooms",
    "Brightbloom",
    "Yellowbloom",
    "Blue",
    "Red",
    "Yellow",
    "Black",
    "Brown",
    "Beverly",
    "Blue",
    "Hancock",
    "Childress",
    "Albatross",
    "Random",
    "Rover",
    "Silver",
    "Gold",
    "Goldsmith",
    "Blacksmith",
    "Ringer",
    "Sparrow",
    "Bluebird",
    "Robin",
    "Rocky",
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seventh",
    "Eighth",
    "Ninth",
    "Tenth",
    "Eleventh",
    "Twelfth",
    "Thirteenth",
    "Fourteenth",
    "Fifteenth",
    "Sixteenth",
    "Seventeenth",
    "Rider",
    "Mansion",
    "Root",
    "Bigfoot",
    "Lavender",
    "Dandelion",
    "Spring",
    "Silver Spring",
    "Hot Spring",
    "Rainbow",
    "Kitten",
    "Donkey",
    "Horseshoe",
    "Seashore",
    "Seashell",
    "Piper",
    "Plover",
    "Rose",
    "Trenton",
    "Treehouse",
    "Javascript",
    "React",
    "Node",
    "Java",
    "Mocha",
    "Kronos",
    "Chaitea",
    "Chai",
    "Latte",
    "Machiatto",
    "Macho Man",
    "Wonder Woman",
    "Wonder",
    "Tech Support",
    "Technology",
    "Franklin",
    "Roosevelt",
    "Morrison",
    "Granville",
    "Rosemary",
    "Thyme",
    "Licorice",
    "Candy",
    "Candyland",
    "Clue",
    "Monopoly",
    "Darkhorse",
    "Fetty Wap",
    "Womper",
    "Bass",
    "Pike",
    "Boardwalk",
    "Ocean",
    "Wave",
    "Swell",
    "Avalanche",
    "Ruby",
    "Rails",
    "Railway",
    "Yard",
    "Cypress",
    "Glassdoor",
    "Brickhouse",
    "Saphire",
    "Magenta",
    "Opal",
    "Emerald",
    "Cook",
    "Howe",
    "Estes",
    "Colorado",
    "Sandpiper",
    "Willow",
    "Willowtree",
    "Oak",
    "Pine",
    "Birch",
    "Mahogany",
    "Cherrywood",
    "Balsa",
    "Aberg",
    "Acker",
    "Alper",
    "Algoma",
    "Almo",
    "Alpine",
    "American",
    "China",
    "Arnoth",
    "Amoth",
    "Anderson",
    "Anhalt",
    "Annamark",
    "Anniversary",
    "Anthes",
    "Anzinger",
    "Arapahoe",
    "Tuckahoe",
    "Arizona",
    "Arkansas",
    "Armistice",
    "Arrowood",
    "Artisan",
    "Atwood",
    "Autumn Leaf",
    "Badeau",
    "Banding",
    "Barby",
    "Barnett",
    "Barnard",
    "Bartillon",
    "Bashford",
    "Basil",
    "Plant",
    "Planter",
    "Bay",
    "Bayside",
    "Becker",
    "Beilfuss",
    "Bellgrove",
    "Blackbird",
    "Blaine",
    "Bleriot",
    "Byrd",
    "Eckner",
    "Bluestem",
    "Greenthumb",
    "Bobcat",
    "Bowman",
    "Bowie",
    "Bodie",
    "Boyd",
    "Brentwood",
    "Briar Crest",
    "Brickson Park",
    "Buell",
    "Bull",
    "Bullhorn",
    "Buena Vista",
    "Buhler",
    "Bultman",
    "Bunting",
    "Burning Wood",
    "Burrows",
    "Butterfield",
    "Butternut",
    "Callang",
    "Calypso",
    "Morpheus",
    "Neo",
    "Cambridge",
    "Homer",
    "Illiad",
    "Odyssey",
    "Troy",
    "Canary",
    "Cardinal",
    "Carey",
    "Carioca",
    "Carpenter",
    "Cascade",
    "Center",
    "Charing Cross",
    "Cherokee",
    "Chinook",
    "Chive",
    "Claremont",
    "Mont Verde",
    "Clemons",
    "Clove",
    "Clover",
    "Coleman",
    "Columbus",
    "Comanche",
    "Commercial",
    "Continental",
    "Coolidge",
    "Corbean",
    "Corry",
    "Quarry",
    "Carribean",
    "Corscot",
    "Cottonwood",
    "Crescent Oaks",
    "Crest Line",
    "Crowley",
    "Del Mar",
    "Delaware",
    "Delladonna",
    "Division",
    "Dixon",
    "Doe Crossing",
    "Dunning",
    "Eastwood",
    "Blackwood",
    "Bluewood",
    "Redwood",
    "Eggendart",
    "Elk",
    "Express",
    "Fair Oaks",
    "Fairfield",
    "Farmco",
    "Fieldstone",
    "Florence",
    "Fremont",
    "Glendale",
    "Glenwood",
    "Wade",
    "Golden Leaf",
    "Golf",
    "Golf Course",
    "Goodland",
    "Badland",
    "Graceland",
    "Granby",
    "Grover",
    "Green Ridge",
    "Blue Ridge",
    "Blue Hills",
    "Rolling Hills",
    "Hallows",
    "Hanover",
    "Hanson",
    "Harbort",
    "Hooker",
    "Hovde",
    "Homewood",
    "Iowa",
    "Dadford",
    "Kipling",
    "Mineral",
    "Killdeer",
    "Laurel",
    "Lakewood",
    "La Follette",
    "Lighthouse Bay",
    "Lindbergh",
    "Lotheville",
    "Lunder",
    "Lyons",
    "Mallard Cove",
    "Mandrake",
    "Goose",
    "Liza",
    "Hyrule",
    "Duku Tree",
    "Windy Alley",
    "Whispy Tree",
    "Whispy Flower",
    "Whispy Wood",
    "Burntwood",
    "Burnt Toast",
    "Buttered Bun",
    "Maple Wood",
    "Manufacturers",
    "Marinars Cove",
    "Pirates Cove",
    "Maryland",
    "Mayfield",
    "Memorial",
    "Carnival",
    "Festival",
    "Party",
    "Mockingbird",
    "Songbird",
    "Morrow",
    "Monument",
    "Hadano",
    "Northview",
    "Southview",
    "New Castle",
    "New Eagle",
    "New School",
    "New Flower",
    "Mayflower",
    "Little Rock",
    "Boyscout",
    "Girlscout",
    "Big Rock",
    "Stone Slope",
    "New England",
    "Pilgrim",
    "New Land",
    "New Shore",
    "Shoresands",
    "Big Wave",
    "Voodoo",
    "Ranger",
    "Goku",
    "Gecko",
    "Lizard",
    "Little Dragon",
    "Namekagon",
    "Nova",
    "Old Gate",
    "Rusty Bench",
    "Wooden Handle",
    "Oxford",
    "Tableau",
    "Pearson",
    "Pawling",
    "Pepper Wood",
    "Pleasure Pond",
    "Prairie Rose",
    "Prairieview",
    "Apprentice",
    "Magician",
    "Wizard",
    "Red Cloud",
    "Black Cloud",
    "Grey Sky",
    "Red Sky",
    "Blue Sky",
    "Ridgeview",
    "Ridgeport",
    "Riverside",
    "Dockside",
    "Dockport",
    "Rockefeller",
    "Roxbury",
    "School",
    "Springview",
    "Winterview",
    "Summerview",
    "Stone Corner",
    "Summit",
    "Summer Ridge",
    "Stonebrook",
    "Sunbrook",
    "Brookside",
    "Babbling Brook",
    "Crystal Creek",
    "Shallow Creek",
    "Sycamore",
    "Talisman",
    "Talmadge",
    "Trailsway",
    "Towne",
    "Twin Pines",
    "Whispering Pines",
    "Valley Edge",
    "Union",
    "Village",
    "Vermont",
    "Village Green",
    "Warbler",
    "Warrior",
    "Wayridge",
    "Wayport",
    "Waywood",
    "Weed",
    "Weedway",
    "Weedly",
    "Weebly",
    "Weber",
    "Webber",
    "Webston",
    "Weeping Birch",
    "Waxwing",
    "Deep Basin",
    "Shallow River",
    "Shallow",
    "Deep Pit"
];

module.exports = streets;