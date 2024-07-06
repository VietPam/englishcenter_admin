import API from "./API";
export const login = async (data) => {
        return await API().post('/admin/login', data)
}

export const overview = async () => {
        const response =  await API().get('/admin/overview')
        console.log("hello")
        return response.data;
}
