import Monster, { MonsterDTO } from "@/models/Monster";
import axios from "axios";
import { API_URL } from "@/api/ApiVars";

interface PaginationInterface {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  next_page_url: string;
  prev_page_url: null;
  from: 1;
  to: 15;
  data: MonsterDTO[];
}

export abstract class MonsterApi {
  private static monsterAxios = axios.create();

  static async getMonsters(page = 1): Promise<Monster[]> {
    const response = await this.monsterAxios.get<PaginationInterface>(
      `${API_URL}/monsters/?page=${page}`
    );
    return response.data.data.map((monsterDTO) => new Monster(monsterDTO));
  }

  static async getAllMonsters(): Promise<Monster[]> {
    const response = await this.monsterAxios.get<MonsterDTO[]>(
      `${API_URL}/monsters/`
    );
    return response.data.map((MonsterDTO) => new Monster(MonsterDTO));
  }

  static async getMonster(id: string): Promise<Monster> {
    const response = await this.monsterAxios.get<MonsterDTO>(
      `${API_URL}/monsters/${id}/`
    );
    return new Monster(response.data);
  }
}
