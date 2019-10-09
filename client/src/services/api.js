const axios = require('axios');

const BASE_URL = 'http://localhost:3001/';
const api = axios.create({ baseURL: BASE_URL });

/* ==============================================
=================CRUD FUNCTIONS=================
============================================== */

export const makeProject = async (project, userId) => {
  const resp = await api.post(`/project/user/${userId}`, project);
  return resp.data;
};

export const getProjects = async (project, userId) => {
  const resp = await api.get(`/project/user/${userId}`, project);
  return resp.data;
};

export const deleteProject = async (projectId) => {
  const resp = await api.delete(`/project/user/${projectId}`);
  return resp.data;
}


export const editProjects = async (data, projectId) => {
  try {
    const project = await axios.put(`/projects/${projectId}`, data);
    return project.data
  } catch (e) {
    console.log(e.message);
  }
};

/* ==============================================
=================AUTH FUNCTIONS=================
============================================== */

export const getUser = async (userid) => {
  const resp = await api.get(`/auth${userid}`);
  return resp.data;
}

export const loginUser = async (loginData) => {
  const resp = await api.post(`/auth/login`, loginData);
  return resp.data
};

export const registerUser = async (registerData) => {
  const resp = await api.post(`/auth/register`, registerData);
  return resp.data;
};

export const verifyUser = async () => {
  const token = localStorage.getItem("jwt")
  if(token) {
    const resp = await api.get(`/auth/verify`, { headers: { Authorization: `Bearer ${token}` } });
    return resp.data;
  } else {
    return false;
  }
}
