<template>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <!-- Collapsed Hamburger -->
                <!-- Branding Image -->
                <a class="navbar-brand" >
                    Qlever Solutions
                </a>
            </div>

            <div class="collapse navbar-collapse">
                <!-- Left Side Of Navbar -->
                <ul class="nav navbar-nav">
                    &nbsp;
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="nav navbar-nav navbar-right">
                    <li v-if="!auth"><router-link to="/login">Вход</router-link></li>
                    <li v-if="!auth"><router-link to="/register">Регистрация</router-link></li>
                    <li v-if="auth"><span class="name">{{ user.user.name }}</span></li>
                    <li v-if="auth" @click.prevent="logout"><a>Выход</a></li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script>
    import axios from 'axios';
    export default {
        computed: {
            auth() {
                return this.$auth.isAuthenticated();
            },
            user() {
                return this.$store.getters.authData;
            }
        },
        methods: {
            logout() {
                axios.get(`${this.$root.$options.baseUrl}/logout?token=${localStorage.getItem('token')}`);
                this.$store.commit('set', {type: 'authUser', items: false });
                localStorage.clear();
                this.$router.push('/login');
            }

        }
    }
</script>