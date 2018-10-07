<template>
    <svg :viewBox="viewBox"
         :x="x" :y="y"
         @touchstart="startDrag" @mousedown="startDrag"
         @mousemove="onDrag" @touchmove="onDrag"
         @mouseup="stopDrag" @touchend="stopDrag" @mouseleave="stopDrag">
    </svg>
</template>

<script>
    import axios from 'axios';
    export default {
        props: {
            src: String,
            size: Number,
            x: Number,
            y: Number,
        },
        data() {
            return {
                dragging: false,
                start: {x: 0, y: 0},
            }
        },
        computed: {
            viewBox() {
                return `0 0 ${this.size} ${this.size}`
            }
        },
        created() {
            this.load()
        },
        watch: {
            src() {
                this.load()
            }
        },
        methods: {

            load() {
                axios.get(this.src)
                    .then(response => {
                          this.$el.innerHTML = ''
                          this.$el.innerHTML = response.data
                    })
                    .catch(error => console.log(error))
            },
            startDrag(e) {
                e = e.changedTouches ? e.changedTouches[0] : e
                this.dragging = true
                this.start.x = e.pageX
                this.start.y = e.pageY
            },
            onDrag(e) {
                e = e.changedTouches ? e.changedTouches[0] : e
                if (this.dragging) {
                    const dy = e.pageY - this.start.y
                    const dx = e.pageX - this.start.x
                    this.$el.style.transform = `translate(${dx}px, ${dy}px)`
                    console.log(this.$el.style)
                }
            },
            stopDrag() {
                if (this.dragging) {
                    this.dragging = false
//                    this.start.x = 0
//                    this.start.y = 0
                }
            }
        }
    }
</script>