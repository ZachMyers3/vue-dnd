import Character, { CharacterDTO } from '@/models/Character';
import axios from 'axios';

const API_URL = 'https://flask-dnd.herokuapp.com/api/v1'

interface RequestInterface {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    characters: CharacterDTO[]
}

interface characterInterface {
  ok: boolean,
  character: CharacterDTO
}

export abstract class CharacterApi {
  private static charactersAxios = axios.create();

  static async getAllCharacters(): Promise<Character[]>{
    let response = await this.charactersAxios.get<RequestInterface>(`${API_URL}/characters`);
    return response.data.characters.map(characterDTO => new Character(characterDTO));
  }

  static async getCharacter(id: string): Promise<Character> {
    console.log('Getting character ' + id + '...');
    let response = await this.charactersAxios.get<characterInterface>(`${API_URL}/character?_id=${id}`);
    console.log(response);
    return new Character(response.data.character);
  }
}
