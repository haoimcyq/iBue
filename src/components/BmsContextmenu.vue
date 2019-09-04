<template>
    <section class="ibue-contextmenu" :style="setStyle">
        <ul>
            <li v-for="(item, index) in list" :key="index" @click="handleClick(item, $event)">{{ item.name }}</li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "BmsContextmenu",
        props: {
            list: {
                type: Array,
                default: []
            },
            visible: {
                type: Boolean,
                default: false
            },
            x: {
                type: Number,
                default: 0
            },
            y: {
                type: Number,
                default: 0
            }
        },
        computed: {
            setStyle () {
                return {
                    display: this.visible ? 'block' : 'none',
                    left: this.x,
                    top: this.y
                }
            }
        },
        methods: {
            handleClick (params, e) {
                this.$emit('handleClick', params, e);

                /* 隐藏右键菜单 */
                this.$emit('update:visible', false);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ibue-contextmenu {
        position: fixed;
    }
</style>
