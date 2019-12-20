<template>
    <div v-if="!loading" class="monsterinfo">
        <v-card
            class="mx-auto"
            outlined
        >
            <!-- Header -->
            <v-list-item three-line class="text-left">
                <v-list-item-content>
                    <div class="overline mb-4">SPELL</div>
                    <v-list-item-title class="headline mb-1">
                        {{ s.name }}
                        <v-spacer></v-spacer>
                        <div v-if="s.level==0">
                            Cantrip
                        </div>
                        <div v-else>
                            Level {{ s.level }} Spell
                        </div>
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ s.book }} p. {{ s.page}} </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <!-- Description -->
            <v-list-item three-line class="text-left">
                <v-list-item-content>
                    <div class="overline mb-4">DESCRIPTION</div>
                    <p><span v-html="s.desc"></span></p>
                </v-list-item-content>
            </v-list-item>
            <!-- Casting and Components -->
            <v-list-item three-line class="text-left">
                <v-list-item-content>
                    <div class="overline mb-4">CASTING</div>
                    <v-simple-table>

                        <tbody>
                            <tr>
                                <td>Cast Range (ft)</td>
                                <td>{{ s.rangeString }}</td>
                            </tr>
                            <tr>
                                <td>Cast Time (s)</td>
                                <td>{{ s.casting.casting_time }}</td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                </v-list-item-content>
                <v-list-item-content>
                    <div class="overline mb-4">COMPONENTS</div>
                    <p>{{ s.components.raw }}</p>
                    <p v-if="s.components.materials_needed">{{ s.components.materials_needed }}</p>
                </v-list-item-content>
            </v-list-item> 
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
