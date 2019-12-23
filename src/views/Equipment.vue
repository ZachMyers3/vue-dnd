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
            <v-select
                :items="categoryNames"
                label="Filter" clearable
                v-on:change="filterTable()"
            >
            </v-select>
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
import EquipmentCategories from '@/models/EquipmentCategories';
import { EquipmentCategoriesApi } from '@/api/EquipmentCategoriesApi';

@Component({})
export default class EquipmentTable extends Vue {
    private start: number = 1
    private loading: boolean = false;
    private equipment: Equipment[] = []
    private headers: any[] = [
        { text: 'Name', value: 'name' },
        { text: 'Type', value: 'equipment_category' },
        { text: 'Cost', value: 'costString' },
        { text: 'Weight (lbs)', value: 'weight'}
    ];
    private search: string = '';
    private categories: EquipmentCategories[] = [];
    private categoryNames: String[] = [];

    async mounted():Promise<void> {
        this.getAll()
        this.getAllCategories();
    }

    async getAll():Promise<void> {
        this.loading = !this.loading;
        this.equipment = await EquipmentApi.getAllEquipment();
        this.loading = !this.loading;
    }

    async getAllCategories():Promise<void> {
        this.loading = !this.loading;
        this.categories = await EquipmentCategoriesApi.getAll()
        // grab the names and put them into the categoryNames list
        let i:number = 0;
        for (i = 0; i < this.categories.length; i++) {
            this.categoryNames[i] = this.categories[i].name;
        }
        this.loading = !this.loading;
    }

    async getByCategory():Promise<void> {
        this.loading = !this.loading;
        this.loading = !this.loading;
    }

    filterTable() {
        console.log('FilterTable!');
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
