import { db } from "../models/db.js";

export const placemarkController = {
  index: {
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      const viewData = {
        title: "Placemark",
        placemark: placemark,
      };
      return h.view("placemark-view", viewData);
    },
  },

  addPlace: {
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      const newPlace = {
        title: request.payload.title,
        category: request.payload.category,
        description: request.payload.description,
      };
      await db.placeStore.addPlace(placemark._id, newPlace);
      return h.redirect(`/placemark/${placemark._id}`);
    },
  },

  deletePlace: {
    handler: async function(request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      await db.placeStore.deletePlace(request.params.placeid);
      return h.redirect(`/placemark/${placemark._id}`);
    },
  },

};
