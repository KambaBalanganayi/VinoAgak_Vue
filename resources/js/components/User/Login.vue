<template>
    <div class="container-signup">
        <div class="header-form">
            <h3>Bienvenue</h3>
        </div>

        <section class="container-form">

            <form @submit.prevent="submitLogin">
                <p class="text-form">Connectez-vous à votre compte</p>
                <!-- Email -->
                <div>
                    
                    <input v-model="loginForm.email" id="email" type="email" class="email" required autofocus autocomplete="username" placeholder="courriel">
                    <!-- Validation Errors -->
                    <div class="text-red-600 mt-1">
                        <div v-for="message in validationErrors?.email">
                            {{ message }}
                        </div>
                    </div>
                </div>
                <!-- Password -->
                <div >
                    
                    <input v-model="loginForm.password" id="password" type="password" class="password" required autocomplete="current-password" placeholder="mot de passe">
                    <!-- Validation Errors -->
                    <div class="text-red-600 mt-1">
                        <div v-for="message in validationErrors?.password">
                            {{ message }}
                        </div>
                    </div>
                </div>
                <!-- Remember me -->
                <div >
                    <label >
                        <input type="checkbox" name="remember" v-model="loginForm.remember" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        <span class="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>
        
                <!-- Buttons -->
                <div >
                    <button  :class="{ 'opacity-25': processing }" :disabled="processing">
                        Log in
                    </button>
                </div>
                
            </form>
        </section>
    </div>
</template>

<script>
import useAuth from '../../composables/auth'

export default {
    setup() {
        const { loginForm, validationErrors, processing, submitLogin } = useAuth()
        return { loginForm, validationErrors, processing, submitLogin }
    }
}
</script>