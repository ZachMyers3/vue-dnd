<template>
  <div v-if=!loading>
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
      >
        <!-- adds router link -->
        <template v-slot:item.name="{ item }">
          <div class="name">
            <router-link :to="{ name: 'spellInfo', params: { id: item._id }}">
              {{ item.name }}
            </router-link>
          </div>
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
  <p v-else>Loading...</p>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Spell from '@/models/Spell';
import { SpellApi } from '@/api/SpellApi';

@Component({ })
export default class Spells extends Vue {
    private loading: boolean = false;
    private search: string = '';
    private headers: any[] = [
        { text: 'Name', value: 'name' },
        { text: 'Casting Time (s)', value: 'casting.casting_time' },
        { text: 'Concentration', value: 'casting.concentration' },
        { text: 'Duration (s)', value: 'casting.duration[0]' },
        { text: 'Range (ft)', value: 'casting.range' },
        { text: 'Level', value: 'level' },
        { text: 'Classes', value: 'classesByComma'}
    ];
    // gather characters from API
    private spells: Spell[] = []
    async mounted():Promise<void> {
        this.getAllSpells();
    }

    async getAllSpells() {
        this.loading = !this.loading;
        this.spells = await SpellApi.getAllSpells();
        this.loading = !this.loading;
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
