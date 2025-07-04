import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const isLogin = ref(false)
  const userInfo = ref<{ name?: string; email?: string }>({})

  function setLogin(status: boolean) {
    isLogin.value = status
  }

  function setUserInfo(info: { name?: string; email?: string }) {
    userInfo.value = info
  }

  function logout() {
    isLogin.value = false
    userInfo.value = {}
  }

  return { isLogin, userInfo, setLogin, setUserInfo, logout }
})