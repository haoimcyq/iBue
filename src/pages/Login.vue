<template>
    <section class="ibue-layout-login">
        <section class="ibue-login-panel ibue-pp-32">
            <div class="ibue-login-header">
                <img :src="logo" />
                <h1 class="ibue-my-0">
                    iBue Admin Pro <sup class="ibue-sup-label">Beta</sup>
                </h1>
            </div>
            <div class="ibue-pp-32">
                <el-form label-width="80px" :model="loginForm">
                    <el-form-item label="用户名">
                        <el-input v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input
                            type="password"
                            v-model="loginForm.password"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="验证码">
                        <el-input v-model="loginForm.checkcode"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button
                            type="primary"
                            :loading="isLogined"
                            @click="handleLogin"
                            >立即登录</el-button
                        >
                    </el-form-item>
                </el-form>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            logo: require('@/assets/logo.png'),
            isLogined: false,
            loginForm: {
                username: 'ibue',
                password: 123456,
                checkcode: '',
            },
        };
    },
    mounted() {},
    methods: {
        async handleLogin() {
            this.isLogined = true;
            await this.$store
                .dispatch('user/login', this.loginForm)
                .then(() => {
                    this.isLogined = false;
                    this.$router.push('/');
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.ibue-login-header {
    display: flex;
    align-items: center;

    img {
        display: block;
        width: 64px;
        height: 64px;
    }
}
</style>
