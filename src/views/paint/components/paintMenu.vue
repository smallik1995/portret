<template>
    <div class="paint-menu">
        <button @click="changeSrc( 'Head' )">head</button>
        <button @click="changeSrc( 'Hair' )">hair</button>
        <!--<button @click="changeNose">nose</button>-->
        <!--<button @click="changeLips">lips</button>-->
        <!--<button @click="changeEyes">eyes</button>-->
        <!--<button @click="changeEyebrows">eyebrows</button>-->
    </div>
</template>
<script>
    export default {
        watch: {
            headSrc() {
                this.changeHead();
            }
        },
        methods: {
            changeSrc( value ) {
                this.$emit(`change${value}`, {
                    src: `static/images/svg/style-1/${value.toLowerCase()}/2.svg`,
                    value
                })
            },
        }
    }
</script>