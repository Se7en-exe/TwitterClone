<template>
    <div class="edit-profile-container" v-if="user">
        <div class="edit-profile-form">
            <h1 id="edpf">编辑个人资料</h1>
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="username">用户名:</label>
                    <input type="text" id="username" v-model="user.username" disabled class="disabled-input">
                </div>
                <div class="form-group">
                    <label for="nickname">个人资料名称:</label>
                    <input type="text" id="nickname" v-model="nickname">
                </div>
                <div class="form-group">
                    <label for="password">新密码:</label>
                    <input type="password" id="password" v-model="password">
                </div>
                <div class="form-group">
                    <label for="confirm-password">确认密码:</label>
                    <input type="password" id="confirm-password" v-model="confirmPassword">
                </div>
                <div class="form-group">
                    <label for="avatar">头像:</label>
                    <input type="file" id="avatar" accept="image/*" @change="handleAvatarChange">
                    <p class="input-hint">选择一个图片作为你的头像。</p>
                    <img v-if="avatar" :src="avatar" alt="Avatar" class="avatar-preview">
                </div>
                <button type="submit">保存更改</button>
            </form>
        </div>
    </div>
    <div v-else class="unloginn">
        <div class="unlogin">
            <h1 id="edpf">请先登录</h1><router-link to="/login"><button
                    @click="redirectToLogin">跳转到登录页面</button></router-link>

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'EditProfile',
    computed: {
        ...mapState(['user']),
    },
    data() {
        return {
            nickname: '',
            password: '',
            confirmPassword: '',
            avatar: '',
        };
    },
    created() {
        this.initializeFormData()
    },
    methods: {
        initializeFormData() {
            if (this.user) {
                this.nickname = this.user.nickname;
                this.avatar = this.user.avatar;
            }
        },
        submitForm() {
            if (this.password !== this.confirmPassword) {
                alert('确认密码时没有匹配。');
                return;
            }
            const updatedInfo = {
                nickname: this.nickname,
                avatar: this.avatar,
            };
            if (this.password) {
                updatedInfo.password = this.password;  // 只有当用户输入密码时才更新密码
            }
            this.$store.dispatch('updateUserInfo', {
                userId: this.user.id,
                updatedInfo
            }).then(() => {
                alert('用户信息已成功更新.');
                this.$router.push('/profile'); // 更新成功后导航回个人资料页面或其他页面
            }).catch(error => {
                console.error('更新用户信息失败:', error);
                alert('更新用户信息失败，请稍后再试。');
            });
        },
        handleAvatarChange(event) {
            const file = event.target.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = () => {
                    this.avatar = reader.result;
                };
                reader.readAsDataURL(file);
            } else {
                alert('请选择一个图像文件。');
            }
        }
    }
};
</script>

<style scoped>
.edit-profile-container {
    width: 598px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
    padding: 40px;
}
#edpf {
    font-size: 40px;
}
.edit-profile-form h1 {
    font-size: 24px;
    color: #1da1f2;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 20px;
    text-align: left;
}

.form-group label {
    font-weight: 500;
    display: block;
    margin-bottom: 5px;
    color: #555;
}

.form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    font-size: 16px;
    box-sizing: border-box;
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

.avatar-preview {
    margin-top: 10px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.input-hint {
    font-size: 12px;
    color: #888;
    margin-top: 5px;
}

.disabled-input {
    background-color: #f9f9f9;
    cursor: not-allowed;
}

.unloginn{
    width: 598px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
    padding: 40px;
}

.unlogin{
    margin-top: 200px;
    text-align: center;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .edit-profile-container {
        width: 90%;
        padding: 20px;
    }
}
</style>
