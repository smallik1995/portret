<template>
    <div>
        Value: {{ count }}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">Increment if odd</button>
        <button @click="incrementAsync">Increment async</button>
        <button @click="actionB">AWAIT</button>
        <div>
            <div>Recent History (last 5 entries): {{ history }}</div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions, mapState } from 'vuex'
    export default {
        computed: {
            ...mapState([
                'count',
                'history'
            ])
        },
        methods: {
            ...mapActions([
                'increment',
                'decrement',
                'incrementIfOdd',
                'incrementAsync',
                'actionA',
                'actionB'
            ])
        }
    }
</script>
