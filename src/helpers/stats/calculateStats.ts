import { Gear, PlayerStats, Equipment, Rarity } from "./statsTypes";

function calculateGearStats(gearSet: Gear[]): PlayerStats {
  const totalStats: PlayerStats = {
    mobility: 0,
    resilience: 0,
    recovery: 0,
    discipline: 0,
    intellect: 0,
    strength: 0,
  };

  // Error if it is not a valid gear set.
  if (!validateGearSet(gearSet)) {
    console.error('Cannot calculate gear stats, set is invalid.')  
    return totalStats
  }

  //If gear set is valid, map over each item and add its stats to the total pool.
  gearSet.forEach((item) => {
    Object.keys(totalStats).forEach((stat) => {
       totalStats[stat as keyof PlayerStats] += item.stats[stat as keyof PlayerStats];
    });
  });

  return totalStats;
}

function validateGearSet(gearSet: Gear[]): boolean {
  const gearTypes = new Set();
  for (const gearItem of gearSet) {
    //Return error if there is an error with gear type on any item.
    if (gearItem.type === "Error") {
      console.error(`Invalid gear set: Found gear of type "Error"`);
      return false;
    }
    if (gearTypes.has(gearItem.type)) {
      console.error(`Invalid gear set: Found more than one ${gearItem.type}`);
      return false;
    }
    gearTypes.add(gearItem.type);
  }
  
  // Check if all gear types are present
  const requiredGearTypes = ["Helmet", "Arms", "Chest", "Legs", "ClassItem"];
  for (const requiredType of requiredGearTypes) {
    if (!gearTypes.has(requiredType)) {
      console.error(`Invalid gear set: Missing ${requiredType}`);
      return false;
    }
  }
  
  return true;
}

//functions to convert from JSON/Object strings into proper equipment types.
function convertToEquipment(type: string): Equipment {
  // Switch statement to map string to Equipment type
  switch (type) {
    case "Helmet":
      return "Helmet";
    case "Arms":
      return "Arms";
    case "Chest":
      return "Chest";
    case "Legs":
      return "Legs";
    case "ClassItem":
      return "ClassItem";
    default:
      //default return that should never be encountered.
      return "Error";
  }
}
function convertToRarity(type: string): Rarity {
  // Switch statement to map string to Equipment type
  switch (type) {
    case "Common":
      return "Common";
    case "Uncommon":
      return "Uncommon";
    case "Rare":
      return "Rare";
    case "Legendary":
      return "Legendary";
    case "Exotic":
      return "Exotic";
    default:
      //default return that should never be encountered.
      return "Error";
  }
}


const sampleGear = [
    {
      "type": "Helmet",       
      "name": "Soldier's Helm",      
      "artifice": false,
      "masterwork": false,
      "rarity": "Common",
      "light_level": 1900,  
      "stats": {
        "mobility": 8,
        "resilience": 12,
        "recovery": 4,
        "discipline": 6,
        "intellect": 2,
        "strength": 10
      }
    },
    {
      "type": "Arms",       
      "name": "Gloves of the Iron Fist",      
      "artifice": true,
      "masterwork": true,
      "rarity": "Uncommon",
      "light_level": 1900,  
      "stats": {
        "mobility": 6,
        "resilience": 8,
        "recovery": 2,
        "discipline": 10,
        "intellect": 4,
        "strength": 14
      }
    },   
    {
      "type": "Chest",       
      "name": "Heart of the Champion",      
      "artifice": false,
      "masterwork": true,
      "rarity": "Rare",
      "light_level": 1900,   
      "stats": {
        "mobility": 4,
        "resilience": 18,
        "recovery": 10,
        "discipline": 4,
        "intellect": 6,
        "strength": 8
      }
    },
    {
      "type": "Legs",      
      "name": "Leggings of the Swift",      
      "artifice": true,
      "masterwork": false,
      "rarity": "Legendary",
      "light_level": 1900,  
      "stats": {
        "mobility": 12,
        "resilience": 6,
        "recovery": 8,
        "discipline": 2,
        "intellect": 10,
        "strength": 4
      }  
    },
    {
      "type": "ClassItem",      
      "name": "Amplifier Ring",      
      "artifice": true,
      "masterwork": true,
      "rarity": "Exotic",
      "light_level": 1900,  
      "stats": {
        "mobility": 0,
        "resilience": 0,
        "recovery": 0,
        "discipline": 12,
        "intellect": 18,
        "strength": 0
      }
    }
  ];

const convertedSampleGear = sampleGear.map((gear) => ({
  ...gear,
  type: convertToEquipment(gear.type),
  rarity: convertToRarity(gear.rarity),
}));


const sampleCalc = () => {
  console.log(calculateGearStats(convertedSampleGear));
}

export {
  sampleCalc,
  calculateGearStats,
}