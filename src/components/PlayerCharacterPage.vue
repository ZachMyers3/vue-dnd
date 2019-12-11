<template>
    <div class="playercharacterpage">
        <h2>{{ pc.fullName }}</h2>
        <p>
            HP: {{ pc.currentHP }} / {{ pc.maxHP }}
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
    // prop declaration, assigns playerCharacter to custom interface Character
    @Prop() private pc!: Character;
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
