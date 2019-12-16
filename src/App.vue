<template>
<v-app>
  <!-- <v-navigation-drawer app>
  </v-navigation-drawer> -->

  <v-app-bar dense app>
    <v-app-bar-nav-icon>
    </v-app-bar-nav-icon>
    <v-toolbar-title>DnD Webapp</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- Encounter builder button -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon to="/encounter" v-on="on"><v-icon>mdi-sword</v-icon></v-btn>
      </template>
      <span>Encounter Builder</span>
    </v-tooltip>
    <!-- Characters button -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon to="/characters" v-on="on"><v-icon>mdi-campfire</v-icon></v-btn>
      </template>
      <span>Characters</span>
    </v-tooltip>
    <!-- Monsters button -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon to="/monsters" v-on="on"><v-icon>mdi-pine-tree</v-icon></v-btn>
      </template>
      <span>Monsters</span>
    </v-tooltip>
  </v-app-bar>

  <v-content>
    <router-view></router-view>
  </v-content>

  <v-footer app>
  </v-footer>
</v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue { }
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
