<template>
<v-app dark>
  <v-navigation-drawer app>
    <!-- -->
  </v-navigation-drawer>

  <v-app-bar dense app>
    <!-- -->
  </v-app-bar>
  <v-content>
    <PlayerCharacterPage v-for="pc in pcs" :pc="pc" :key="pc.firstName" />
  </v-content>

  <v-footer app>
  </v-footer>
</v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BootstrapVue from 'bootstrap-vue';
import PlayerCharacterPage from './components/PlayerCharacterPage.vue'
import { PlayerCharacter } from '@/types';

@Component({
  components: {
    PlayerCharacterPage,
  },
})
export default class App extends Vue {
  private pcs: PlayerCharacter[] = [
    {
      firstName: "Argos",
      lastName: "Blackrock",
      currentHitPoints: 15,
      maxHitPoints: 30,
      currentAC: 15,
      baseAC: 15
    },
    {
      firstName: "Billy",
      lastName: "Black",
      currentHitPoints: 15,
      maxHitPoints: 30,
      currentAC: 15,
      baseAC: 15
    }
  ]
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
// @import '~bootstrap';
// @import '~bootstrap-vue';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
