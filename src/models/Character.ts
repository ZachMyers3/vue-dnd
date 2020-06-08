interface IClass {
    name: string,
    level: number
}

interface ISkill {
    name: string,
    proficiency: boolean
}

export interface ISpell {
    name: string,
    id: number,
    learned: boolean
}

export interface ICharacter {
    id?: string,
    firstName: string,
    lastName: string,
    maxHP: number,
    currentHP: number,
    baseAC: number,
    currentAC: number,
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number,
    experiencePoints: number,
    alignment: string,
    race: string,
    gender: string,
    diety: string,
    size: string,
    background: string,
    class: IClass[],
    skills: ISkill[],
    spells: ISpell[]
}

export class CharacterDTO implements ICharacter {
    id?: string;
    firstName = '';
    lastName = '';
    maxHP = 0;
    currentHP = 0;
    baseAC = 0;
    currentAC = 0;
    strength = 0;
    dexterity = 0;
    constitution = 0;
    intelligence = 0;
    wisdom = 0;
    charisma = 0;
    experiencePoints = 0;
    alignment = '';
    race = '';
    gender = '';
    diety = '';
    size = '';
    background = '';
    class: IClass[] = [{        
        name: '',
        level:  0
    }]
    skills: ISkill[] = [{
        name: '',
        proficiency: false
    }]
    spells: ISpell[] = [{
        name: '',
        id: 0,
        learned: false
    }]
}

export default class Character extends CharacterDTO {
    constructor(dto: CharacterDTO){
        super();
        Object.assign(this, dto);
    }

    levelTiers:number[] = [0, 300, 900, 2700, 6500, 
                           14000, 23000, 34000, 48000,
                           64000, 85000, 100000, 120000,
                           140000, 165000, 195000, 225000,
                           265000, 305000, 355000, Number.MAX_SAFE_INTEGER];

    get fullName(): string {
        const fullName:string = this.firstName + ' ' + this.lastName;
        return fullName;
    }

    abilityModifier(inAbility:number): number {
        return Math.floor(inAbility / 2) - 5;
    }

    get level(): number {
        let totalLevel = 0;
        for (const cclass of this.class) {
            totalLevel += cclass.level;
        }
        return totalLevel;
    }

    get classesByComma(): string {
        let result = '';
        let i = 0;
        const length:number = this.class.length
        for (i = 0; i < length; i++) {
            result += this.class[i].name
            if ((i != length - 1)) {
                result += ', '
            }
        }
        return result
    }
}