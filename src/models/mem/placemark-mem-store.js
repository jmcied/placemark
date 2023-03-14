/* eslint-disable import/no-extraneous-dependencies */
import { v4 } from "uuid";

let placemarks = [];

export const placemarkMemStore = {
  async getAllplacemarks() {
    return placemarks;
  },

  async addplacemark(placemark) {
    placemark._id = v4();
    placemarks.push(placemark);
    return placemark
;
  },

  async getplacemarkById(id) {
    return placemarks.find((placemark) => placemark._id === id);
  },

  async deleteplacemarkById(id) {
    const index = placemarks.findIndex((placemark) => placemark._id === id);
    placemarks.splice(index, 1);
  },

  async deleteAllplacemarks() {
    placemarks = [];
  },
};
