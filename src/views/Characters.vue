<template>
    <div>
        <PlayerCharacterPage v-for="c in characters" :c="c" :key="c.firstName" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import PlayerCharacterPage from '../components/PlayerCharacterPage.vue'
import Character from '@/models/Character';
import { CharacterApi } from '@/api/CharacterApi';

@Component({
  components: {
    PlayerCharacterPage,
  },
})
export default class CharacterPage extends Vue {
    // gather characters from API
    private characters: Character[] = []
    async mounted():Promise<void> {
      this.characters = await CharacterApi.getAllUsers();
    }
}
</script>

<style lang="scss">
div.playercharacterpage {
    h2 {
		text-decoration: underline;
	}
	p.meta {
		font-style: italic;
	}
}
</style>
