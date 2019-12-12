<template>
    <div>
        Stub
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import CharacterPage from '../components/CharacterPage.vue'
import Character from '@/models/Character';
import { CharacterApi } from '@/api/CharacterApi';

@Component({
  components: {
    CharacterPage,
  },
})
export default class Characters extends Vue { 
    @Prop() private id!: string;

    mounted() {
        console.log(this.id);
    }
}
</script>

<style lang="scss">
</style>
