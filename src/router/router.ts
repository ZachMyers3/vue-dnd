import VueRouter from 'vue-router'
// import Monsters from '@/views/Monsters.vue'
// import Characters from '@/views/Characters.vue'
// import Spells from '@/views/Spells.vue'
// import CharacterInfo from '@/views/CharacterInfo.vue'
// import MonsterInfo from '@/views/MonsterInfo.vue'
// import SpellInfo from '@/views/SpellInfo.vue'
// import Equipment from '@/views/Equipment.vue'
// import EquipmentInfo from '@/views/EquipmentInfo.vue'
const Characters = () => import('@/views/Characters.vue')
const CharacterInfo = () => import('@/views/CharacterInfo.vue')
const Monsters = () => import('@/views/Monsters.vue')
const MonsterInfo = () => import('@/views/MonsterInfo.vue')
const Spells = () => import('@/views/Spells.vue')
const SpellInfo = () => import('@/views/SpellInfo.vue')
const Equipment = () => import('@/views/Equipment.vue')
const EquipmentInfo = () => import('@/views/EquipmentInfo.vue')

const characterPrefix = 'character'

const routes = [
    { // any undefined route will redirect to name characterInfo
		path: '*',
		redirect: { name: 'characters' }
    },
    { 
        name: 'characters',
        path: '/characters',
        component: Characters
    },
    { // characterInfo route will use view PlayerCharacter
        name: 'characterInfo',
        path: `/${characterPrefix}/:id`,
        props: true,
        component: CharacterInfo
    },
    {
        name: 'monsters',
        path: '/monsters',
        component: Monsters
    },
    { // characterInfo route will use view PlayerCharacter
        name: 'monsterInfo',
        path: `/monster/:id`,
        props: true,
        component: MonsterInfo
    },
    {
        name: 'spells',
        path: '/spells',
        component: Spells
    },
    {
        name: 'spellInfo',
        path: `/spell/:id`,
        props: true,
        component: SpellInfo
    },
    {
        name: 'equipment',
        path: '/equipment',
        component: Equipment
    },
    {
        name: 'equipmentInfo',
        path: `/equipment/:id`,
        props: true,
        component: EquipmentInfo
    }
]

export const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'is-active'
})