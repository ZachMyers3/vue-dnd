interface IComponents {
    verbal: boolean,
    somatic: boolean,
    material: boolean,
    raw: string,
    materials_needed: string
}

interface ICasting {
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

interface IClasses {
    class: string,
    sub_class: string,
    class_level: number
}

export interface ISpell {
    _id: string,
    name: string,
    desc: string,
    higher_level: string,
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
    higher_level: string = '';
    book: string = '';
    page: number = 0;
    components: IComponents = {
        verbal: false, 
        somatic: false, 
        material: false, 
        raw: '', 
        materials_needed: ''};
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
        var result:string = '';
        var length:number = this.classes.length
        for (i = 0; i < length; i++) {
            result += this.classes[i].class
            if ((i != length - 1)) {
                result += ', '
            }
        }
        return result;
    }

    get durationsByComma(): string {
        var i:number = 0;
        var result:string = '';
        var length:number = this.casting.duration.length
        for (i = 0; i < length; i++) {
            result += this.casting.duration[i]
            if (i != length - 1) {
                result += ', '
            }
        }
        return result;
    }

    get concentrationSting(): string {
        if (this.casting.concentration) {
            return '✔'
        } else {
            return '✖'
        }
    }

    get rangeString(): string {
        let result:string = ''

        if (this.casting.range >= 10000000000) {
            result = 'unlimited';
        } else if (this.casting.range >= 2640000) {
            result = 'see description';
        } else if (this.casting.range >= 5280) {
            let miles:number = this.casting.range / 5280;
            result = miles.toString();
            if (miles > 1) {
                result += ' miles';
            } else {
                result += ' mile';
            }
        } else if (this.casting.range > 0) {
            if (this.casting.range > 1) {
                result = this.casting.range.toString() + ' feet';
            } else {
                result = this.casting.range.toString() + ' foot';
            }
        } else {
            // we have a casting range of zero, check for self etc.
            if (this.casting.self) {
                result = 'self'
            } else if (this.casting.sight) {
                result = 'sight'
            } else if (this.casting.touch) {
                result = 'touch'
            } else {
                result = this.casting.range.toString()
            }
        }
        return result
    }

    get castTimeString(): string {
        let result:string = '';
        const MINUTE_TO_SECONDS:number = 60;
        const HOUR_TO_MINUTES:number = 60 * MINUTE_TO_SECONDS;
        const DAY_TO_HOURS:number = 24 * HOUR_TO_MINUTES;
        const YEAR_TO_DAYS:number = 365 * DAY_TO_HOURS;

        let time:number = this.casting.casting_time;
        if (time >= 86400) {
            time = time / DAY_TO_HOURS;
            result = time.toString();
            if (time > 1) {
                result += ' days';
            } else {
                result += ' day'
            }
        } else if (time >= 3600) {
            time = time / HOUR_TO_MINUTES;
            result = time.toString();
            if (time > 1) {
                result += ' hours';
            } else {
                result += ' hour'
            }
        } else if (time >= 60) {
            time = time / MINUTE_TO_SECONDS;
            result = time.toString();
            if (time > 1) {
                result += ' minutes';
            } else {
                result += ' minute'
            }
        } else if (time > 6) {
            result = time.toString() + ' seconds';
        } else {
            if (this.casting.action_type == 'action') {
                result = 'action'
            } else if (this.casting.action_type == 'bonus') {
                result = 'bonus action'
            } else if (this.casting.action_type == 'reaction') {
                result = 'reaction'
            } else {
                result = this.casting.casting_time.toString()
            }
        }
        return result
    }
}
