<template>
    <div class="playercharacterpage">
        <h2>{{ c.fullName }}</h2>
        <p>
            HP: {{ c.currentHP }} / {{ c.maxHP }}
            <button v-on:click="c.currentHP += 1">[+]</button>
            <button v-on:click="c.currentHP -= 1">[-]</button>
        </p>
        <p>AC: {{ c.currentAC }} ({{ c.baseAC }})</p>
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
    @Prop() private c!: Character;
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
