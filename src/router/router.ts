import VueRouter from "vue-router";

const characterPrefix = "character";

const routes = [
  {
    // any undefined route will redirect to name characterInfo
    path: "*",
    redirect: { name: "characters" },
  },
  {
    name: "characters",
    path: "/characters",
    component: () =>
      import(/* webpackChunkName: "Characters" */ "@/views/Characters.vue"),
  },
  {
    // characterInfo route will use view PlayerCharacter
    name: "characterInfo",
    path: `/${characterPrefix}/:id`,
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "CharacterInfo" */ "@/views/CharacterInfo.vue"
      ),
  },
  {
    name: "monsters",
    path: "/monsters",
    component: () =>
      import(/* webpackChunkName: "Monsters" */ "@/views/Monsters.vue"),
  },
  {
    // characterInfo route will use view PlayerCharacter
    name: "monsterInfo",
    path: `/monster/:id`,
    props: true,
    component: () =>
      import(/* webpackChunkName: "MonsterInfo" */ "@/views/MonsterInfo.vue"),
  },
  {
    name: "spells",
    path: "/spells",
    component: () =>
      import(/* webpackChunkName: "Spells" */ "@/views/Spells.vue"),
  },
  {
    name: "spellInfo",
    path: `/spell/:id`,
    props: true,
    component: () =>
      import(/* webpackChunkName: "SpellInfo" */ "@/views/SpellInfo.vue"),
  },
  {
    name: "equipment",
    path: "/equipment",
    component: () =>
      import(/* webpackChunkName: "Equipment" */ "@/views/Equipment.vue"),
  },
  {
    name: "equipmentInfo",
    path: `/equipment/:id`,
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "EquipmentInfo" */ "@/views/EquipmentInfo.vue"
      ),
  },
  {
    name: "map",
    path: `/map`,
    props: true,
    component: () => import(/* webpackChunkName: "Map" */ "@/views/Map.vue"),
  },
  {
    name: "encounter",
    path: `/encounter/`,
    props: true,
    component: () =>
      import(/* webpackChunkName: "Encounter" */ "@/views/EncounterFrame.vue"),
  },
  {
    name: "encounter",
    path: `/encounter/:eid`,
    alias: "/encounter",
    props: true,
    component: () =>
      import(/* webpackChunkName: "Encounter" */ "@/views/EncounterFrame.vue"),
  },
];

export const router = new VueRouter({
  mode: "history",
  routes,
  linkActiveClass: "is-active",
});
