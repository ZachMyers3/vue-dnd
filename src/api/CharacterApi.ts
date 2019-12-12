import Character, { CharacterDTO } from '@/models/Character';
import axios from 'axios';

interface RequestInterface {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    characters: CharacterDTO[]
  }

  export abstract class CharacterApi {
    private static charactersAxios = axios.create();
  
    static async getAllUsers(): Promise<Character[]>{
      let response = await this.charactersAxios.get<RequestInterface>('https://flask-dnd.herokuapp.com/api/characters');
      return response.data.characters.map(characterDTO => new Character(characterDTO));
    }
  }
