<template>
    <div class="loginn">
        <div class="login">
            <h2>登录</h2>
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="username">用户名:</label>
                    <input type="text" id="username" v-model="username" placeholder="请输入" required>
                </div>
                <div class="form-group">
                    <label for="password">密码:</label>
                    <input type="password" id="password" v-model="password" placeholder="请输入" required>
                </div>
                <button type="submit">登录</button>
            </form>

            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            <p class="rlink">还没有账号? <router-link to="/register" class="router-link">注册账号</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
            errorMessage: ''
        };
    },
    computed: {
        ...mapGetters(['allUsers']) 
    },
    created() {
        if (this.allUsers.length === 0) {
            this.loadUsers(); 
        }
    },
    methods: {
        ...mapActions(['loadUsers']), 
        login() {
            const user = this.allUsers.find(u => u.username === this.username && u.password === this.password);
            if (user) {
                this.$store.commit('login', user);
                this.$router.push('/'); 
            } else {
                this.errorMessage = '密码或用户名错误！请再试一次。'; 
            }
        }
    }
};
</script>

<style scoped>
.loginn {
    width: 598px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
    padding: 40px;
    font-family: 'Roboto', sans-serif;
    
}

.login h2 {
    font-size: 50px;
    color: #1da1f2;
    margin-bottom: 20px;
}
label{
    font-size: 20px;
}
.form-group {
    margin-bottom: 20px;
    text-align: center
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
.rlink{
    margin-top: 20px;
}
@media (max-width: 768px) {
    .loginn {
        width: 90%;
        padding: 20px;
    }
}
</style>