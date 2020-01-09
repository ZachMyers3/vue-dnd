import Spell, { SpellDTO } from '@/models/Spell';
import axios from 'axios';
import { API_URL } from '@/api/ApiVars';

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
