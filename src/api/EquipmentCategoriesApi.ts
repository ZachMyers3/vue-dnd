import EquipmentCategories, {
  EquipmentCategoriesDTO,
} from "@/models/EquipmentCategories";
import axios from "axios";
import { API_URL } from "@/api/ApiVars";

interface RequestInterfaceMany {
  ok: boolean;
  data: EquipmentCategoriesDTO[];
}

interface RequestInterfaceOne {
  ok: boolean;
  data: EquipmentCategoriesDTO;
}

export abstract class EquipmentCategoriesApi {
  private static a = axios.create();

  static async getAll(): Promise<EquipmentCategoriesDTO[]> {
    const response = await this.a.get<EquipmentCategoriesDTO[]>(
      `${API_URL}/equipment_categories/`
    );
    return response.data.map((eDTO) => new EquipmentCategories(eDTO));
  }
}
