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
    experiencePoints: number
}

export class CharacterDTO implements ICharacter {
    id?: string;
    firstName: string = '';
    lastName: string = '';
    maxHP: number = 0;
    currentHP: number = 0;
    baseAC: number = 0;
    currentAC: number = 0;
    strength: number = 0;
    dexterity: number = 0;
    constitution: number = 0;
    intelligence: number = 0;
    wisdom: number = 0;
    charisma: number = 0;
    experiencePoints: number = 0;
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
        let fullName:string = this.firstName + ' ' + this.lastName;
        return fullName;
    }

    abilityModifier(inAbility:number): number {
        return Math.floor(inAbility / 2) - 5;
    }

    get level(): number {
        var i:number = 0;
        for (i = 0; i < this.levelTiers.length; i++) {
            if (this.experiencePoints < this.levelTiers[i]) {
                return i;
            }
        }
        return 0;
    }
}