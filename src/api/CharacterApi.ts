import Character, { CharacterDTO } from "@/models/Character";
import axios from "axios";
import { API_URL } from "@/api/ApiVars";

// designed as per vuetable-2
interface PaginationInterface {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  next_page_url: string;
  prev_page_url: null;
  from: 1;
  to: 15;
  data: CharacterDTO[];
}

interface RequestInterface {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  characters: CharacterDTO[];
}

interface characterInterface {
  ok: boolean;
  character: CharacterDTO;
}

interface characterSpellInterface {
  ok: boolean;
  data: CharacterDTO;
}

export abstract class CharacterApi {
  private static charactersAxios = axios.create();

  static async getAllCharacters(): Promise<Character[]> {
    const response = await this.charactersAxios.get<Character[]>(
      `${API_URL}/characters`
    );
    return response.data.map((characterDTO) => new Character(characterDTO));
  }

  static async getCharacter(id: string): Promise<Character> {
    const response = await this.charactersAxios.get<Character>(
      `${API_URL}/characters/${id}/`
    );
    return new Character(response.data);
  }

  static async toggleCharacter(id: string, spell_id: number): Promise<boolean> {
    const response = await this.charactersAxios.put<characterSpellInterface>(
      `${API_URL}/character/learn_spell?_id=${id}&spell_id=${spell_id}`
    );
    return response.data.ok;
  }
}
