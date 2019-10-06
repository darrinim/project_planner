const axios = require('axios');

// const BASE_URL = 'http://localhost:3001/';
const BASE_URL = 'https://ruksak-rad.herokuapp.com/';


const api = axios.create({ baseURL: BASE_URL });

export const oneLocation = async (location) => {
  const loc = await api.get(`/location/${location}`);
  return loc.data;
}

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

export const registerUser = async (resgisterData) => {
  const resp = await api.post(`/auth/register`, resgisterData);
  return resp.data;
};
//put
export const tripGear = async (tripId, gearId) => {
  const resp = await api.put(`/trip/${tripId}/gear/${gearId}`);
  return resp.data;
};

export const getTg = async (tripId, gearId) => {
  const resp = await api.get(`/trip/${tripId}/gear`);
  return resp.data;
};

export const getTrip = async (tripId) => {
  const resp = await api.get(`/trip/${tripId}`);
  return resp.data;
};

export const allTrips = async () => {
  const resp = await api.get(`/trip`);
  return resp.data;
}

export const oneTrip = async (name) => {
  const resp = await api.get(`/trip/name/${name}`)
  return resp.data;
}

export const userTrips = async (userid, tripid) => {
  const resp = await api.put(`/user/${userid}/trip/${tripid}`);
  return resp.data;
};

export const makeTrip = async (tripData) => {
  const resp = await api.post('/trip', tripData);
  return resp.data;
};

export const deleteTrip = async (tripid) => {
    console.log('delete')
  const resp = await api.delete(`/trip/${tripid}`);
  return resp.data;
}

export const verifyUser = async () => {
  const token = localStorage.getItem("jwt")
  if(token) {
    const resp = await api.get(`/auth/verify`, { headers: { Authorization: `Bearer ${token}` } });
    return resp.data;
  } else {
    return false;
  }
}
