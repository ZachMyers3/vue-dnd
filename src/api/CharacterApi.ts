import Vue from 'vue';
import Character, { CharacterDTO } from '@/models/Character';

interface RequestInterface {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: CharacterDTO[]
  }

  export abstract class CharacterApi {
    private static usersAxios = Vue.axios.create();
  
    static async getAllUsers(): Promise<Character[]>{
      let response = await this.usersAxios.get<RequestInterface>('https://reqres.in/api/users');
      return response.data.data.map(characterDTO => new Character(characterDTO));
    }
  }
