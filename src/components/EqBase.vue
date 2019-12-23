<template>
    <div class="equipmentinfo">
        <v-card
            class="mx-auto"
            outlined
        >
            <!-- Header -->
            <v-list-item three-line class="text-left">
                <v-list-item-content>
                    <div class="overline mb-4">EQUIPMENT</div>
                    <v-list-item-title class="headline mb-1">
                        {{ item.name }}
                        <v-spacer></v-spacer>
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ item.equipment_category }} - {{ item.weightString }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <!-- Casting and Components -->
            <v-list-item three-line class="text-left">
                <v-list-item-content>
                    <div class="overline mb-4">COST</div>
                    <p>{{ item.costString }}</p>
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