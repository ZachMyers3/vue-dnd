<template>
    <tr class="monsterpage">
        <td>
            <router-link :to="{ name: 'monsterInfo', params: { id: m._id }}">
                <p>{{ m.name }}</p>
            </router-link>
        </td>
        <td> {{ m.challenge_rating }} </td>
    </tr>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Monster from '@/models/Monster';

@Component
export default class MonsterLine extends Vue {
    // prop declaration, assings c to Character class
    @Prop() private m!: Monster;
}
</script>

<style lang="scss">
tr.monsterpage {
    h2 {
		text-decoration: underline;
	}
	p.meta {
		font-style: italic;
	}
    a {
        color: #2c3e50;
    }
}
</style>
