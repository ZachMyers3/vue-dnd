interface Property {
    name: string,
    url: string
}

interface Cost {
    quantity: number,
    unit: string
}

interface Damage {
    damage_bonus: number,
    damage_dice: string,
    damage_type: DamageType
}

interface DamageType {
    name: string,
    url: number
}

interface Range {
    long: number,
    normal: number
}

interface ThrowRange {
    long: number,
    normal: number
}

export interface IEquipment {
    id: string,
    catagory_range: string,
    cost: Cost,
    damage: Damage,
    equipment_category: string,
    index: number,
    name: string,
    properties: Property[],
    range: Range,
    throw_range: ThrowRange,
    url: string,
    weapon_category: string,
    weapon_range: string,
    weight: number
}

export class EquipmentDTO implements IEquipment {
    id: string = '';
    catagory_range: string = '';
    cost: Cost = {
        quantity: 0,
        unit: ''
    };
    damage: Damage = {
        damage_bonus: 0,
        damage_dice: '',
        damage_type: {
            name: '',
            url: 0
        }
    };
    equipment_category: string = '';
    index: number = 0;
    name: string = '';
    properties: Property[] = [{
        name: '',
        url: ''
    }];
    range: Range = {
        long: 0,
        normal: 0
    };
    throw_range: ThrowRange = {
        long: 0,
        normal: 0
    };
    url: string = '';
    weapon_category: string = '';
    weapon_range: string = '';
    weight: number = 0;
}

export default class Equipment extends EquipmentDTO {
    constructor(dto: EquipmentDTO) {
        super();
        Object.assign(this, dto);
    }
}
