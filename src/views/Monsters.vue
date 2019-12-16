<template>
    <div v-if="!loading">
        <v-card>
            <v-card-title>
                Monsters
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-search"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="monsters"
                :item-key="monsters._id"
                :search="search"
            ></v-data-table>
        </v-card>
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
        this.getAllMonsters()
    }

    async nextPage():Promise<void> {
        if (this.monsters.length < 10) {
            return
        }
        this.start += 10;
        this.getAllMonsters()
    }

    async prevPage():Promise<void> {
        this.start -= 10;
        if (this.start < 1) {
            this.start = 1;
        }
        this.getAllMonsters()
    }

    async getMonsters():Promise<void> {
        this.loading = !this.loading;
        this.monsters = await MonsterApi.getMonsters(this.start)
        this.loading = !this.loading;
    }

    async getAllMonsters():Promise<void> {
        this.loading = !this.loading;
        this.monsters = await MonsterApi.getAllMonsters()
        this.loading = !this.loading;
    }

    data() {
        return {
            headers: [
                { text: 'Name', value: 'name' },
                { text: 'CR', value: 'challenge_rating' },
                { text: 'HP', value: 'hit_points' }
            ],
            search: ''
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
