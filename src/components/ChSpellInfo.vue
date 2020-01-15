<template>
    <div v-if="!loading">
        <v-card flat tile>
            <!-- <router-link :to="{ name: 'spellInfo', params: { id: s.id }}">
                <v-card-title>
                    {{ s.name }}
                </v-card-title>
            </router-link> -->
            <v-card-subtitle>{{ s.levelString }}</v-card-subtitle>
            <v-card-text><span v-html="s.desc"></span></v-card-text>
        </v-card>
    </div>
    <div v-else>
        <v-progress-circular
            indeterminate
            size="64"
        ></v-progress-circular>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Spell from '@/models/Spell';
import { SpellApi } from '@/api/SpellApi'

@Component
export default class ChSpellInfo extends Vue {
    // will pass item over via prop
    @Prop() id!:string;
    private s!:Spell;
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