<template>
    <div v-if=monsters>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>CR</th>
                </tr>
            </thead>
            <tbody>
                <!-- Adds in tr and th data -->
                <MonsterLine v-for="m in monsters" :m="m" :key="m._id" />
            </tbody>
        </table>
        <button v-on:click="prevPage()">Prev</button>
        <button v-on:click="nextPage()">Next</button>
    </div>
    <p v-else>Loading...</p>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import MonsterLine from '../components/MonsterLine.vue'
import Monster from '@/models/Monster';
import { MonsterApi } from '@/api/MonsterApi';

@Component({
  components: {
    MonsterLine,
  },
})
export default class Monsters extends Vue {
    // start where the api query begins, limit is number of results
    // next is for paging to the next page
    // @Prop() private start!: number;
    private start: number = 1;
    private limit: number = 10;
    private next: number = this.start + this.limit;
    // gather characters from API
    private monsters: Monster[] = []

    async mounted():Promise<void> {
      this.monsters = await MonsterApi.getMonsters(this.start, this.limit);
    }

    async nextPage():Promise<void> {
        if (this.monsters.length < 10) {
            return
        }
        this.start += 10;
        this.monsters = await MonsterApi.getMonsters(this.start, this.limit)
    }

    async prevPage():Promise<void> {
        this.start -= 10;
        if (this.start < 1) {
            this.start = 1;
        }
        this.monsters = await MonsterApi.getMonsters(this.start, this.limit)
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
