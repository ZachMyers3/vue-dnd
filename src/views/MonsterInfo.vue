<template>
  <div v-if="!loading" class="equipmentinfo">
    <v-card class="mx-auto" outlined>
      <!-- Header -->
      <v-list-item three-line class="text-left">
        <v-list-item-content>
          <div class="overline mb-4">MONSTER</div>
          <v-list-item-title class="headline mb-1">
            {{ item.name | capitalize }}
            <v-spacer>CR {{ item.challenge_rating }}</v-spacer>
          </v-list-item-title>
          <v-list-item-subtitle></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <!-- Casting and Components -->
      <v-list-item three-line class="text-left">
        <v-list-item-content>
          <div class="overline mb-4">STATS</div>
          <v-simple-table>
            <tbody>
              <tr>
                <td>STR</td>
                <td>{{ item.strength }}</td>
              </tr>
              <tr>
                <td>DEX</td>
                <td>{{ item.dexterity }}</td>
              </tr>
              <tr>
                <td>CON</td>
                <td>{{ item.constitution }}</td>
              </tr>
              <tr>
                <td>INT</td>
                <td>{{ item.intelligence }}</td>
              </tr>
              <tr>
                <td>WIS</td>
                <td>{{ item.wisdom }}</td>
              </tr>
              <tr>
                <td>CHA</td>
                <td>{{ item.charisma }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-list-item-content>
        <v-list-item-content>
          <div class="overline mb-4">ATTACKS</div>
          <v-data-table
            :headers="attack_headers"
            :items="item.actions"
            :item-key="item.actions.name"
            dense
          >
          </v-data-table>
        </v-list-item-content>
      </v-list-item>
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
import { Prop } from "vue-property-decorator";
import Monster from "@/models/Monster";
import { MonsterApi } from "@/api/MonsterApi";

@Component({
  filters: {
    capitalize(value: string) {
      return value.replace(/\b\w/g, (l) => l.toUpperCase());
    },
  },
})
export default class MonsterInfo extends Vue {
  @Prop() private id!: string;
  private item!: Monster;
  private loading = false;
  // eslint-disable-next-line
  private attack_headers: any[] = [
    { text: "Name", value: "name" },
    { text: "Description", value: "desc" },
  ];
  async mounted(): Promise<void> {
    this.loading = !this.loading;
    this.item = await MonsterApi.getMonster(this.id);
    this.loading = !this.loading;
  }
}
</script>

<style lang="scss"></style>
