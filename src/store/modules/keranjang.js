import axios from "axios";

const keranjang = {
    namespaced: true,
    state: {
        keranjang: [],
        address: [],
    },
    getters: {
        getKeranjang: (state) => state.keranjang,
        getAddress: (state) => state.address
    },
    actions: {
        async fetchKeranjang({ commit }) {
            try {
                // const token = localStorage.getItem('token');
                const dataKeranjang = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/carts", {
                    "temp_user_id": null
                }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }

                );
                console.log(dataKeranjang.data.cart_items)
                commit("SET_KERANJANG", dataKeranjang.data.cart_items.data);

            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

        async editKeranjang({ commit, dispatch }, param) {
            try {
                // const token = localStorage.getItem('token');
                const editKeranjang = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/carts/change-quantity", 
                    param
                , {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }

                );
                console.log(editKeranjang.data.message)
               
                // commit("SET_KERANJANG", deleteKeranjang.data.cart_items.data);
                
            } catch (error) {
                // alert(error);
                console.log(error);
            } finally {
                dispatch('keranjang/fetchKeranjang', null, { root: true })
            }
        },

        async deleteKeranjang({ commit, dispatch }, keranjangId) {
            try {
                // const token = localStorage.getItem('token');
                const deleteKeranjang = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/carts/destroy", {
                    "cart_id": keranjangId,
                    "temp_user_id": null,
                }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }

                );
                console.log(deleteKeranjang.data)
                // commit("SET_KERANJANG", deleteKeranjang.data.cart_items.data);
                alert('Berhasil Hapus data')
            } catch (error) {
                // alert(error);
                console.log(error);
            } finally {
                dispatch('keranjang/fetchKeranjang', null, { root: true })
            }
        },
        async fetchAddress({ commit }) {
            try {
                // const token = localStorage.getItem('token');
                const getAddress = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/user/addresses",{
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                console.log(getAddress.data.data)
                commit("SET_ADDRESS", getAddress.data.data);

            } catch (error) {
                alert(error);
                console.log(error);
            }
        },


    },
    mutations: {
        SET_KERANJANG(state, keranjang) {
            state.keranjang = keranjang;
        },
        SET_ADDRESS(state, address) {
            state.address = address;
        },
        // DELETE_KERANJANG(state, keranjang) {
        //     state.keranjang = keranjang;
        // }
    },
};
export default keranjang;