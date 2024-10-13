<template>
    <div class="registerr">
        <div class="login">
            <h2>注册</h2>
            <form @submit.prevent="tryRegister"> <!-- 注意这里改为 tryRegister -->
                <div class="form-group">
                    <label for="new-username">用户名:</label>
                    <input type="text" id="new-username" v-model="username" placeholder="手机号、邮箱或用户名" required>
                </div>
                <div class="form-group">
                    <label for="new-nickname">个人资料名称:</label>
                    <input type="text" id="new-nickname" v-model="nickname" placeholder="请输入" required>
                </div>
                <div class="form-group">
                    <label for="new-password">密码:</label>
                    <input type="password" id="new-password" v-model="password" placeholder="请输入" required>
                </div>
                <button type="submit">注册</button>
            </form>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            <p class="rlink">已经有账号了?
                <router-link to="/login" class="router-link">登录</router-link>
            </p>
        </div>

    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Register',
    data() {
        return {
            username: '',
            nickname: '',
            password: '',
            errorMessage: ''
        };
    },
    computed: {
        ...mapGetters(['allUsers'])
    },
    methods: {
        ...mapActions(['loadUsers', 'addUser']),
        tryRegister() {
            const exists = this.allUsers.some(user => user.username === this.username);
            if (!exists) {
                // 生成头像
                const avatarUrl = `https://api.dicebear.com/8.x/initials/svg?seed=${this.nickname.charAt(0)}`;
                this.addUser({
                    username: this.username,
                    nickname: this.nickname,
                    password: this.password,
                    avatar: avatarUrl
                });
                alert('注册成功！单击“确定”转到登录页面。');
                this.$router.push('/login');
            } else {
                this.errorMessage = '用户名已存在。请选择另一个。';
            }
        }
    }
};
</script>
<style scoped>
.registerr {
    width: 598px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
    padding: 40px;
}
label {
    font-size: 20px;
}
.login h2 {
    font-size: 50px;
    color: #1da1f2;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 20px;
    text-align: center;
}

.form-group label {
    font-weight: 500;
    display: block;
    margin-bottom: 5px;
    color: #555;
}

.form-group input {
    width: 60%;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    font-size: 16px;
    box-sizing: border-box;
    text-align: center;
}

button {
    width: 30%;
    padding: 12px;
    font-size: 16px;
    background-color: #1da1f2;
    border: none;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    transition: 1s color, 1s background-color;
    margin-top: 20px;
}

button:hover {
    color: #1da1f2;
    background-color: #fff;
}

.error {
    color: red;
    margin-top: 15px;
}

.router-link {
    color: #1da1f2;
    text-decoration: none;
    font-weight: 500;
}

.router-link:hover {
    text-decoration: underline;
}
.rlink {
    margin-top: 20px;
}
@media (max-width: 768px) {
    .registerr {
        width: 90%;
        padding: 20px;
    }
}
</style>
