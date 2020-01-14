<template>
<v-app>
  <!-- <v-navigation-drawer app>
  </v-navigation-drawer> -->

  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
  >
    <v-list dense>
      <v-list-item
        v-for="item in navItems"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>mdi-{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar dense app>
    <v-app-bar-nav-icon
      @click.stop="drawer = !drawer"
    >
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
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon to="/spells" v-on="on"><v-icon>mdi-auto-fix</v-icon></v-btn>
      </template>
      <span>Spells</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon to="/equipment" v-on="on"><v-icon>mdi-storefront</v-icon></v-btn>
      </template>
      <span>Equipment</span>
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
export default class App extends Vue {
  private drawer:boolean = false;
  private navItems:any[] = [
    // { title: 'Encounter Builder', icon: 'sword' },
    { title: 'Characters', icon: 'campfire', route: 'characters' },
    { title: 'Monsters', icon: 'pine-tree', route: 'monsters' },
    { title: 'Spells', icon: 'auto-fix', route: 'spells' },
    { title: 'Equipment', icon: 'storefront', route: 'equipment' }
  ]
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
