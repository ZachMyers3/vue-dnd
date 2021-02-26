import Equipment, { EquipmentDTO } from "@/models/Equipment";
import axios from "axios";
import { API_URL } from "@/api/ApiVars";

interface RequestInterfaceMany {
  ok: boolean;
  data: EquipmentDTO[];
}

interface RequestInterfaceOne {
  ok: boolean;
  data: EquipmentDTO;
}

export abstract class EquipmentApi {
  private static a = axios.create();

  static async getAllEquipment(): Promise<Equipment[]> {
    const response = await this.a.get<Equipment[]>(`${API_URL}/equipment/`);
    return response.data.map((eDTO) => new Equipment(eDTO));
  }

  static async getEquipmentById(id: string): Promise<Equipment> {
    const response = await this.a.get<Equipment>(`${API_URL}/equipment/${id}/`);
    return new Equipment(response.data);
  }

  static async getEquipmentByCategory(category: string): Promise<Equipment[]> {
    const response = await this.a.get<Equipment[]>(
      `${API_URL}/equipment?equipment_category=${category}`
    );
    return response.data.map((eDTO) => new Equipment(eDTO));
  }
}
