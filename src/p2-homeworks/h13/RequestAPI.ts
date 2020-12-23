import axios from 'axios';

type TestResponseType = {
    errorText: string
    info: string
}
export const requestAPI = {
    authTest(checked: boolean) {
        return axios.post<TestResponseType>(`https://neko-cafe-back.herokuapp.com/auth/test`, {success: checked})
    }
}