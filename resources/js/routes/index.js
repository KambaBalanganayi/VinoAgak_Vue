import { createRouter, createWebHistory } from 'vue-router'

import CatalogueIndex from '../components/Catalogue.vue'
import CatalogueCreate from '../components/Create.vue'
import CatalogueEdit from '../components/Edit.vue'

import CellierIndex from '../components/Cellier/Index.vue'
import CellierCreate from '../components/Cellier/Create.vue'
import CellierEdit from '../components/Cellier/Edit.vue'

import AuthenticatedLayout from '../layouts/Authenticated.vue'
import GuestLayout from '../layouts/Guest.vue'

import Login from '../components/User/Login.vue'



function auth(to, from, next) {
    if(JSON.parse(localStorage.getItem('loggedIn'))) {
        next()
    }
    next('/login')
}

const routes = [
    {
        path:'/',
        redirect:{ name: 'login'},
        component: GuestLayout,
        children: [
            {
                path: '/login',
                name: 'login',
                component: Login,
                meta: { title: 'Login' }
            }
        ]

    },
    {
        component: AuthenticatedLayout,
        beforeEnter: auth,
        children: [
            {path: '/catalogue',
            name: 'catalogue.index', 
            component: CatalogueIndex,
            meta: { title: "Catalogue"}
           },
       
           {path: '/catalogue/create',
            name: 'catalogue.create',
            component: CatalogueCreate,
            meta: { title: "Add to catalogue"} 
           },
       
           {path: '/:id',
            name: 'catalogue.edit',
            component: CatalogueEdit,
            meta: { title: "Modifier Catalogue"} 
           }
        ]
    },
    {
        component: AuthenticatedLayout,
        beforeEnter: auth,
        children: [
            {path: '/cellier',
            name: 'cellier.index',
            component: CellierIndex,
            meta: { title: "Mes cellier"}
           },
       
           {path: '/cellier/create',
            name: 'cellier.create',
            component: CellierCreate,
            meta: { title: "Ajouter un cellier"} 
           },
       
           {path: '/:id',
            name: 'cellier.edit',
            component: CellierEdit,
            meta: { title: "Modifier un cellier"} 
           }
        ]
    }
    

]


export default createRouter({
    history: createWebHistory(),
    routes
})