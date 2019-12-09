<template>
    <div class="playercharacterpage">
        <h2>{{ pc.firstName }} {{ pc.lastName }}</h2>
        <p>
            HP: {{ pc.currentHitPoints }} / {{ pc.maxHitPoints }}
            <button v-on:click="pc.currentHitPoints += 1">+</button><button v-on:click="pc.currentHitPoints -= 1">-</button>
        </p>
        <p>AC: {{ pc.currentAC }} ({{ pc.baseAC }})</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { PlayerCharacter } from '@/types'

@Component
export default class PlayerCharacterPage extends Vue {
    // prop declaration, assigns playerCharacter to customer interfact PlayerCharacter
    @Prop() private pc!: PlayerCharacter;
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
