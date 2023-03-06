export interface PokemonDetails {
  abilities: Ability2[];
  base_experience: number;
  forms: Ability[];
  game_indices: Gameindex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Ability;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Type {
  slot: number;
  type: Ability;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Ability;
}

export interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: Other;
  versions: Versions;
}

export interface Versions {
  "generation-i": Generationi;
  "generation-ii": Generationii;
  "generation-iii": Generationiii;
  "generation-iv": Generationiv;
  "generation-v": Generationv;
  "generation-vi": Generationvi;
  "generation-vii": Generationvii;
  "generation-viii": Generationviii;
}

export interface Generationviii {
  icons: Dreamworld;
}

export interface Generationvii {
  icons: Dreamworld;
  "ultra-sun-ultra-moon": Home;
}

export interface Generationvi {
  "omegaruby-alphasapphire": Home;
  "x-y": Home;
}

export interface Generationv {
  "black-white": Blackwhite;
}

export interface Blackwhite {
  animated: Diamondpearl;
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Generationiv {
  "diamond-pearl": Diamondpearl;
  "heartgold-soulsilver": Diamondpearl;
  platinum: Diamondpearl;
}

export interface Diamondpearl {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Generationiii {
  emerald: Officialartwork;
  "firered-leafgreen": Fireredleafgreen;
  "ruby-sapphire": Fireredleafgreen;
}

export interface Fireredleafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Generationii {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

export interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface Generationi {
  "red-blue": Redblue;
  yellow: Redblue;
}

export interface Redblue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface Other {
  dream_world: Dreamworld;
  home: Home;
  "official-artwork": Officialartwork;
}

export interface Officialartwork {
  front_default: string;
  front_shiny: string;
}

export interface Home {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Dreamworld {
  front_default: string;
  front_female?: any;
}

export interface Move {
  move: Ability;
  version_group_details: Versiongroupdetail[];
}

export interface Versiongroupdetail {
  level_learned_at: number;
  move_learn_method: Ability;
  version_group: Ability;
}

export interface Gameindex {
  game_index: number;
  version: Ability;
}

export interface Ability2 {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export interface Ability {
  name: string;
  url: string;
}

export interface PokemonStats {
  base_happiness: number;
  capture_rate: number;
  color: Color;
  egg_groups: Color[];
  evolution_chain: Evolutionchain;
  evolves_from_species?: any;
  flavor_text_entries: Flavortextentry[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genus[];
  generation: Color;
  growth_rate: Color;
  habitat: Color;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: Palparkencounter[];
  pokedex_numbers: Pokedexnumber[];
  shape: Color;
  varieties: Variety[];
}

export interface Variety {
  is_default: boolean;
  pokemon: Color;
}

export interface Pokedexnumber {
  entry_number: number;
  pokedex: Color;
}

export interface Palparkencounter {
  area: Color;
  base_score: number;
  rate: number;
}

export interface Name {
  language: Color;
  name: string;
}

export interface Genus {
  genus: string;
  language: Color;
}

export interface Flavortextentry {
  flavor_text: string;
  language: Color;
  version: Color;
}

export interface Evolutionchain {
  url: string;
}

export interface Color {
  name: string;
  url: string;
}
