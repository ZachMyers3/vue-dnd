import Monster, { MonsterDTO } from '@/models/Monster';
import axios from 'axios';

const API_URL = 'https://flask-dnd.herokuapp.com/api/v1'

interface RequestInterface {
    count: number,
    limit: number,
    next: string,
    ok: boolean,
    previoius: string,
    start: number
    monsters: MonsterDTO[]
}

export abstract class MonsterApi {
    private static monsterAxios = axios.create();

    static async getMonsters(start=1, limit=10): Promise<Monster[]> {
        let response = await this.monsterAxios.get<RequestInterface>(`${API_URL}/monsters?start=${start}&limit=${limit}`);
        return response.data.monsters.map(monsterDTO => new Monster(monsterDTO));
    }
}
