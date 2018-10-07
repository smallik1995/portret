<template>
    <svg id="root">
        <slot name="head"></slot>
        <slot name="eyes"></slot>
        <slot name="hair"></slot>
        <slot name="eyebrows"></slot>
        <slot name="nose"></slot>
        <slot name="lips"></slot>
        <slot name="accessory"></slot>
    </svg>
</template>
<script>
    export default {
        methods: {

        }
    }
</script>
<style>
#root {
    height: 90vh;
    width: 96%;
    display: block;
    margin: auto;
}
</style>