<template>
  <div v-if="!loading">
    <v-card>
      <v-card-title>
        Monsters
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="monsters"
        :item-key="monsters._id"
        :search="search"
        dense
      >
        <!-- template to color CR by strength -->
        <template v-slot:item.challenge_rating="{ item }">
          <v-chip :color="getColor(item.challenge_rating)" dark>{{
            item.challenge_rating
          }}</v-chip>
        </template>
        <template v-slot:item.name="{ item }">
          <div class="name">
            <router-link
              :to="{ name: 'monsterInfo', params: { id: item._id } }"
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
import Monster from "@/models/Monster";
import { MonsterApi } from "@/api/MonsterApi";

@Component({})
export default class Monsters extends Vue {
  private start = 1;
  private loading = false;
  private monsters: Monster[] = [];
  // eslint-disable-next-line
  private headers: any[] = [
    { text: "Name", value: "name" },
    { text: "CR", value: "challenge_rating" },
    { text: "HP", value: "hit_points" },
    { text: "AC", value: "armor_class" },
    { text: "STR", value: "strength" },
    { text: "DEX", value: "dexterity" },
    { text: "CON", value: "constitution" },
    { text: "INT", value: "intelligence" },
    { text: "WIS", value: "wisdom" },
    { text: "CHA", value: "charisma" },
  ];
  private search = "";

  async mounted(): Promise<void> {
    this.getAllMonsters();
  }

  async getMonsters(): Promise<void> {
    this.loading = !this.loading;
    this.monsters = await MonsterApi.getMonsters(this.start);
    this.loading = !this.loading;
  }

  async getAllMonsters(): Promise<void> {
    this.loading = !this.loading;
    this.monsters = await MonsterApi.getAllMonsters();
    this.loading = !this.loading;
  }

  getColor(cr: string): string {
    var cr_int: number = parseFloat(cr);
    if (cr_int > 15) {
      return "red";
    } else if (cr_int > 5) {
      return "orange";
    } else {
      return "green";
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
</style>
