import VueRouter from 'vue-router'
import Monsters from '@/views/Monsters.vue'
import Characters from '@/views/Characters.vue'
import Spells from '@/views/Spells.vue'
import CharacterInfo from '@/views/CharacterInfo.vue'
import MonsterInfo from '@/views/MonsterInfo.vue'

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
    }
]

export const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'is-active'
})