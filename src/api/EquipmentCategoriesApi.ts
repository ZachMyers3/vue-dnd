import EquipmentCategories, { EquipmentCategoriesDTO } from '@/models/EquipmentCategories';
import axios from 'axios';

const API_URL = 'https://flask-dnd.herokuapp.com/api/v1'

interface RequestInterfaceMany {
    ok: boolean,
    data: EquipmentCategoriesDTO[]
}

interface RequestInterfaceOne {
    ok: boolean,
    data: EquipmentCategoriesDTO
}

export abstract class EquipmentCategoriesApi {
    private static a = axios.create();

    static async getAll(): Promise<EquipmentCategoriesDTO[]> {
        let response = await this.a.get<RequestInterfaceMany>(`${API_URL}/equipment-categories/all`);
        return response.data.data.map(eDTO => new EquipmentCategories(eDTO));
    }
}