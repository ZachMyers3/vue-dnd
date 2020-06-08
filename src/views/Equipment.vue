<template>
  <div v-if="!loading">
    <v-card>
      <v-card-title>
        Equipment
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-select
        :items="categoryNames"
        v-model="filterSelection"
        label="Filter"
        clearable
        multiple
        v-on:change="filterTable()"
        solo
        chips
      >
      </v-select>
      <v-data-table
        :headers="headers"
        :items="equipment"
        :item-key="equipment._id"
        :search="search"
        dense
      >
        <!-- adds router link -->
        <template v-slot:item.name="{ item }">
          <div class="name">
            <router-link
              :to="{ name: 'equipmentInfo', params: { id: item._id } }"
            >
              {{ item.name }}
            </router-link>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
  <div v-else>
    <v-overlay>
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Equipment from "@/models/Equipment";
import { EquipmentApi } from "@/api/EquipmentApi";
import EquipmentCategories from "@/models/EquipmentCategories";
import { EquipmentCategoriesApi } from "@/api/EquipmentCategoriesApi";

@Component({})
export default class EquipmentTable extends Vue {
  private start = 1;
  private loading = false;
  private equipment: Equipment[] = [];
  // eslint-disable-next-line
  private headers: any[] = [
    { text: "Name", value: "name" },
    { text: "Type", value: "equipment_category" },
    { text: "Cost", value: "costString" },
    { text: "Weight (lbs)", value: "weight" },
  ];
  private search = "";
  private categories: EquipmentCategories[] = [];
  private categoryNames: string[] = [];
  private filterSelection: string[] = [];

  async mounted(): Promise<void> {
    this.getAll();
    this.getAllCategories();
  }

  async getAll(): Promise<void> {
    this.loading = !this.loading;
    this.equipment = await EquipmentApi.getAllEquipment();
    this.loading = !this.loading;
  }

  async getByCategories(): Promise<void> {
    this.loading = !this.loading;
    // clear out and rebuild list
    this.equipment = [];
    let i = 0;
    for (i = 0; i < this.filterSelection.length; i++) {
      let tempEquipment = await EquipmentApi.getEquipmentByCategory(
        this.filterSelection[i]
      );
      this.equipment = this.equipment.concat(tempEquipment);
    }
    this.loading = !this.loading;
  }

  async getAllCategories(): Promise<void> {
    this.loading = !this.loading;
    this.categories = await EquipmentCategoriesApi.getAll();
    // grab the names and put them into the categoryNames list
    let i = 0;
    for (i = 0; i < this.categories.length; i++) {
      this.categoryNames[i] = this.categories[i].name;
    }
    this.loading = !this.loading;
  }

  async getByCategory(): Promise<void> {
    this.loading = !this.loading;
    this.loading = !this.loading;
  }

  filterTable(): void {
    if (this.filterSelection.length == 0) {
      this.getAll();
    } else {
      this.getByCategories();
    }
  }
}
</script>

<style lang="scss">
div.characterpage {
  h2 {
    text-decoration: underline;
  }
  p.meta {
    font-style: italic;
  }
}

div.name {
  a {
    color: #2c3e50;
    text-decoration: none;
  }
}
</style>
