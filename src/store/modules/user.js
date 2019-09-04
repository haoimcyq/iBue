import login from '@/api/common/login';
import user from '@/api/system/user';
import Cookies from 'js-cookie';
import { resetRouter } from '@/router';

export default {
    namespaced: true,
    state: {
        token: Cookies.get('token'),
        loginName: '',
        avatar: '',
        roles: [],
        menu: []
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
        }
    },
    actions: {
        /* 用户登录 */
        login({ commit }, userInfo) {
            const { username, password } = userInfo;

            return new Promise((resolve, reject) => {
                login
                    .login({ username: username.trim(), password: password })
                    .then(response => {
                        const { data } = response.data;
                        commit('SET_TOKEN', data.token);
                        resolve();
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
                    .then(response => {
                        const { data } = response;

                        if (!data) {
                            reject('Verification failed, please Login again.');
                        }

                        const { roles, avatar } = data;

                        commit('SET_ROLES', [roles]);

                        commit('SET_AVATAR', avatar);
                        resolve(data);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },

        /* 退出登录 */
        logout({ commit, state }) {
            return new Promise((resolve, reject) => {
                login
                    .logout(state.token)
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
                //removeToken()
                resolve();
            });
        },

        /** 创建菜单 */
        setMenu({ commit }, menu) {
            return new Promise((resolve, reject) => {
                user.getMenu()
                    .then(response => {
                        const { data } = response;

                        commit('SET_MENU', data.data.routes);
                        resolve(data);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
    }
};
