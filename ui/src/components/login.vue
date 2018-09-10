<template>
    <div class="login">
            <mu-flex class="demo-linear-progress" v-if="hide">
                <mu-linear-progress :value="linear" mode="determinate" color="#00a0e9" size="2"></mu-linear-progress>
            </mu-flex>
            <div class="bg">
                <div class="form">
            	<div style="text-align: center;">
            		<h2>后台管理系统</h2>
            	</div>
                    <mu-form ref="form" :model="validateForm" class="mu-demo-form">
                        <mu-form-item label="用户名"  prop="username" :rules="usernameRules">
                            <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
                        </mu-form-item>
                        <mu-form-item label="密码" prop="password" :rules="passwordRules">
                            <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
                        </mu-form-item>
                        <mu-form-item prop="isAgree" :rules="argeeRules">
                            <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
                        </mu-form-item>
                        <mu-form-item>
                            <mu-button color="primary" @click="submit">提交</mu-button>
                            <mu-button @click="clear">重置</mu-button>
                        </mu-form-item>
                    </mu-form>
                </div>

            </div>
    </div>
</template>
<script>
    export default {
        name: "login",
        data(){
            return {
                linear: 0,
                hide:false,
                usernameRules: [
                    { validate: (val) => !!val, message: '必须填写用户名'},
                    { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
                ],
                passwordRules: [
                    { validate: (val) => !!val, message: '必须填写密码'},
                    { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
                ],
                argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
                validateForm: {
                    username: '',
                    password: '',
                    isAgree: false
                },
                num:0
            }
        },
        methods:{
            submit () {
                var that = this;
                this.$refs.form.validate().then((result) => {
                    console.log('form valid: ', result);
                    if(that.num >= 1){
                        return false;
                    }
                    ++that.num;
                    if(result == true){
                        this.hide = true;
                        var timer1 = setInterval(() => {
                            this.linear += 10;
                            if (this.linear > 30) this.linear = 0;
                            if(this.linear > 28){
                                console.log(1)
                                clearInterval(timer1);
                                this.hide = false;
                                this.$router.push({path:"index"})
                            }
                        }, 500);
                    }else{
											that.num = 0
										}
                });
            },
            clear () {
                this.$refs.form.clear();
                this.validateForm = {
                    username: '',
                    password: '',
                    isAgree: false
                };
            },

        },
        created(){
            document.title="登录";
        },
        mounted(){

        },
        beforeDestroy () {
            console.log("页面销毁前");
        }
    }
</script>
<style scoped>
    .login{
        width: 100%;
        height: 100%!important;
        position: relative;
        top:0;
        overflow: hidden;
    }
    .demo-linear-progress {
        margin: 0 0;
    }
    .bg{
        width: 100%;
        height: 100%;
        position: relative;
        top:0;
        background: url("../assets/bg.jpg")no-repeat center;
        background-size: 100% 100%;
    }

    .bg>img{
        width: 100%;
        height: 100%;
    }
    .form{
        width: 500px;
        margin-left: -200px;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translateY(-50%);
        background: #fff1f0;
        padding: 1% 2%;
    }
    .mu-form-item{
        padding:0 2%;
    }
    .mu-demo-form {
        width: 100%;
        max-width: 460px;
    }
</style>