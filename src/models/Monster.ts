export interface IMonster {
    _id?: string,
    alignment: string,
    armor_class: number,
    challenge_rating: number,
    charisma: number,
    charisma_save: number,
    condition_immunities: string,
    constitution: number,
    constitution_save: number,
    damage_immunities: string,
    damage_resistances: string,
    damage_vulnerabilities: string,
    dexterity: number,
    dexterity_save: number,
    hit_dice: string,
    hit_points: number,
    intelligence: number,
    languages: string,
    name: string,
    perception: number,
    senses: string,
    size: string,
    speed: string,
    stealth: string,
    subtype: string,
    wisdom: number,
    wisdom_save: number
}

export class MonsterDTO implements IMonster {
    _id?: string = '';
    alignment = '';
    armor_class = 0;
    challenge_rating = 0;
    charisma = 0;
    charisma_save = 0;
    condition_immunities = '';
    constitution = 0;
    constitution_save = 0;
    damage_immunities = '';
    damage_resistances = '';
    damage_vulnerabilities = '';
    dexterity = 0;
    dexterity_save = 0;
    hit_dice = '';
    hit_points = 0;
    intelligence = 0;
    languages = '';
    name = '';
    perception = 0;
    senses = '';
    size = '';
    speed = '';
    stealth = '';
    subtype = '';
    wisdom = 0;
    wisdom_save = 0;
}

export default class Monster extends MonsterDTO {
    constructor(dto: MonsterDTO) {
        super();
        Object.assign(this, dto);
    }
}
