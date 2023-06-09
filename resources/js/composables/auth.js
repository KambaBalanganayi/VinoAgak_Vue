import { ref, reactive, inject } from 'vue';
import { useRouter} from 'vue-router';

const user = reactive ({
    name: '',
    email: '',

})

export default function useAuth() {

    const processing = ref(false);
    const validationErrors = ref ({});
    const router = useRouter();
    const loginForm = reactive({
            email: '',
            password: '',
            remember: false
    })
    const swal = inject('$swal');


    const submitLogin = async () => {
        if (processing.value) return

        processing.value = true
        validationErrors.value = {}

        axios.post('/login', loginForm)
        .then(async response => {
            loginUser(response)
        })
        .catch(error => {
            if (error.response?.data) {
                validationErrors.value = error.response.data.errors
            }
        })
        .finally(() => processing.value = false)
    }
    
    const loginUser = (response) => {
        user.name = response.data.name,
        user.email = response.data.email,
        user.id = response.data.id
        localStorage.setItem('loggedIn', JSON.stringify(true))
        router.push({ name: 'catalogue.index' })
    }

    const getUser = () => {
        axios.get('/api/user')
        .then(response => {
            loginUser(response)
            console.log('user info');
            console.log(response);
        })
    }

    const logout = async () => {
        if (processing.value) return

        processing.value = true

        axios.post('/logout')
            .then(response => router.push({ name: 'login' }))
            .catch(error => {
                swal({
                    icon: 'error',
                    title: error.response.status,
                    text: error.response.statusText
                })
            })
            .finally(() => {
                processing.value = false
            })
    }

    return { loginForm, 
            validationErrors,
            processing,
            user,
            submitLogin,
            getUser,
            logout
            } 
}