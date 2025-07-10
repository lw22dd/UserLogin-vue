# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

掌握基本的go语言
使用vue3 + gin + gorm + vite 写一个最基本的用户登陆注册流程，实现

1.支持邮箱和密码的登录

2.需要前后端分离

3.登陆成功后可以退出

整体架构是一个user表单的CURD，这里偏向增查

isLogin状态变量记录两个状态：登录前（登录页面）登陆后（welcome）退出（登录页面）

登录界面设计：访问router根页面检查状态变量，未登录重定向进入登录

登录按钮绑定login函数，调用Axios请求后端的API，例如：
```
public static async login(username: string, password: string): Promise<Result<Tokens | null>> {
        return await Axios.post('/user/login', { username, password });
    }

    public static async register(user: User): Promise<Result<Tokens | null>> {
        return await Axios.post('/user/register', user);
    }
```
