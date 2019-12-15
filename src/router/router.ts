import VueRouter from 'vue-router'
import Monsters from '@/views/Monsters.vue'
import Characters from '@/views/Characters.vue'
import CharacterInfo from '@/views/CharacterInfo.vue'

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
    }
]

export const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'is-active'
})