export default {
    namespaced: true,
    state: {
        visitedTags: [],
        cachedTags: []
    },
    mutations: {
        /** 添加标签 */
        ADD_TAG: (state, tag) => {
            /** 加入访问标签 */
            if (state.visitedTags.every(v => v.path !== tag.path)) {
                state.visitedTags.push(
                    Object.assign({}, tag, {
                        title: tag.meta.title || 'no-name'
                    })
                );
            }

            /** 加入缓存标签 */
            if (!state.cachedTags.includes(tag.name)) {
                if (tag.meta && tag.meta.keepAlive) {
                    state.cachedTags.push(tag.name);
                }
            }
        },
        /** 删除标签 */
        DEL_TAG: (state, tag) => {
            for (const [i, v] of state.visitedTags.entries()) {
                if (v.path === tag.path) {
                    state.visitedTags.splice(i, 1);
                    break;
                }
            }

            for (const i of state.cachedTags) {
                if (i === tag.name) {
                    const index = state.cachedTags.indexOf(i);
                    state.cachedTags.splice(index, 1);
                    break;
                }
            }
        },
        /** 删除其他标签 */
        DEL_OTHER_TAG: (state, tag) => {
            state.visitedTags = state.visitedTags.filter(v => {
                return v.meta.affix || v.path === tag.path;
            });

            for (const i of state.cachedTags) {
                if (i === tag.name) {
                    const index = state.cachedTags.indexOf(i);
                    state.cachedTags = state.cachedTags.slice(index, index + 1);
                    break;
                }
            }
        },
        /** 删除全部标签 */
        DEL_ALL_TAG: (state) => {
            state.visitedTags = state.visitedTags.filter(tag => tag.meta.affix);
            state.cachedTags = [];
        },
        /** 刷新标签 */
        UPDATE_TAG: (state, tag) => {
            for (let v of state.visitedTags) {
                if (v.path === tag.path) {
                    v = Object.assign(v, tag);
                    break;
                }
            }
        }
    },
    actions: {
        /** 添加标签 */
        addTag({ commit }, tag) {
            commit('ADD_TAG', tag);
        },
        /** 删除标签 */
        delTag({ commit, state }, tag) {
            return new Promise(resolve => {
                commit('DEL_TAG', tag);
                resolve({
                    visitedTags: [...state.visitedTags],
                    cachedTags: [...state.cachedTags]
                });
            });
        },
        /** 删除其他标签 */
        delOtherTag({ commit, state }, tag) {
            return new Promise(resolve => {
                commit('DEL_OTHER_TAG', tag);
                resolve({
                    visitedTags: [...state.visitedTags],
                    cachedTags: [...state.cachedTags]
                });
            });
        },
        /** 删除全部标签 */
        delAllTag({ commit, state }, tag) {
            return new Promise(resolve => {
                commit('DEL_ALL_TAG', tag);
                resolve({
                    visitedTags: [...state.visitedTags],
                    cachedTags: [...state.cachedTags]
                });
            });
        },
        /** 刷新标签 */
        updateTag({ commit }, tag) {
            commit('UPDATE_TAG', tag);
        }
    }
};
