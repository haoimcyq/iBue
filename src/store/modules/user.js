import user from '@/api/system/user';
import Cookies from 'js-cookie';
import { resetRouter } from '@/router';
import { Notification } from 'element-ui';

export default {
    namespaced: true,
    state: {
        token: Cookies.get('token'),
        loginName: '',
        avatar: '',
        roles: [],
        menu: [],
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
            Cookies.set('token', token);
        },
        SET_LOGINNAME: (state, loginName) => {
            state.loginName = loginName;
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        },
        SET_MENU: (state, menu) => {
            state.menu = menu;
        },
    },
    actions: {
        /** 用户登录 */
        login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                user.login(userInfo)
                    .then(({ data }) => {
                        console.log(data);
                        const {
                            status,
                            result: { access_token },
                        } = data;

                        if (status === 'OK') {
                            commit('SET_TOKEN', access_token);
                            resolve();
                        } else {
                            Notification.success({
                                title: 'Mock请求',
                                message: '无效的token',
                            });
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },

        /* 获取用户信息 */
        getInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                user.getInfo({ token: state.token })
                    .then(({ data }) => {
                        const { status, result } = data;

                        if (status === 'FAIL') {
                            reject('Verification failed, please Login again.');
                        }

                        commit('SET_ROLES', result.roles);

                        commit('SET_AVATAR', result.avatar);
                        resolve(result);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },

        /* 退出登录 */
        logout({ commit, state }) {
            return new Promise((resolve, reject) => {
                user.logout(state.token)
                    .then(() => {
                        commit('SET_TOKEN', '');
                        commit('SET_ROLES', []);
                        //removeToken()
                        resetRouter();
                        resolve();
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },

        /** 移除token */
        resetToken({ commit }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '');
                commit('SET_ROLES', []);
                resolve();
            });
        },

        /** 创建菜单 */
        setMenu({ commit }) {
            return new Promise((resolve, reject) => {
                user.getMenu()
                    .then(({ data }) => {
                        const {
                            status,
                            result: { routes },
                        } = data;

                        if (status === 'OK') {
                            commit('SET_MENU', routes);
                            resolve(routes);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
    },
};
