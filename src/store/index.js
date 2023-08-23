import { createStore } from 'vuex';
import auth from './modules/auth';
import product from './modules/product'
import category from './modules/category';
import brands from './modules/brands';
import user from './modules/users';


const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    auth,
    product,
    category,
    brands,
    user
    
  },
});

export default store;