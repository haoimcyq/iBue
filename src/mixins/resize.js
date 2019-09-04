export default {
    data() {
        return {
            sidebar: null,
            drawer: null
        };
    },
    mounted() {
        window.addEventListener('resize', this.resizeHandler);
        this.sidebar = document.querySelector('.ibue-layout-sidebar');
        this.drawer = document.querySelector('.ibue-layout-drawer');
        this.sidebar && this.sidebar.addEventListener('transitionend', this.sidebarResizeHandler);
        this.drawer && this.drawer.addEventListener('transitionend', this.sidebarResizeHandler);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.resizeHandler);
        this.sidebar && this.sidebar.removeEventListener('transitionend', this.sidebarResizeHandler);
        this.drawer && this.drawer.removeEventListener('transitionend', this.sidebarResizeHandler);
    },
    methods: {
        resizeHandler() {
            if (this.chart) {
                this.chart.resize();
            }
        },
        sidebarResizeHandler(e) {
            if (e.propertyName === 'width') {
                this.resizeHandler();
            }
        }
    }
};
