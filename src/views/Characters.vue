<template>
  <div v-if=!loading>
    <v-card>
      <v-card-title>
        Characters
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
        :items="characters"
        :item-key="characters._id"
        :search="search"
        dense
      >
        <template v-slot:item.fullName="{ item }">
          <div class="fullName">
            <router-link :to="{ name: 'characterInfo', params: { id: item._id }}">
              {{ item.fullName }}
            </router-link>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
  <p v-else>Loading...</p>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Character from '@/models/Character';
import { CharacterApi } from '@/api/CharacterApi';

@Component({ })
export default class Characters extends Vue {
    private loading: boolean = false;
    private search: string = '';
    private headers: any[] = [
        { text: 'Name', value: 'fullName' },
        { text: 'HP', value: 'maxHP' },
        { text: 'AC', value: 'currentAC'},
        { text: 'STR', value: 'strength' },
        { text: 'DEX', value: 'dexterity' },
        { text: 'CON', value: 'constitution' },
        { text: 'INT', value: 'intelligence' },
        { text: 'WIS', value: 'wisdom' },
        { text: 'CHA', value: 'charisma' }
    ];
    // gather characters from API
    private characters: Character[] = []
    async mounted():Promise<void> {
        this.getAllCharacters();
    }

    async getAllCharacters() {
        this.loading = !this.loading;
        this.characters = await CharacterApi.getAllCharacters();
        this.loading = !this.loading;
    }
}
</script>

<style lang="scss">
div.fullName {
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
