export interface LinkageObject {
    name: string,
    url: string
}

export interface IEquipmentCategories {
    id: string,
    index: number,
    name: string,
    equipment: LinkageObject[],
    url: string
}

export class EquipmentCategoriesDTO implements IEquipmentCategories {
    id: string = '';
    index: number = 0;
    name: string = ''
    equipment: LinkageObject[] = [{
        name: '',
        url: ''
    }]
    url: string = '';
}

export default class EquipmentCategories extends EquipmentCategoriesDTO {
    constructor(dto: EquipmentCategoriesDTO) {
        super();
        Object.assign(this, dto);
    }
}

