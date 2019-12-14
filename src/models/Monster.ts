export interface IMonster {
    id?: string,
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
    id?: string = '';
    alignment: string = '';
    armor_class: number = 0;
    challenge_rating: number = 0;
    charisma: number = 0;
    charisma_save: number = 0;
    condition_immunities: string = '';
    constitution: number = 0;
    constitution_save: number = 0;
    damage_immunities: string = '';
    damage_resistances: string = '';
    damage_vulnerabilities: string = '';
    dexterity: number = 0;
    dexterity_save: number = 0;
    hit_dice: string = '';
    hit_points: number = 0;
    intelligence: number = 0;
    languages: string = '';
    name: string = '';
    perception: number = 0;
    senses: string = '';
    size: string = '';
    speed: string = '';
    stealth: string = '';
    subtype: string = '';
    wisdom: number = 0;
    wisdom_save: number = 0;
}

export default class Monster extends MonsterDTO {
    constructor(dto: MonsterDTO) {
        super();
        Object.assign(this, dto);
    }
}
