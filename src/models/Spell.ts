export interface IComponents {
    verbal: boolean,
    somatic: boolean,
    material: boolean,
    raw: string,
    materials_needed: string
}

export interface ICasting {
    range: number,
    self: boolean,
    casting_time: number,
    action_type: string,
    duration: number[],
    ritual: boolean,
    concentration: boolean,
    touch: boolean,
    sight: boolean
}

export interface IClasses {
    class: string,
    sub_class: string,
    class_level: number
}

export interface ISpell {
    _id: string,
    name: string,
    desc: string,
    book: string,
    page: number,
    components: IComponents,
    level: number,
    school: string,
    classes: IClasses[],
    casting: ICasting
}

export class SpellDTO implements ISpell {
    _id: string = '';
    name: string = '';
    desc: string = '';
    book: string = '';
    page: number = 0;
    components: IComponents = {verbal: false, somatic: false, material: false, raw: '', materials_needed: ''};
    level: number = 0;
    school: string = '';
    classes: IClasses[] = [{
        class: '',
        sub_class: '',
        class_level: 0
    }];
    casting: ICasting = {
        range: 0,
        self: false,
        casting_time: 0,
        action_type: '',
        duration: [0],
        ritual: false,
        concentration: false,
        touch: false,
        sight: false
    }
}

export default class Spell extends SpellDTO {
    constructor(dto: SpellDTO) {
        super();
        Object.assign(this, dto);
    }

    get classesByComma(): string {
        var i:number = 0;
        var class_list:string = '';
        for (i = 0; i < this.classes.length; i++) {
            class_list += this.classes[i].class
            if (i != this.classes.length - 1) {
                class_list += ', '
            }
        }
        return class_list;
    }
}
