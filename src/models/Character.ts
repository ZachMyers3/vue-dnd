export interface ICharacter {
    id?: string,
    firstName: string,
    lastName: string,
    maxHP: number,
    currentHP: number,
    baseAC: number,
    currentAC: number
}

export class CharacterDTO implements ICharacter {
    id?: string;
    firstName: string = '';
    lastName: string = '';
    maxHP: number = 0;
    currentHP: number = 0;
    baseAC: number = 0;
    currentAC: number = 0;
}

export default class Character extends CharacterDTO {
    constructor(dto: CharacterDTO){
        super();
        Object.assign(this, dto);
    }

    get fullName(): string {
        let fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}