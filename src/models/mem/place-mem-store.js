import { v4 } from "uuid";

let places = [];

export const placeMemStore = {
  async getAllPlaces() {
    return places;
  },

  async addPlace(placemarkId, place) {
    place._id = v4();
    place.placemarkid = placemarkId;
    places.push(place);
    return place;
  },

  async getPlacesByPlacemarkId(id) {
    return places.filter((place) => place.placemarkid === id);
  },

  async getPlaceById(id) {
    return places.find((place) => place._id === id);
  },

  async getPlacemarkPlaces(placemarkId) {
    return places.filter((place) => place.placemarkid === placemarkId);
  },

  async deletePlace(id) {
    const index = places.findIndex((place) => place._id === id);
    places.splice(index, 1);
  },

  async deleteAllPlaces() {
    places = [];
  },

  async updatePlace(place, updatedPlace) {
    place.title = updatedPlace.title;
    place.category = updatedPlace.category;
    place.description = updatedPlace.description;
  },
};
