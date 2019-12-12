<template>
    <div v-if=characters>
        <CharacterPage v-for="c in characters" :c="c" :key="c._id" />
    </div>
    <p v-else>Loading...</p>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import CharacterPage from '../components/CharacterPage.vue'
import Character from '@/models/Character';
import { CharacterApi } from '@/api/CharacterApi';

@Component({
  components: {
    CharacterPage,
  },
})
export default class Characters extends Vue {
    // gather characters from API
    private characters: Character[] = []
    async mounted():Promise<void> {
      this.characters = await CharacterApi.getAllCharacters();
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
