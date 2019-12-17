<template>
    <div v-if="!loading" class="monsterinfo">
        <v-card>
            <v-card-title>
                {{ s.name }}
                <v-spacer></v-spacer>
                {{ s.level }}
            </v-card-title>
            <p>
                <b>Description: </b>{{ s.desc }}
            </p>
            <p v-if="s.higher_level">
                <b>Overpower: </b>{{ s.higher_level }}
            </p>
        </v-card>
    </div>
    <p v-else>Loading...</p>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Spell, { SpellDTO } from '@/models/Spell';
import { SpellApi } from '@/api/SpellApi';

@Component({
    filters: {
        capitalize(value: string) {
            return value.replace(/\b\w/g, l => l.toUpperCase())
        }
    }
 })
export default class MonsterInfo extends Vue { 
    @Prop() private id!: string;
    private s!: Spell;
    private loading:boolean = false;
    async mounted():Promise<void> {
        this.loading = !this.loading;
        this.s = await SpellApi.getSpell(this.id);
        this.loading = !this.loading;
    }
}
</script>

<style lang="scss">
</style>
