import Character, { CharacterDTO } from '@/models/Character';
import axios from 'axios';

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
      let response = await this.charactersAxios.get<RequestInterface>('https://flask-dnd.herokuapp.com/api/characters');
      return response.data.characters.map(characterDTO => new Character(characterDTO));
    }

    static async getCharacter(id: string): Promise<Character> {
      const data = {data: {'_id': id}}
      let response = await this.charactersAxios.get<characterInterface>('https://flask-dnd.herokuapp.com/api/character', data);
      return new Character(response.data.character)
    }
  }
