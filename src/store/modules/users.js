import axios from "axios";

const user = {
    namespaced: true,
    state: {
        users: [],
    },
    getters: {
        getUsers: (state) => state.users
    },
    actions: {
        async fetchUsers({ commit }) {
            try {
                const token = localStorage.getItem('token');
                const cate = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/user/info", {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );
                console.log(cate.data['user'])
                commit("SET_USERS", cate.data['user']);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
    },
};
export default user;