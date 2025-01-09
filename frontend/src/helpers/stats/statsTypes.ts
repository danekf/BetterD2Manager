//setup custom types for equipment and rarity
export type Equipment = "Helmet" | "Arms" | "Chest" | "Legs" | "ClassItem" | "Error";
export type Rarity = "Common" | "Uncommon" | "Rare" | "Legendary" | "Exotic" | "Error";

//setup a type for gear, using the above custom types
export type Gear = {
  type: Equipment,
  name: String,
  artifice: boolean,
  masterwork: boolean,
  rarity: Rarity,
  light_level: number,
  stats: {
    mobility: number,
    resilience: number,
    recovery: number,
    discipline: number,
    intellect: number,
    strength: number,
  }
};

//setup player stats type
export type PlayerStats = {
  mobility: number;
  resilience: number;
  recovery: number;
  discipline: number;
  intellect: number;
  strength: number;
};

