<template>
    <div class="equipmentinfo">
        <v-card
            class="mx-auto"
            outlined
        >
            <!-- Header -->
            <v-list-item three-line class="text-left">
                <v-list-item-content>
                    <div class="overline mb-4">ARMOR</div>
                    <v-list-item-title class="headline mb-1">
                        {{ item.name }}
                        <v-spacer></v-spacer>
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ item.armor_category }} Armor - {{ item.weightString }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <!-- Casting and Components -->
            <v-list-item three-line class="text-left">
                <v-list-item-content>
                    <div class="overline mb-4">COST</div>
                    <p>{{ item.costString }}</p>
                </v-list-item-content>
                <v-list-item-content>
                    <div class="overline mb-4">ARMOR CLASS</div>
                    <div class="casting">
                    <v-simple-table>
                        <tbody>
                            <tr v-if='item.armor_class.base'>
                                <td>Base AC</td>
                                <td>{{ item.armor_class.base }} ft</td>
                            </tr>
                            <tr>
                                <td>Dexterity Bonus</td>
                                <td v-if='item.armor_class.dex_bonus'>Yes</td>
                                <td v-else>No</td>
                            </tr>
                            <tr v-if="item.armor_class.max_bonus">
                                <td>Max Bonus</td>
                                <td>{{ item.armor_class.max_bonus }}</td>
                            </tr>
                            <tr>
                                <td>Stealth Disadvantage</td>
                                <td v-if='item.stealth_disadvantage'>Yes</td>
                                <td v-else>No</td>
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