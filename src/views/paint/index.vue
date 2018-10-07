<template>
    <div>
        <div id="paintWrapper" @touchmove.prevent @mousedown.prevent="changeColor">
            <template-svg>
                <paint-element v-for="item in items"
                               :key="item.id"
                               :slot="item.name"
                               :src="item.src"
                               :size="item.size"
                               :x="item.x"
                               :y="item.y"></paint-element>
            </template-svg>
        </div>
        <paint-menu
                    @changeAccessory="changeSrc( $event )"
                    @changeHead="changeSrc( $event )"
                    @changeHair="changeSrc( $event )"
                    @changeEyebrows="changeSrc( $event )"
                    @changeEyes="changeSrc( $event )"
                    @changeNose="changeSrc( $event )"
                    @changeLips="changeSrc( $event )">
        </paint-menu>
    </div>
</template>
<script>
    import axios from 'axios'
    import paintElement from './components/paintElement.vue'
    import paintMenu from './components/paintMenu.vue'
    import templateSvg from './components/templateSVG.vue'
    export default {
        components: {
            paintElement,
            paintMenu,
            templateSvg
        },
        data() {
            return {
                items: [
                    { name: 'accessory', size: 590, x: 40, y: 90 , src: 'static/images/svg/style-1/accessory/1.svg' },
                    { name: 'head', size: 590, x: 0, y: 0 , src: 'static/images/svg/style-1/head/1.svg' },
                    { name: 'hair', size: 590, x: 20, y: 10 , src: 'static/images/svg/style-1/hair/1.svg' },
                    { name: 'eyebrows', size: 590, x: 60, y: 100 , src: 'static/images/svg/style-1/eyebrows/1.svg' },
                    { name: 'eyes', size: 590, x: 60, y: 110 , src: 'static/images/svg/style-1/eyes/1.svg' },
                    { name: 'nose', size: 590, x: 85, y: 120 , src: 'static/images/svg/style-1/nose/1.svg' },
                    { name: 'lips', size: 590, x: 70, y: 190 , src: 'static/images/svg/style-1/lips/1.svg' },
                ],
            }
        },
        methods: {
            changeColor(e) {
                const target = e.target
                const random = () => Math.floor( Math.random() * 255 )
                if ( target.tagName === 'path') {
                    target.style.fill = `rgb(${random()},${random()},${random()})`
                }
            },
            changeSrc( {src, value} ) {
                const item = this.items.find(item => item.name === value.toLowerCase())
                item.src = src
            },
            test() {
                return false
            }
        }
    }
</script>
<style src="./scss/index.scss" lang="scss" scoped></style>