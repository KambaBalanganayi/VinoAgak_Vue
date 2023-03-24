import { ref, inject } from 'vue';
import { useRouter} from 'vue-router'
import { onMounted } from "vue";
import useAuth from "../composables/auth";


export default function useCellier() {

    const router = useRouter();
    // const cellier = ref({});
    let mesCellier = ref({});


    // const getCellier = async () => {
    //     axios.get('api/cellier')
    //     .then(response=>{
    //         cellier.value = response.data.data;
    //         console.log('le cellier');
    //         console.log(cellier.value);
    //     })
    // }
    
    const { user } = useAuth();

    const getOneCellier = async () => {
        axios.get('api/cellier/' + user.id )
        .then(response=>{
            mesCellier.value = response.data.data;
            mesCellier = mesCellier.value;
            console.log('une cellier');
            console.log(mesCellier);
            // console.log(mesCellier.value);
        })
    } 

    return {
        // cellier,
        mesCellier,

        // getCellier,
        getOneCellier
    }
}
