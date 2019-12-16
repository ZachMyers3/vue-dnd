<template>
    <div v-if="c" class="characterpage">
        <h2>{{ c.fullName }} - Lvl {{ c.level }}</h2>
        <p>
            HP: {{ c.currentHP }} / {{ c.maxHP }}
            <button v-on:click="c.currentHP -= 1">[-]</button>
            <button v-on:click="c.currentHP += 1">[+]</button>
        </p>
        <p>AC: {{ c.currentAC }} ({{ c.baseAC }})</p>
        <p>
          <router-link>
            RouterLink
          </router-link>
        </p>
    </div>
    <p v-else>Loading...</p>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import CharacterPage from '../components/CharacterPage.vue'
import Character, { CharacterDTO } from '@/models/Character';
import { CharacterApi } from '@/api/CharacterApi';

@Component({ })
export default class CharacterInfo extends Vue { 
    @Prop() private id!: string;
    private c!: Character;
    async mounted():Promise<void> {
        this.c = await CharacterApi.getCharacter(this.id);
    }
    // data funciton to pass private c value to template
    data() {
      return {
        c: Character
      }
    }
}
</script>

<style lang="scss">
</style>
