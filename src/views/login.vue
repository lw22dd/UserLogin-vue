<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import UserApi from '../api/api'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')
const isLogin = ref(false)

const login = async () => {
  error.value = ''
  try {
    const res = await UserApi.login(email.value, password.value)
    if (res.code === 200) {
      isLogin.value = true
      router.push('/welcome')
    } else {
      error.value = res.msg
    }
  } catch (e) {
    error.value = '登录失败'
  }
}

const logout = () => {
  isLogin.value = false
  router.push('/login')
}
</script>

<template>
  <div v-if="!isLogin">
    <h2>用户登录</h2>
    <input v-model="email" placeholder="邮箱" />
    <input v-model="password" type="password" placeholder="密码" />
    <button @click="login">登录</button>
    <div style="color:red">{{ error }}</div>
  </div>
  <div v-else>
    <h2>Welcome!</h2>
    <button @click="logout">退出登录</button>
  </div>
</template>