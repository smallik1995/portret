<template>
    <div :class="{ alert_success: type === 'success',
                   alert_error: type === 'error'}"
         v-if="show">
        {{ text }}
    </div>
</template>

<script>
    export default {
        computed: {
            show() {
                return this.$store.getters.infoBarShow;
            },
            text() {
                return this.$store.getters.infoBarText;
            },
            type() {
                return this.$store.getters.infoBarType;
            }
        }
    }
</script>

<style>
    .alert_success, .alert_error {
        padding: 15px;
        position: absolute;
        top: 20px;
        right: 0;
        background: green;
        width: 300px;
        color: #fff;
        z-index: 10000;
        transition: all 1s;
    }

    .alert_error {
        background: red;
    }
    p {
        margin: 0;
    }
</style>
