import Spell, { SpellDTO } from '@/models/Spell';
import axios from 'axios';

const API_URL = 'https://flask-dnd.herokuapp.com/api/v1'

interface AllInterface {
    ok: boolean,
    data: SpellDTO[]
}

interface OneInterface {
    ok: boolean,
    data: SpellDTO
}

export abstract class SpellApi {
    private static spellAxios = axios.create();

    static async getAllSpells(): Promise<Spell[]> {
        let response = await this.spellAxios.get<AllInterface>(`${API_URL}/spells/all`);
        return response.data.data.map(spellDTO => new Spell(spellDTO));
    }

    static async getSpell(id: string): Promise<Spell> {
        let response = await this.spellAxios.get<OneInterface>(`${API_URL}/spell?_id=${id}`)
        return new Spell(response.data.data);
    }
}
