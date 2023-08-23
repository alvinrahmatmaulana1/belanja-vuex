import axios from "axios";

const category = {
    namespaced: true,
    state: {
        category: [],
    },
    getters: {
        getcategory: (state) => state.category
    },
    actions: {
        async fetchCategory({ commit }) {
            try {
                const cate = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/all-categories"
                );
                commit("SET_CATEGORY", cate.data.data.slice(0,9));
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_CATEGORY(state, category) {
            state.category = category;
        },
    },
};
export default category;