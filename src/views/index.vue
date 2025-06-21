<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import UserApi from '../api/api'
import HelloWorld from '../components/HelloWorld.vue'

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
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Welcome" />
    <button @click="logout">退出登录</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>