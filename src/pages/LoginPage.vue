<template>
    <div class="login-page">
        <h1>Login</h1>
        <form @submit.prevent="onLogin">
            <input v-model="name" type="text" placeholder="Enter your name" required />
            <button>Login</button>
        </form>
    </div>
</template>

<script>
import { userService } from '@/services/user.service'
export default {

    data() {
        return { name: '' }
    },
    methods: {

        onLogin() {
            this.$store.dispatch('signup', this.name)
            this.$router.push('/')
        },

    },
    computed: {
    },
    mounted() {
    }
}
</script>

<style lang='scss'></style>