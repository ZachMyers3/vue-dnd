<template>
    <!-- <div v-if=!loading>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>CR</th>
                </tr>
            </thead>
            <tbody>
                <MonsterLine v-for="m in monsters" :m="m" :key="m._id" />
            </tbody>
        </table>
        <button v-on:click="prevPage()">Prev</button>
        <button v-on:click="nextPage()">Next</button>
    </div>
    <p v-else>Loading...</p> -->
    <div v-if="!loading">
        <div class="ui container">
            <v-data-table
              :headers="headers"
              :items="monsters"
              :items-per-page="10"
              class="elevation-1"
            ></v-data-table>
        </div>
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
    MonsterLine
  },
})
export default class Monsters extends Vue {
    // start where the api query begins, limit is number of results
    // next is for paging to the next page
    // @Prop() private start!: number;
    private api_url: string = "https://flask-dnd.herokuapp.com/api/v1"
    private api_endpoint: string = "monsters"
    private start: number = 1;
    private limit: number = 10;
    private next: number = this.start + this.limit;
    private loading: boolean = false;
    // gather characters from API
    private monsters: Monster[] = []

    async mounted():Promise<void> {
        this.getMonsters()
    }

    async nextPage():Promise<void> {
        if (this.monsters.length < 10) {
            return
        }
        this.start += 10;
        this.getMonsters()
    }

    async prevPage():Promise<void> {
        this.start -= 10;
        if (this.start < 1) {
            this.start = 1;
        }
        this.getMonsters()
    }

    async getMonsters():Promise<void> {
        this.loading = !this.loading;
        this.monsters = await MonsterApi.getMonsters(this.start)
        this.loading = !this.loading;
    }

    data() {
        return {
            headers: [
                { text: 'Name' },
                { text: 'Test1' },
                { text: 'Test2' }
            ]
        }
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
