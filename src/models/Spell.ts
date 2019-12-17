export interface ISpell {
    _id: string,
    name: string,
    desc: string,
    higher_level: string,
    page: string,
    range: string,
    components: string,
    material: string,
    ritual: string,
    duration: string,
    concentration: string,
    casting_time: string,
    level: string,
    school: string,
    class: string,
    archetype: string,
    domains: string
}

export class SpellDTO implements ISpell {
    _id: string = '';
    name: string = '';
    desc: string = '';
    higher_level: string = '';
    page: string = '';
    range: string = '';
    components: string = '';
    material: string = '';
    ritual: string = '';
    duration: string = '';
    concentration: string = '';
    casting_time: string = '';
    level: string = '';
    school: string = '';
    class: string = '';
    archetype: string = '';
    domains: string = '';
}

export default class Spell extends SpellDTO {
    constructor(dto: SpellDTO) {
        super();
        Object.assign(this, dto);
    }
}
