<template>
  <div v-if="!loading" class="info">
    <v-card class="mx-auto" outlined>
      <!-- Header -->
      <v-list-item three-line class="text-left">
        <v-list-item-content>
          <div class="overline mb-4">CHARACTER</div>
          <v-list-item-title class="headline mb-1">
            {{ c.fullName }}
            <v-spacer></v-spacer>
            Level {{ c.level }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ c.classesByComma }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- Casting and Components -->
      <v-list-item three-line class="text-left">
        <v-list-item-content>
          <div class="overline mb-4">STATS</div>
          <div class="casting">
            <v-simple-table>
              <tbody>
                <tr>
                  <td>Strength</td>
                  <td>{{ c.strength }}</td>
                </tr>
                <tr>
                  <td>Dexterity</td>
                  <td>{{ c.dexterity }}</td>
                </tr>
                <tr>
                  <td>Constitution</td>
                  <td>{{ c.constitution }}</td>
                </tr>
                <tr>
                  <td>Wisdom</td>
                  <td>{{ c.wisdom }}</td>
                </tr>
                <tr>
                  <td>Charisma</td>
                  <td>{{ c.charisma }}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>
        </v-list-item-content>
        <v-list-item-content>
          <div class="overline mb-4">INFORMATION</div>
          <v-simple-table>
            <tbody>
              <tr>
                <td>Eyes</td>
                <td>{{ c.Eyes }}</td>
              </tr>
              <tr>
                <td>Hair</td>
                <td>{{ c.Hair }}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{{ c.Height }}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{{ c.Weight }}</td>
              </tr>
              <tr>
                <td>Background</td>
                <td>{{ c.background }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="learnedSpells.length > 0" three-line class="text-left">
        <v-list-item-content>
          <div class="overline mb-4">LEARNED SPELLS</div>
          <div class="overline mb-4">
            SEARCH
            <v-text-field v-model="searchLearned" dense> </v-text-field>
          </div>
          <v-data-table
            :headers="headers"
            :items="learnedSpells"
            :item-key="learnedSpells.id"
            :search="searchLearned"
            dense
            show-expand
          >
            <template v-slot:expanded-item="{ headers, item }">
              <!-- TODO https://vuetifyjs.com/en/styles/transitions see expand transitions -->
              <v-expand-transition>
                <td :colspan="headers.length" class="pa-0">
                  <ChSpellInfo :id="item.id"></ChSpellInfo>
                </td>
              </v-expand-transition>
            </template>
          </v-data-table>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="spellCount > 0" three-line class="text-left">
        <v-list-item-content>
          <div class="overline mb-4">
            AVAILABLE SPELLS | SELECT TO MARK LEARNED
          </div>
          <div class="overline mb-4">
            SEARCH
            <v-text-field v-model="search" dense> </v-text-field>
          </div>
          <v-data-table
            key="renderKey"
            v-model="selected"
            :headers="headers"
            :items="c.spells"
            :item-key="c.spells.id"
            :search="search"
            dense
            show-expand
            show-select
          >
            <template v-slot:expanded-item="{ headers, item }">
              <!-- TODO https://vuetifyjs.com/en/styles/transitions see expand transitions -->
              <v-expand-transition>
                <td :colspan="headers.length" class="pa-0">
                  <ChSpellInfo :id="item.id"></ChSpellInfo>
                </td>
              </v-expand-transition>
            </template>
          </v-data-table>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="text-center">
        <v-btn v-on:click="markLearned()" class="ma-2" outlined color="indigo"
          >MARK SELECTED AS LEARNED</v-btn
        >
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
import Character, { ISpell } from "@/models/Character";
import { CharacterApi } from "@/api/CharacterApi";
import ChSpellInfo from "@/components/ChSpellInfo.vue";

@Component({
  components: {
    ChSpellInfo,
  },
})
export default class CharacterInfo extends Vue {
  @Prop() private id!: string;
  private c!: Character;
  private spellCount = 0;
  private learnedSpells!: ISpell[];
  private loading = false;
  private search = "";
  private searchLearned = "";
  private expand = false;
  // eslint-disable-next-line
  private expanded!: any[];
  // eslint-disable-next-line
  private selected!: any[];
  // eslint-disable-next-line
  private headers: any[] = [
    { text: "Name", value: "name" },
    { text: "Level", value: "level" },
    { text: "", value: "data-table-expand" },
  ];
  private renderKey = 0;

  async mounted(): Promise<void> {
    this.loading = !this.loading;
    this.c = await CharacterApi.getCharacter(this.id);
    this.spellCount = this.c.spells.length;
    this.generateLearnedSpells();
    this.loading = !this.loading;
  }

  async markLearned(): Promise<void> {
    // loop through all selected objects, toggle learned
    for (let spell of this.selected) {
      await CharacterApi.toggleCharacter(this.id, spell.id);
    }
    this.generateLearnedSpells();
  }

  generateLearnedSpells(): void {
    // initialize the list
    this.learnedSpells = [];
    // loop through all spells and gather learned
    for (let spell of this.c.spells) {
      if (spell.learned) {
        this.learnedSpells.push(spell);
      }
    }
    this.$forceUpdate();
  }
}
</script>

<style lang="scss">
a {
  color: #2c3e50;
  text-decoration: none;
}
div.name {
  a {
    color: #2c3e50;
    text-decoration: none;
  }
}
</style>
