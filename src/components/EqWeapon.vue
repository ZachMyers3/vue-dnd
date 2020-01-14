<template>
    <div class="equipmentinfo">
        <v-card
            class="mx-auto"
            outlined
        >
            <!-- Header -->
            <v-list-item three-line class="text-left">
                <v-list-item-content>
                    <div class="overline mb-4">WEAPON</div>
                    <v-list-item-title class="headline mb-1">
                        {{ item.name }}
                        <v-spacer></v-spacer>
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ item.weapon_category }} Weapon - {{ item.weightString }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <!-- Casting and Components -->
            <v-list-item three-line class="text-left">
                <v-list-item-content>
                    <div class="overline mb-4">COST</div>
                    <p>{{ item.costString }}</p>
                </v-list-item-content>
                <v-list-item-content>
                    <div class="overline mb-4">DAMAGE</div>
                    <p v-if="item.damage.damage_bonus > 0">
                        {{ item.damage.damage_dice }}+{{ item.damage.damage_bonus }} {{ item.damage.damage_type.name }}
                    </p>
                    <p v-else>
                        {{ item.damage.damage_dice }} {{ item.damage.damage_type.name }}
                    </p>
                </v-list-item-content>
                <v-list-item-content>
                    <div class="overline mb-4">RANGE</div>
                    <div class="casting">
                    <v-simple-table>
                        <tbody>
                            <tr v-if='item.range.normal'>
                                <td>Normal</td>
                                <td>{{ item.range.normal }} ft</td>
                            </tr>
                            <tr v-if='item.range.long'>
                                <td>Long</td>
                                <td>{{ item.range.long }} ft</td>
                            </tr>
                            <tr v-if="item.throw_range.normal">
                                <td>Thrown (normal)</td>
                                <td>{{ item.throw_range.normal }} ft</td>
                            </tr>
                            <tr v-if="item.throw_range.long">
                                <td>Thrown (long)</td>
                                <td>{{ item.throw_range.long }} ft</td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                    </div>
                </v-list-item-content>
            </v-list-item>  
        </v-card>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Equipment from '@/models/Equipment';

@Component
export default class EqWeapon extends Vue {
    // will pass item over via prop
    @Prop() item!:Equipment;
}
</script>

<style lang="scss">

</style>