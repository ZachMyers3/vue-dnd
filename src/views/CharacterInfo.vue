<template>
    <div v-if="!loading" class="info">
        <v-card
            class="mx-auto"
            outlined
        >
            <!-- Header -->
            <v-list-item three-line class="text-left">
                <v-list-item-content>
                    <div class="overline mb-4">SPELL</div>
                    <v-list-item-title class="headline mb-1">
                        {{ c.fullName }}
                        <v-spacer></v-spacer>
                        Level {{ c.level }}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ c.classesByComma }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <!-- Casting and Components -->
            <v-list-item three-line class="text-left">
                <v-list-item-content>
                    <div class="overline mb-4">STATS</div>
                    <div class="casting">
                    <v-simple-table>
                        <tbody>
                            <tr>
                                <td>Strength</td>
                                <td>{{ c.strength }}</td>
                            </tr>
                            <tr>
                                <td>Dexterity</td>
                                <td>{{ c.dexterity }}</td>
                            </tr>
                            <tr>
                                <td>Constitution</td>
                                <td>{{ c.constitution }}</td>
                            </tr>
                            <tr>
                                <td>Wisdom</td>
                                <td>{{ c.wisdom }}</td>
                            </tr>
                            <tr>
                                <td>Charisma</td>
                                <td>{{ c.charisma }}</td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                    </div>
                </v-list-item-content>
                <v-list-item-content>
                    <div class="overline mb-4">INFORMATION</div>
                    <v-simple-table>
                        <tbody>
                            <tr>
                                <td>Eyes</td>
                                <td>{{ c.Eyes }}</td>
                            </tr>
                            <tr>
                                <td>Hair</td>
                                <td>{{ c.Hair }}</td>
                            </tr>
                            <tr>
                                <td>Height</td>
                                <td>{{ c.Height }}</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>{{ c.Weight }}</td>
                            </tr>
                            <tr>
                                <td>Background</td>
                                <td>{{ c.background }}</td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                </v-list-item-content>
            </v-list-item>
            <v-list-item three-line class="text-left">
                <v-list-item-content>
                    <div class="overline mb-4">AVAILABLE SPELLS</div>
                    <v-data-table
                        :headers="spell_headers"
                        :items="c.spells"
                        :item-key="c.spells.id"
                        :search="search"
                        dense
                    >
                        <template v-slot:item.name="{ item }">
                            <v-expansion-panels 
                                :flat="true"
                            >
                            <v-expansion-panel :flat="true">
                                <v-expansion-panel-header>{{ item.name }}</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-lazy
                                        v-model="isActive"
                                        :options="{ threshold: .5 }"
                                        min-height="200"
                                        transition="fade-transition"
                                    >
                                        <ChSpellInfo :id="item.id"></ChSpellInfo>
                                    </v-lazy>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            </v-expansion-panels>
                        </template>
                    </v-data-table>
                </v-list-item-content>
            </v-list-item>
        </v-card>
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
import CharacterPage from '../components/CharacterPage.vue'
import Character, { CharacterDTO } from '@/models/Character';
import { CharacterApi } from '@/api/CharacterApi';
import ChSpellInfo from '@/components/ChSpellInfo.vue';

@Component({ 
    components: {
        ChSpellInfo
    }
})
export default class CharacterInfo extends Vue { 
    @Prop() private id!: string;
    private c!: Character;
    private loading: boolean = false;
    private search: string = '';
    private spell_headers: any[] = [
        { text: 'Name', value: 'name' },
        { text: 'Level', value: 'level' }
    ];

    async mounted():Promise<void> {
      this.loading = !this.loading;
      this.c = await CharacterApi.getCharacter(this.id);
      this.loading = !this.loading;
    }

    data() {
      return {
        c: Character
      }
    }
}
</script>

<style lang="scss">
a {
    color: #2c3e50;
    text-decoration: none;
}
div.name {
  a {
    color: #2c3e50;
    text-decoration: none;
  }
}
</style>
