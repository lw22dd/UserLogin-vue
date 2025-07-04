<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import UserApi from '../api/api'
import HelloWorld from '../components/HelloWorld.vue'
import { useUserStore } from '../stores/userStore'

const router = useRouter()
const email = ref('')
const password = ref('')
const username = ref('')
const error = ref('')
const isRegister = ref(false)

const userStore = useUserStore()

const login = async () => {
    error.value = ''
    try {
        const res = await UserApi.login(email.value, password.value)
        if (res.code === 200) {
            userStore.setLogin(true)
            userStore.setUserInfo({ name: "用户名", email: email.value })
            router.push('/welcome')
        } else {
            error.value = res.msg
        }
    } catch (e) {
        error.value = '登录失败'
    }
}

const register = async () => {
    error.value = ''
    try {
        const res = await UserApi.register({
            name: username.value,
            password: password.value,
            email: email.value,
        })
        if (res.code === 200) {
            isRegister.value = false
            error.value = '注册成功，请登录'
        } else {
            error.value = res.msg
        }
    } catch (e) {
        error.value = '注册失败'
    }
}

const logout = () => {
    userStore.logout()
    router.push('/login')
}
</script>
<template>
    <div v-if="!userStore.isLogin">
        <div v-if="!isRegister" class="login-container">
            <h2 class="title">用户登录</h2>
            <input v-model="email" placeholder="邮箱" class="input-field" />
            <input v-model="password" type="password" placeholder="密码" class="input-field" />
            <button @click="login" class="btn login-btn">登录</button>
            <button @click="isRegister = true" class="btn">注册</button>
            <div v-if="error" class="error-message">{{ error }}</div>
        </div>
        <div v-else class="login-container">
            <h2 class="title">用户注册</h2>
            <input v-model="username" placeholder="用户名" class="input-field" />
            <input v-model="email" placeholder="邮箱" class="input-field" />
            <input v-model="password" type="password" placeholder="密码" class="input-field" />
            <button @click="register" class="btn login-btn">注册</button>
            <button @click="isRegister = false" class="btn">返回登录</button>
            <div v-if="error" class="error-message">{{ error }}</div>
        </div>
    </div>
    <div v-else class="welcome-container">
        <div class="logo-group">
            <a href="https://vite.dev" target="_blank">
                <img src="/vite.svg" alt="Vite logo" class="logo" />
            </a>
            <a href="https://vuejs.org/" target="_blank">
                <img src="../assets/vue.svg" alt="Vue logo" class="logo vue" />
            </a>
        </div>
        <HelloWorld msg="Welcome!" />
        <button @click="logout" class="btn logout-btn">退出登录</button>
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

<style scoped>


.title {
	font-size: 1.5rem;
	font-weight: bold;
	margin-bottom: 1rem;
}

.input-field {
	width: 100%;
	padding: 0.75rem 1rem;
	margin: 0.5rem 0;
	border: 1px solid #d1d5db;
	border-radius: 6px;
	font-size: 1rem;
	transition: border-color 0.3s ease;
}

.input-field:focus {
	outline: none;
	border-color: #646cff;
}

.btn {
	margin-top: 1rem;
	padding: 0.75rem 1.5rem;
	width: 100%;
	border: none;
	border-radius: 6px;
	font-size: 1rem;
	font-weight: bold;
	cursor: pointer;
	transition: all 0.3s ease;
}

.login-btn {
	background-color: #646cff;
	color: white;
}

.logout-btn {
	background-color: #ef4444;
	color: white;
}

.btn:hover {
	opacity: 0.9;
}

.error-message {
	color: #ef4444;
	margin-top: 0.5rem;
}

.logo-group {
	display: flex;
	justify-content: center;
	gap: 2rem;
	margin-bottom: 2rem;
}

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