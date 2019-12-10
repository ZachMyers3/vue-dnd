<template>
    <div class="playercharacterpage">
        <h2>{{ pc.fullName }}</h2>
        <p>
            HP: {{ pc.currentHitPoints }} / {{ pc.maxHitPoints }}
            <button v-on:click="pc.currentHitPoints += 1">[+]</button><button v-on:click="pc.currentHitPoints -= 1">[-]</button>
        </p>
        <p>AC: {{ pc.currentAC }} ({{ pc.baseAC }})</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Character from '@/models/Character';
import { CharacterApi } from '@/api/CharacterApi';

@Component
export default class CharacterPage extends Vue {
    // prop declaration, assigns playerCharacter to customer interfact Character
    @Prop() private pc!: Character;
    // create private array of Characters to store api entry
    private characters: Character[] = [];
    // on the mounted event make our api call to get our characters
    async Mounted():Promise<void> {
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
