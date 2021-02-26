import Spell, { SpellDTO } from "@/models/Spell";
import axios from "axios";
import { API_URL } from "@/api/ApiVars";

export abstract class SpellApi {
  private static spellAxios = axios.create();

  static async getAllSpells(): Promise<Spell[]> {
    const response = await this.spellAxios.get<SpellDTO[]>(
      `${API_URL}/spells/`
    );

    return response.data.map((spellDTO) => new Spell(spellDTO));
  }

  static async getSpell(id: string): Promise<Spell> {
    const response = await this.spellAxios.get<SpellDTO>(
      `${API_URL}/spells/${id}/`
    );
    return new Spell(response.data);
  }
}
