<template>
<v-app dark>
  <!-- <v-navigation-drawer app>

  </v-navigation-drawer> -->

  <v-app-bar dense app>
    <!-- -->
  </v-app-bar>

  <v-content>
    <PlayerCharacterPage v-for="pc in characters" :pc="pc" :key="pc.firstName" />
  </v-content>

  <v-footer app>
  </v-footer>
</v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BootstrapVue from 'bootstrap-vue';
import PlayerCharacterPage from './components/PlayerCharacterPage.vue'
import Character from '@/models/Character';
import { CharacterApi } from '@/api/CharacterApi';

@Component({
  components: {
    PlayerCharacterPage,
  },
})
export default class App extends Vue {
  private characters: Character[] = []
    async mounted():Promise<void> {
      console.log('Mounted function!');
      this.characters = await CharacterApi.getAllUsers();
    }
  data() { 
    return {
      menuItems: [
        { title: 'Home', path: '/home', icon: 'home' },
        { title: 'Sign Up', path: '/signup', icon: 'face' },
        { title: 'Sign In', path: '/signin', icon: 'lock_open' }
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
