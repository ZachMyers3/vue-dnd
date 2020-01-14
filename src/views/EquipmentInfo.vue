<template>
    <div v-if="!loading" class="monsterinfo">
        <div v-if="item.equipment_category==='Weapon'">
            <EqWeapon :item="item"></EqWeapon>
        </div>
        <div v-else-if="item.equipment_category==='Armor'">
            <EqArmor :item="item"></EqArmor>
        </div>
        <div v-else>
            <EqBase :item="item"></EqBase>
        </div>
    </div>
    <div v-else>
        <v-overlay>
            <v-progress-circular
                indeterminate
                size="64"
            ></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Equipment, { EquipmentDTO } from '@/models/Equipment';
import { EquipmentApi } from '@/api/EquipmentApi';
import EquipmentTable from './Equipment.vue';
import EqArmor from '@/components/EqArmor.vue'
import EqWeapon from '@/components/EqWeapon.vue'
import EqBase from '@/components/EqBase.vue';

@Component({
    components: {
        EqArmor, EqWeapon, EqBase
    }
})

export default class EquipmentInfo extends Vue { 
    @Prop() private id!: string;
    private item!: Equipment;
    private loading:boolean = false;
    async mounted():Promise<void> {
        this.loading = !this.loading;
        this.item = await EquipmentApi.getEquipmentById(this.id);
        this.loading = !this.loading;
    }
}
</script>

<style lang="scss">

</style>
