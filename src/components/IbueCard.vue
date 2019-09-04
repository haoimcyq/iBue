<template>
    <div :class="classes" :data-theme="theme">
        <div class="ibue-card-header" v-if="$slots.header">
            <slot name="header">{{ title }}</slot>
        </div>
        <div class="ibue-card-body" :class="bodyStyle">
            <slot></slot>
        </div>
        <div class="ibue-card-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "IbueCard",
        props: {
            bordered: {
                type: Boolean,
                default: true
            },
            shadow: {
                type: Boolean,
                default: true
            },
            title: {
                type: String
            },
            bodyStyle: {
                type: Object
            }
        },
        computed: {
            ...mapGetters(['theme']),
            classes() {
                return [
                    'ibue-card',
                    {
                        'is-bordered': this.bordered,
                        'is-shadow': this.shadow
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>