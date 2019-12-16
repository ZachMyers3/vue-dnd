import Monster, { MonsterDTO } from '@/models/Monster';
import axios from 'axios';

const API_URL = 'https://flask-dnd.herokuapp.com/api/v1'

interface PaginationInterface {
    total: number,
    per_page: number,
    current_page: number,
    last_page: number,
    next_page_url: string,
    prev_page_url: null,
    from: 1,
    to: 15,
    data: MonsterDTO[]
}

interface allMonsterInterface {
    ok: boolean,
    data: MonsterDTO[]
}

interface RequestInterface {
    count: number,
    limit: number,
    next: string,
    ok: boolean,
    previoius: string,
    start: number
    monsters: MonsterDTO[]
}

interface MonsterInterface {
    ok: boolean,
    monster: MonsterDTO
}

export abstract class MonsterApi {
    private static monsterAxios = axios.create();

    static async getMonsters(page=1): Promise<Monster[]> {
        let response = await this.monsterAxios.get<PaginationInterface>(`${API_URL}/monsters?page=${page}`);
        return response.data.data.map(monsterDTO => new Monster(monsterDTO));
    }

    static async getAllMonsters(): Promise<Monster[]> {
        let response = await this.monsterAxios.get<allMonsterInterface>(`${API_URL}/monsters/all`);
        return response.data.data.map(MonsterDTO => new Monster(MonsterDTO));
    }

    static async getMonster(id:string): Promise<Monster> {
        let response = await this.monsterAxios.get<MonsterInterface>(`${API_URL}/monster?_id=${id}`)
        return new Monster(response.data.monster)
    }
}
