import { db } from "../models/db.js";
import { PlaceSpec } from "../models/joi-schemas.js";

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
    validate: {
        payload: PlaceSpec,
        options: { abortEarly: false },
        failAction: function (request, h, error) {
          return h.view("placemark-view", { title: "Add place error", errors: error.details }).takeover().code(400);
        },
      },
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      const newPlace = {
        title: request.payload.title,
        category: request.payload.category,
        longitude: request.payload.longitude,
        latitude: request.payload.latitude,
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
