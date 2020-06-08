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
    const response = await this.a.get<RequestInterfaceMany>(
      `${API_URL}/equipment/all`
    );
    return response.data.data.map((eDTO) => new Equipment(eDTO));
  }

  static async getEquipmentById(id: string): Promise<Equipment> {
    const response = await this.a.get<RequestInterfaceOne>(
      `${API_URL}/equipment?_id=${id}`
    );
    return new Equipment(response.data.data);
  }

  static async getEquipmentByCategory(category: string): Promise<Equipment[]> {
    const response = await this.a.get<RequestInterfaceMany>(
      `${API_URL}/equipment?equipment_category=${category}`
    );
    return response.data.data.map((eDTO) => new Equipment(eDTO));
  }
}
