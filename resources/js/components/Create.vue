<template>

    <form @submit.prevent='storeCatalogue(catalogue)'>
    
        <div>
          <label for="catalogue-type">Type:</label>
          <input v-model="catalogue.vino__type_id" id="catalogue-type" type="number" min="1" max="2">
          <div class="text-red">
            <div v-for="message in validationErrors?.vino__type_id">{{ message }}</div>
          </div>
        </div>
    
        <div>
          <label for="catalogue-nom">Nom:</label>
          <input v-model="catalogue.nom" id="catalogue-nom" type="text">
          <div class="text-red">
              <div v-for="message in validationErrors?.nom">{{ message }}</div>
          </div>
        </div>
    
        <div>
          <label for="catalogue-image">Image:</label>
          <input v-model="catalogue.image" id="catalogue-image" type="text">
          <div class="text-red">
              <div v-for="message in validationErrors?.image">{{ message }}</div>
          </div>
        </div>
    
        <div>
          <label for="catalogue-code_saq">Code SAQ:</label>
          <input v-model="catalogue.code_saq" id="catalogue-code_saq" type="text">
          <div class="text-red">
              <div v-for="message in validationErrors?.code_saq">{{ message }}</div>
          </div>
        </div>
    
        <div>
          <label for="catalogue-pays">Pays:</label>
          <input v-model="catalogue.pays" id="catalogue-pays" type="text">
          <div class="text-red">
              <div v-for="message in validationErrors?.pays">{{ message }}</div>
          </div>
        </div>
    
        <div>
          <label for="catalogue-description">Description:</label>
          <input v-model="catalogue.description" id="catalogue-description" type="text">
          <div class="text-red">
              <div v-for="message in validationErrors?.description">{{ message }}</div>
          </div>
        </div>
    
        <div>
          <label for="catalogue-prix_saq">Prix SAQ:</label>
          <input v-model="catalogue.prix_saq" id="catalogue-prix_saq" type="text">
          <div class="text-red">
              <div v-for="message in validationErrors?.prix_saq">{{ message }}</div>
          </div>
        </div>
    
        <div>
          <label for="catalogue-url_saq">URL SAQ:</label>
          <input v-model="catalogue.url_saq" id="catalogue-url_saq" type="text">
          <div class="text-red">
              <div v-for="message in validationErrors?.url_saq">{{ message }}</div>
          </div>
        </div>
    
        <div>
          <label for="catalogue-url_img">URL Image:</label>
          <input v-model="catalogue.url_img" id="catalogue-url_img" type="text">
          <div class="text-red">
              <div v-for="message in validationErrors?.url_img">{{ message }}</div>
          </div>
        </div>
    
        <div>
          <label for="catalogue-format">Format:</label>
          <input v-model="catalogue.format" id="catalogue-format" type="text">
          <div class="text-red">
              <div v-for="message in validationErrors?.format">{{ message }}</div>
          </div>
        </div>
    
    
        <div class="mt-4">
            <button :disabled="isLoading" class="">
                <div v-show="isLoading" class=""></div>
                <span v-if="isLoading">Processing...</span>
                <span v-else>Save</span>
            </button>
        </div>
    
    
    </form>
    
    
    </template>
    
    <script>
    import { onMounted, reactive} from "vue";
    import useCatalogue from "../composables/catalogue.js";
    
    export default {
        setup() {
            const catalogue = reactive ({
                nom: '',
                image: '',
                code_saq: '',
                pays: '',
                description: '',
                prix_saq: '',
                url_saq: '',
                url_img: '',
                format: '',
                vino__type_id: '',
            })
    
            const { storeCatalogue, validationErrors, isLoading } = useCatalogue()
    
            return { catalogue, storeCatalogue, validationErrors, isLoading }
        }
    }
    </script>
    
    