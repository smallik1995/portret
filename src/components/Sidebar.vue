<template>
    <aside class="side-bar">
        <ul>
            <li v-if="auth.roles.admin || auth.roles.head">
                <router-link to="/employee">Сотрудники</router-link>
            </li>
            <li v-if="auth.roles.admin || auth.roles.head">
                <router-link to="/company">Компании</router-link>
            </li>
            <li v-if="auth.roles.admin || auth.roles.head || auth.roles.manager">
                <router-link to="/project">Проекты</router-link>
            </li>
            <li>
                <router-link to="/task">Задачи</router-link>
            </li>
            <li>
                <router-link to="/tmp-working-report">Рабочие отчёты</router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        computed: {
            auth() {
                return this.$store.getters.authData;
            }
        }
    }
</script>