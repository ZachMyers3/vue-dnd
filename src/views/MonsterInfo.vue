<template>
    <div v-if="!loading" class="monsterinfo">
        <h2>{{ m.name }}</h2>
        <h3>{{ m.alignment | capitalize }} {{ m.type | capitalize }}</h3>

        <p>
        {{ m.hit_points }} HP  
        </p>
    </div>
    <p v-else>Loading...</p>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Monster, { MonsterDTO } from '@/models/Monster';
import { MonsterApi } from '@/api/MonsterApi';

@Component({
    filters: {
        capitalize(value: string) {
            return value.replace(/\b\w/g, l => l.toUpperCase())
        }
    }
 })
export default class MonsterInfo extends Vue { 
    @Prop() private id!: string;
    private m!: Monster;
    private loading:boolean = false;
    async mounted():Promise<void> {
        this.loading = !this.loading;
        this.m = await MonsterApi.getMonster(this.id);
        this.loading = !this.loading;
    }
    // data funciton to pass private c value to template
    data() {
      return {
        m: Monster
      }
    }
}
</script>

<style lang="scss">
</style>
