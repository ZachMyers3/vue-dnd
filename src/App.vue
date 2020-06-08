<template>
  <v-app>
    <!-- <v-navigation-drawer app>
  </v-navigation-drawer> -->

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list dense>
        <v-list-item
          router
          v-bind:to="item.link"
          v-for="item in navItems"
          :key="item.title"
          link
        >
          <!-- <router-link :to="{ name: item.link }"> -->
          <v-list-item-icon>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <!-- </router-link> -->
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dense app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-toolbar-title>DnD Webapp</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  private drawer = false;
  // eslint-disable-next-line
  private navItems: any[] = [
    { title: "Characters", icon: "campfire", link: "/characters" },
    { title: "Monsters", icon: "pine-tree", link: "/monsters" },
    { title: "Spells", icon: "auto-fix", link: "/spells" },
    { title: "Equipment", icon: "storefront", link: "/equipment" },
    { title: "Map", icon: "map-legend", link: "/map" },
    { title: "Encounter", icon: "sword", link: "/encounter" },
  ];
}
</script>

<style lang="scss">
a {
  color: #2c3e50;
  text-decoration: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
