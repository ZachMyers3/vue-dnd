<template>
    <div v-if="!loading">
        <v-card>
            <v-card-title>
                Equipment
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
                :items="equipment"
                :item-key="equipment._id"
                :search="search"
                dense
            >
            </v-data-table>
        </v-card>
    </div>
    <p v-else>Loading...</p>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Equipment from '@/models/Equipment';
import { EquipmentApi } from '@/api/EquipmentApi';

@Component({})
export default class Monsters extends Vue {
    private start: number = 1
    private loading: boolean = false;
    private equipment: Equipment[] = []
    private headers: any[] = [
        { text: 'Name', value: 'name' },
        { text: 'Type', value: 'equipment_category' },
        { text: 'Cost', value: 'costString' },
        { text: 'Weight', value: 'weight'}
    ];
    private search: string = '';

    async mounted():Promise<void> {
        this.getAll()
    }

    async getAll():Promise<void> {
        this.loading = !this.loading;
        this.equipment = await EquipmentApi.getAllEquipment();
        this.loading = !this.loading;
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
