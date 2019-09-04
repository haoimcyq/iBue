export default {
    menu: state => state.user.menu,
    token: state => state.user.token,
    roles: state => state.user.roles,
    layout: state => state.setting.layout,
    theme: state => state.setting.theme,
    screen: state => state.setting.screen,
    isCollapseSidebar: state => state.setting.isCollapseSidebar,
    isCollapseDrawer: state => state.setting.isCollapseDrawer,
    colors: state => state.setting.colors,
    sidebarColor: state => state.setting.sidebarColor,
    topColor: state => state.setting.topColor,
    brandColor: state => state.setting.brandColor,
    showTabs: state => state.setting.showTabs,
    drawerTabsActive: state => state.setting.drawerTabsActive,
    visitedTags: state => state.tags.visitedTags
}
