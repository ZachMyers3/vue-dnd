<template>
    <div>
        <CharacterPage v-bind:c="character" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import CharacterPage from '../components/CharacterPage.vue'
import Character, { CharacterDTO } from '@/models/Character';
import { CharacterApi } from '@/api/CharacterApi';

@Component({
  components: {
    CharacterPage,
  },
})
export default class CharacterInfo extends Vue { 
    @Prop() private id!: string;
    public character!: Character;
    async mounted():Promise<void> {
        this.character = await CharacterApi.getCharacter(this.id);
    }
}
</script>

<style lang="scss">
</style>
