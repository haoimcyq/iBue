<template>
    <section>
        <ibue-card class="ibue-mb-16">
            <header slot="header">基本信息</header>
            <el-form ref="form" :model="formData" label-width="100px">
                <el-row :gutter="16">
                    <el-col :md="6">
                        <el-form-item label="客户名称">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="客户简称">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="客户类别">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="联系人">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="联系电话">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="客户来源">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="客户信用">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="客户信用">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="24">
                        <el-form-item label="客户简介">
                            <el-input type="textarea" v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </ibue-card>
        <ibue-card class="ibue-mb-16">
            <header slot="header">业务信息</header>
            <el-form ref="form" :model="formData" label-width="100px">
                <el-row :gutter="16">
                    <el-col :md="6">
                        <el-form-item label="国家地区">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="省市">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="详细地址">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="公司网址">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="客户联系人">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="电话">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="传真">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="邮编">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="客户简介">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </ibue-card>
        <ibue-card class="ibue-mb-16">
            <header slot="header">财务信息</header>
            <el-form ref="form" :model="formData" label-width="100px">
                <el-row :gutter="16">
                    <el-col :md="6">
                        <el-form-item label="信用额度">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="结算方式">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="开户行">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="户名">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="账号">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="发票类型">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="税号">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </ibue-card>

    </section>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                formData: {
                    name: ''
                }
            }
        }
    }
</script>

<style scoped>

</style>
