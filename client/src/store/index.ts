import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
  count: number,
  formData: {
    username: string
    password: string
    email: string
  }
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state() {
    return {
      count: 0,
      formData: {
        username: '',
        password: '',
        email: '',
      }
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    setFormData(state, newFormData) {
      state.formData = newFormData;
    }
  },
  actions: {
    updateFormData({ commit }, newFormData) {
      commit('setFormData', newFormData);
    }
  }
})