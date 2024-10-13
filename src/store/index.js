import {createStore} from 'vuex';

export default createStore({
    state: {
        isLoggedIn: false, // state
        user: null, // user data
        users: [] // all users
    },
    mutations: {
        // 设置用户登录状态和用户信息
        login(state, user) {
            state.isLoggedIn = true;
            state.user = user;
        },
        // 设置用户登出状态
        logout(state) {
            state.isLoggedIn = false;
            state.user = null;
        },
        setUsers(state,users){
            state.users=users;
        },
        addUser(state,newUser){
            state.users.push(newUser); //for demo, actually need back-end process
        },
        updateUser(state, updatedInfo) {
            Object.assign(state.user, updatedInfo);
        },
    },
    actions: {
        // 可以在这里定义其他异步操作，例如向服务器发送登录请求等
         //load all users data
        loadUsers({commit}){
            fetch('/users.json')
                .then(response => response.json())
                .then(data =>{
                    commit('setUsers',data);
                })
                .catch(error => console.error(('error loading users:',error)) );
        },
        addUser({ commit }, newUser) {
            // 模拟添加新用户，实际中应通过后端API处理
            commit('addUser', newUser);
            return Promise.resolve();
        },
        updateUserInfo({ commit }, { userId, updatedInfo }) {
            // 模拟异步更新操作，实际应调用API
            commit('updateUser', updatedInfo);
            return Promise.resolve(); // 返回Promise以支持异步流
        }
    },
    getters: {
        // 可以在这里定义一些派生状态，例如获取当前用户信息等
        currentUser:state => state.user,
        allUsers:state =>state.users
    }
});
