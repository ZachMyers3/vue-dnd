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
      console.log('Getting all users...');
      let response = await this.charactersAxios.get<RequestInterface>('https://flask-dnd.herokuapp.com/api/characters');
      console.log(response);
      return response.data.characters.map(characterDTO => new Character(characterDTO));
    }
  }
