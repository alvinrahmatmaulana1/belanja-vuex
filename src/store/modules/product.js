import axios from "axios";

const produk = {
  namespaced: true,
  state: {
    produkData: [],
  },
  getters: {
    getProduk: (state) => state.produkData,
    //
    getProdukById: (state) => (produkId) => {
        console.log("ProdukId:", produkId);
        console.log("ProdukData:", state.produkData);
        const produk = state.produkData.find((p) => p.id == produkId);
        console.log("Produk:", produk);
        return produk;
  },
},
  actions: {
    async fetchProduk({ commit }) {
      try {
        const data = await axios.get("https://ecommerce.olipiskandar.com/api/v1/product/search");
        commit("SET_PRODUK", data.data['products']['data']);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    //
    async fetchSingleProduk({ commit }, produkId){
        try{
            const response = await axios.get(
                `https://ecommerce.olipiskandar.com/api/v1/product/details/${produkId}`
            );
            commit("SET_SINGLE_PRODUK", response.data['products']);
        }catch (error) {
            alert(error);
            console.log(error);
        }
    },
  },
  mutations: {
    SET_PRODUK(state, produk) {
      state.produkData = produk;
    },
    SET_SINGLE_PRODUK(state, produk) {
        state.singleProduk = produk;
      },
  },
};

export default produk;