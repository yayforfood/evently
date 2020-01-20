import axios from 'axios';
const api = axios.create({
  baseURL: "http://localhost:3000"
})

export const getUsers = async () => {
  const resp = await api.get('/user');
  return resp;
}
export const getEvents = async () => {
  const resp = await api.get('/event');
  return resp;

}

export const loginUser = async (loginData) => {
  console.log(loginData)
  const resp = await api.post('/user/login', loginData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;

}

export const registerUser = async (registerData) => {
  const resp = await api.post('user/register', registerData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  console.log(resp.data)
  return resp.data.user;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/user/verify');
    return resp.data;
  }
}
