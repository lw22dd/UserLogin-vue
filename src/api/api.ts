import type { Result } from "../model/result";
import type { User } from "../model/user";
import Axios from "../utils/axios";

export default class UserApi {
    public static async login(email: string, password: string): Promise<Result<string | null>> {
        return await Axios.post('/user/login', { email, password });
    }

    public static async register(user: User): Promise<Result<string | null>> {
        return await Axios.post('/user/register', user);
    }

    public static async logout(): Promise<Result<boolean>> {
        return await Axios.post('/user/logout');
    }
    public static async test(str?: string ): Promise<Result<string | null>> {
        return await Axios.get('/user/test', { params: { str } });
    }
}