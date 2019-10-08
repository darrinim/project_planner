const axios = require('axios');

const BASE_URL = 'http://localhost:3001/';

const api = axios.create({ baseURL: BASE_URL });

export const makeProject = async (project, userId) => {
  const resp = await api.post(`/project/user/${userId}`, project);
  return resp.data;
};

export const getProjects = async (project, userId) => {
  const resp = await api.get(`/project/user/${userId}`, project);
  return resp.data;
};

export const deleteProject = async (projectId) => {
    console.log('delete')
  const resp = await api.delete(`/project/user/${projectId}`);
  return resp.data;
}

export const editProjects = async (projectId) => {
  const resp = await api.put(`/projects/${projectId}`);
  return resp.data
}


export const tripGear = async (tripId, gearId) => {
  const resp = await api.put(`/trip/${tripId}/gear/${gearId}`);
  return resp.data;
};


export const allGear = async () => {
  const gear = await api.get(`/gear`);
  return gear.data;
};

export const oneGear = async (gearId) => {
  const gear = await api.get(`/gear/${gearId}`);
  return gear.data;
};

export const getGearName = async (gearName) => {
  const gear = await api.get(`/gear/name/${gearName}`);
  return gear.data;
};

export const putGear = async (item,gearId) => {
  const gear = await api.put(`/gear/${gearId}`, item, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }, item);
  return gear.data;
};

export const createGear = async (item) => {
  let gear = await api.post(`/gear`, item, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }, item);
  return gear.data;
};

export const deleteGear = async (gearId) => {
  try {
    const gear = await api.delete(`/gear/${gearId}`, null, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } });
    return gear.data;
    } catch (e) {
      console.log(e.message);
    };
};


export const getUser = async (userid) => {
  const resp = await api.get(`/auth${userid}`);
  return resp.data;
}

export const loginUser = async (loginData) => {
  console.log(api);
  const resp = await api.post(`/auth/login`, loginData);
  return resp.data
};

export const registerUser = async (registerData) => {
  const resp = await api.post(`/auth/register`, registerData);
  return resp.data;
};
//put



export const makeTrip = async (tripData) => {
  const resp = await api.post('/trip', tripData);
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
