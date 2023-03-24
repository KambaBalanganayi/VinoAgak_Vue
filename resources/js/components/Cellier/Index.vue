<template>
    <div>
        Hello I'm Cellier component Index
        <!-- <div class="product-card" v-for="unCellier in cellier" :key="cellier.id">
            <p>{{ unCellier.nom }}</p>
        </div> -->

        <div class="product-card" v-for="uneCellier in mesCellier" :key="uneCellier.id">
            <p>Nom: {{ uneCellier.nom }}</p>
            <p>Description : {{ uneCellier.description }}</p>
        </div>

        <!-- <router-link :to="{name: 'cellier.edit', params:{ id: uneCellier.id } }">
            Voire mes bouteilles
        </router-link> -->
        <br>

        <!-- <a href="#" @click.prevent="deleteCatalogue(bouteille.id)">Supprimer</a> -->

    </div>
</template>

<script>

import useCellier from '../../composables/cellier';
import { onMounted } from 'vue';

export default {

    setup() {

        const { mesCellier, getOneCellier } = useCellier()
        onMounted(getOneCellier)
        console.log(mesCellier.value);

        return {
            mesCellier,
        }
    }
}

</script>