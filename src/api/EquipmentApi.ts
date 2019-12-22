import Equipment, { EquipmentDTO } from '@/models/Equipment';
import axios from 'axios';

const API_URL = 'https://flask-dnd.herokuapp.com/api/v1'

interface RequestInterfaceMany {
    ok: boolean,
    data: EquipmentDTO[]
}

interface RequestInterfaceOne {
    ok: boolean,
    data: EquipmentDTO
}

export abstract class EquipmentApi {
    private static a = axios.create();

    static async getAllEquipment(): Promise<Equipment[]> {
        let response = await this.a.get<RequestInterfaceMany>(`${API_URL}/equipment/all`);
        return response.data.data.map(eDTO => new Equipment(eDTO));
    }

    static async getEquipmentById(id: string): Promise<Equipment> {
        let response = await this.a.get<RequestInterfaceOne>(`${API_URL}/equipment?_id=${id}`);
        return new Equipment(response.data.data)
    }

    static async getEquipmentByCategory(category: string): Promise<Equipment[]> {
        let response = await this.a.get<RequestInterfaceMany>(`${API_URL}/equipment?equipment_category=${category}`);
        return response.data.data.map(eDTO => new Equipment(eDTO));
    }
}