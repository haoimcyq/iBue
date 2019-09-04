import Cookies from 'js-cookie';
import { THEME, MATERIAL, SIDEBAR_COLOR, TOP_COLOR, BRAND_COLOR } from '@/config/setting';

export default {
    namespaced: true,
    state: {
        /** 侧边菜单栏 */
        isCollapseSidebar: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : false,
        /** 抽屉栏 */
        isCollapseDrawer: true,
        /** 设备 */
        screen: Cookies.get('screen') ? !!+Cookies.get('screen') : false,
        /** 主题 */
        theme: Cookies.get('theme') || THEME,
        /** 布局 */
        layout: Cookies.get('layout'),
        /** 背景色 */
        colors: MATERIAL,
        /** 侧边栏背景色 */
        sidebarColor: Cookies.get('sidebarColor') || SIDEBAR_COLOR,
        /** 顶部栏背景色 */
        topColor: Cookies.get('topColor') || TOP_COLOR,
        /** LOGO背景色 */
        brandColor: Cookies.get('brandColor') || BRAND_COLOR,
        /** 显示tabs栏 */
        showTabs: Cookies.get('showTabs') ? !!+Cookies.get('showTabs') : true,
        /** 抽屉栏选项卡 */
        drawerTabsActive: 'message'
    },
    mutations: {
        /** 切换菜单栏 */
        TOGGLE_SIDEBAR: (state, status) => {
            state.isCollapseSidebar = status !== void 0 ? status : !state.isCollapseSidebar;
            if (state.isCollapseSidebar) {
                Cookies.set('sidebarStatus', 1);
            } else {
                Cookies.set('sidebarStatus', 0);
            }
        },
        /** 切换抽屉栏 */
        TOGGLE_DRAWER: (state, status) => {
            state.isCollapseDrawer = status;
        },
        /** 切换设备 */
        TOGGLE_SCREEN: (state, screen) => {
            state.screen = screen;
            Cookies.set('screen', screen);
        },
        /** 设置主题 */
        SET_THEME: (state, theme) => {
            state.theme = theme;
            Cookies.set('theme', theme);
        },
        /** 设置布局 */
        SET_LAYOUT: (state, layout) => {
            state.layout = layout;
            Cookies.set('layout', layout);
        },
        /** 设置侧边栏背景色 */
        SET_SIDEBAR_COLOR: (state, colorName) => {
            state.sidebarColor = colorName;
            Cookies.set('sidebarColor', colorName);
        },
        /** 设置顶部栏背景色 */
        SET_TOP_COLOR: (state, colorName) => {
            state.topColor = colorName;
            Cookies.set('topColor', colorName);
        },
        /** 设置LOGO背景色 */
        SET_BRAND_COLOR: (state, colorName) => {
            state.brandColor = colorName;
            Cookies.set('brandColor', colorName);
        },
        /** 设置LOGO背景色 */
        SET_SHOW_TABS: (state, showTabs) => {
            state.showTabs = showTabs;
            if (state.showTabs) {
                Cookies.set('showTabs', 1);
            } else {
                Cookies.set('showTabs', 0);
            }
        },
        /** 抽屉栏选项卡 */
        SET_DRAWER_TABS_ACTIVE: (state, drawerTabsActive) => {
            state.drawerTabsActive = drawerTabsActive;
        }
    },
    actions: {
        toggleSideBar({ commit }, status) {
            commit('TOGGLE_SIDEBAR', status);
        },
        toggleDrawer({ commit }, status) {
            commit('TOGGLE_DRAWER', status);
        },
        toggleScreen({ commit }, screen) {
            commit('TOGGLE_SCREEN', screen);
        },
        /** 设置主题 */
        setTheme({ commit }, theme) {
            commit('SET_THEME', theme);
        },
        /** 设置布局 */
        setLayout({ commit }, layout) {
            commit('SET_LAYOUT', layout);
        },
        /** 设置侧边栏背景色 */
        setSidebarColor({ commit }, colorName) {
            commit('SET_SIDEBAR_COLOR', colorName);
        },
        /** 设置顶部栏背景色 */
        setTopColor({ commit }, colorName) {
            commit('SET_TOP_COLOR', colorName);
        },
        /** 设置LOGO背景色 */
        setBrandColor({ commit }, colorName) {
            commit('SET_BRAND_COLOR', colorName);
        },
        /** 设置LOGO背景色 */
        setShowTabs({ commit }, showTabs) {
            commit('SET_SHOW_TABS', showTabs);
        },
        /** 抽屉栏选项卡 */
        setDrawerTabsActive({ commit }, drawerTabsActive) {
            commit('SET_DRAWER_TABS_ACTIVE', drawerTabsActive);
        }
    }
};
