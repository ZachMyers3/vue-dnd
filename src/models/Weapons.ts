import Dice from '@/models/Dice';

interface IDamage {
    dice: Dice
    diceCount: number
}

export interface IWeapon {
    name: string,
    weaponModifier: number,
    hitCounter: number,
    damage: IDamage[]
}