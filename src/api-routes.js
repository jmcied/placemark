import { userApi } from "./api/user-api.js";
import { placemarkApi } from "./api/placemark-api.js";
import { placeApi } from "./api/place-api.js";

export const apiRoutes = [
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "POST", path: "/api/placemarks", config: placemarkApi.create },
  { method: "DELETE", path: "/api/placemarks", config: placemarkApi.deleteAll },
  { method: "GET", path: "/api/placemarks", config: placemarkApi.find },
  { method: "GET", path: "/api/placemarks/{id}", config: placemarkApi.findOne },
  { method: "DELETE", path: "/api/placemarks/{id}", config: placemarkApi.deleteOne },

  { method: "GET", path: "/api/places", config: placeApi.find },
  { method: "GET", path: "/api/places/{id}", config: placeApi.findOne },
  { method: "POST", path: "/api/placemarks/{id}/places", config: placeApi.create },
  { method: "DELETE", path: "/api/places", config: placeApi.deleteAll },
  { method: "DELETE", path: "/api/places/{id}", config: placeApi.deleteOne },

];
