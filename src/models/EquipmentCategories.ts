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
    id = '';
    index = 0;
    name = ''
    equipment: LinkageObject[] = [{
        name: '',
        url: ''
    }]
    url = '';
}

export default class EquipmentCategories extends EquipmentCategoriesDTO {
    constructor(dto: EquipmentCategoriesDTO) {
        super();
        Object.assign(this, dto);
    }
}

