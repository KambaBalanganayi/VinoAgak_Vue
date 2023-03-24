import { ref, inject } from 'vue';
import { useRouter} from 'vue-router'

export default function useCatalogue() {

    const catalogue = ref({});
    const oneCatalogue = ref({});
    const router = useRouter();
    const validationErrors = ref ({});
    const isLoading = ref(false);
    const swal = inject('$swal');

    const getCatalogue = async () => {
        axios.get('api/catalogue')
        .then(response=>{
            catalogue.value = response.data.data;
            console.log('le catalogue');
            console.log(catalogue.value);
        })
    }
    
    const getOneCatalogue = async (id) => {
        axios.get('api/catalogue/' + id )
        .then(response=>{
            oneCatalogue.value = response.data.data;
            console.log('une bouteille du catalogue');
            console.log(oneCatalogue);
        })
    } 

    const storeCatalogue = async (catalogue) => { 
        if(isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        axios.post('/api/catalogue', catalogue)
        .then(response => {
            router.push({name: 'catalogue.index'})
            swal({
                    icon : 'success',
                    title: 'Bouteille Ajouté Avec Succès'
                })
        })
        .catch(error =>{
            if(error.response?.data){
                validationErrors.value = error.response.data.errors
            }
        })
        .finally(() => isLoading.value = false)
    }

    const updateCatalogue = async (catalogue) => { 
        if(isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        axios.put('/api/catalogue/' + catalogue.id, catalogue)
        .then(response => {
            router.push({name: 'catalogue.index'})
            swal({
                    icon: 'success',
                    title : 'Modification Effecté Avec Succès'
                })
        })
        .catch(error =>{
            if(error.response?.data){
                validationErrors.value = error.response.data.errors
            }
        })
        .finally(() => isLoading.value = false)
    }

    const deleteCatalogue = async (id) => { 
        swal({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this action!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: '#ef4444',
            timer: 20000,
            timerProgressBar: true,
            reverseButtons: true
        })
        .then(result =>{
            if (result.isConfirmed){
                axios.delete('/api/catalogue/' + id)
                .then(response => {
                    getCatalogue()
                    router.push({name: 'catalogue.index'})
                    swal({
                            icon: 'success',
                            title : 'Suppression Effecté Avec Succès'
                        })
                })
                .catch(error =>{
                    swal({
                        icon: 'error',
                        title : 'Une Erreur Est Arrivée'
                    })
                })
            }

        })

    }


    return { catalogue, 
            oneCatalogue, 
            getCatalogue, 
            getOneCatalogue, 
            storeCatalogue, 
            updateCatalogue,
            deleteCatalogue, 
            validationErrors, 
            isLoading,
        } 
}