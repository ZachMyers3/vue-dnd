import VueRouter from 'vue-router'
import Characters from '@/views/Characters.vue'
import CharacterInfo from '@/views/CharacterInfo.vue'

const characterPrefix = 'character/'

const routes = [
    { // any undefined route will redirect to name characterInfo
		path: '*',
		redirect: { name: 'characters' }
    },
    { // characterInfo route will use view PlayerCharacter
        name: 'characters',
        path: '/characters',
        component: Characters
    },
    {
        name: 'characterInfo',
        path: '/' + characterPrefix + ':id',
        props: true,
        component: CharacterInfo
    }
]

export const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'is-active'
})