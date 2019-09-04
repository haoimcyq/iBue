<template>
    <div class="scrollbar-outer">
        <div class="scrollbar-inner">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IbueScrollbar'
};
</script>

<style lang="scss">
.scrollbar-outer {
    position: relative;
    height: 100%;
    overflow: hidden;
}

.scrollbar-inner {
    height: 100%;
    padding-right: 20px;
    margin-right: -20px;
    overflow-x: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
}
</style>
