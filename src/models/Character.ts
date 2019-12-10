export interface ICharacter {
    id?: string,
    firstName: string,
    lastName: string,
    maxHitPoints: number,
    currentHitPoints: number,
    baseAC: number,
    currentAC: number
}

export class CharacterDTO implements ICharacter {
    id?: string;
    firstName: string = '';
    lastName: string = '';
    maxHitPoints: number = 0;
    currentHitPoints: number = 0;
    baseAC: number = 0;
    currentAC: number = 0;
}

export default class Character extends CharacterDTO {
    constructor(dto: CharacterDTO){
        super();
        Object.assign(this, dto);
    }

    get fullName(): string {
        return '${this.firstName} ${this.lastName}';
    }
}