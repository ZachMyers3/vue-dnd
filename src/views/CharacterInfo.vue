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
            </v-list-item> 
        </v-card>
    </div>
    <p v-else>Loading...</p>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import CharacterPage from '../components/CharacterPage.vue'
import Character, { CharacterDTO } from '@/models/Character';
import { CharacterApi } from '@/api/CharacterApi';

@Component({ })
export default class CharacterInfo extends Vue { 
    @Prop() private id!: string;
    private c!: Character;
    private loading: boolean = false;

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
</style>
