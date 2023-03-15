import { v4 } from "uuid";

let places = [];

export const placeMemStore = {
  async getAllplaces() {
    return places;
  },

  async addplace(placemarkId, place) {
    place._id = v4();
    place.placemarkid = placemarkId;
    places.push(place);
    return place;
  },

  async getplacesByplacemarkId(id) {
    return places.filter((place) => place.placemarkid === id);
  },

  async getplaceById(id) {
    return places.find((place) => place._id === id);
  },

  async getplacemarkplaces(placemarkId) {
    return places.filter((place) => place.placemarkid === placemarkId);
  },

  async deleteplace(id) {
    const index = places.findIndex((place) => place._id === id);
    places.splice(index, 1);
  },

  async deleteAllplaces() {
    places = [];
  },

  async updateplace(place, updatedplace) {
    place.title = updatedplace.title;
    place.category = updatedplace.category;
    place.description = updatedplace.description;
  },
};
