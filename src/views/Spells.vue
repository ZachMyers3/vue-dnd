<template>
  <div v-if="!loading">
    <v-card>
      <v-card-title>
        Spells
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
        :items="spells"
        :item-key="spells._id"
        :search="search"
        dense
        show-expand
      >
        <!-- adds router link -->
        <template v-slot:item.name="{ item }">
          <div class="name">
            <router-link :to="{ name: 'spellInfo', params: { id: item.id } }">
              {{ item.name }}
            </router-link>
          </div>
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <!-- TODO https://vuetifyjs.com/en/styles/transitions see expand transitions -->
          <v-expand-transition>
            <td :colspan="headers.length" class="pa-0">
              <ChSpellInfo :id="item.id"></ChSpellInfo>
            </td>
          </v-expand-transition>
        </template>
        <!-- <template v-slot:item.classes="{ item }">
          <div class="classes">
            <div v-for="cls in item.classes" v-bind:key="cls.class">
              {{ cls.class }}
            </div>
            {{ item.classes }}
          </div>
        </template> -->
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
import Spell from "@/models/Spell";
import { SpellApi } from "@/api/SpellApi";
import ChSpellInfo from "@/components/ChSpellInfo.vue";

@Component({
  components: {
    ChSpellInfo,
  },
})
export default class Spells extends Vue {
  private loading = false;
  private search = "";
  // eslint-disable-next-line
  private headers: any[] = [
    { text: "Name", value: "name" },
    { text: "Casting Time (s)", value: "castTimeString" },
    { text: "Concentration", value: "concentrationSting" },
    { text: "Duration (s)", value: "durationsByComma" },
    { text: "Range (ft)", value: "rangeString" },
    { text: "Level", value: "level" },
    { text: "Classes", value: "classesByComma" },
    { text: "", value: "data-table-expand" },
  ];
  // gather characters from API
  private spells: Spell[] = [];
  async mounted(): Promise<void> {
    this.spells = await this.getAllSpells();
  }

  async getAllSpells(): Promise<Spell[]> {
    this.loading = !this.loading;
    this.loading = !this.loading;
    return await SpellApi.getAllSpells();
  }
}
</script>

<style lang="scss">
div.name {
  a {
    color: #2c3e50;
    text-decoration: none;
  }
}

div.characterpage {
  h2 {
    text-decoration: underline;
  }
  p.meta {
    font-style: italic;
  }
}
</style>
