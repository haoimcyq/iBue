import { mapGetters } from 'vuex';

export const theme = {
    computed: {
        ...mapGetters(['layout', 'theme', 'bgColors', 'sidebarColor', 'topColor'])
    },
    mounted() {
        this.$nextTick(() => {
            this.handleToggleTheme(this.theme);
            this.handleChangeAsideColor(this.sidebarColor);
            this.handleChangeTopColor(this.topColor);
        })
    },
    watch: {
        theme(val) {
            this.handleToggleTheme(val)
        },
        sidebarColor(val) {
            this.handleChangeAsideColor(val);
        },
        topColor(val) {
            this.handleChangeTopColor(val);
        }
    },
    methods: {
        /**
         * 切换主题
         * @param { String } theme 主题名称
         * @returns
         */
        handleToggleTheme(theme) {
            let classList = document.body.classList;

            if (theme === 'light-theme') {
                classList.remove('dark-theme');
            } else {
                classList.remove('light-theme');
            }

            classList.add(theme);

            return theme
        },
        /**
         * 修改侧边栏背景色
         * @param { String } colorName 颜色名称
         * @returns
         */
        handleChangeAsideColor(colorName) {
            this.handleChangeColor(this.$refs.ibueLayoutSidebar, colorName, 'BMS_SIDEBAR_THEME');
        },
        /**
         * 修改顶部背景色
         * @param { String } colorName 颜色名称
         * @returns
         */
        handleChangeTopColor(colorName) {
            this.handleChangeColor(this.$refs.ibueLayoutTop, colorName, 'BMS_TOP_THEME');
        },
        /**
         * 修改背景色
         * @param { Object } selector 选择器
         * @param { String } colorName 颜色名称
         * @param { String } className class名称
         * @returns
         */
        handleChangeColor(selector, colorName, className) {
            if (!colorName) return;

            let color = '';
            for (let item in this.bgColors) {
                if (item === colorName) {
                    color = this.bgColors[item]
                }
            }

            if (!color) return false;

            selector.style.backgroundColor = color;
            this.removeClass(selector, className);
            selector.classList.add(`${className}_${colorName}`);
        },
        /**
         * 切换className
         * @param { Object } selector 选择器
         * @param { String } keyword 关键字
         * @returns
         */
        removeClass(selector, keyword) {
            if (!selector) return false;

            let classNames = selector.className.split(' '),
                res = [];

            for (let name of classNames) {
                if (name.includes(keyword)) {
                    res.push(name);
                }
            }

            selector.classList.remove(...res);
        }
    }
}
