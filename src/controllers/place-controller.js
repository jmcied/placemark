import { PlaceSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";

export const placeController = {
  index: {
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlaylistById(request.params.id);
      const place = await db.placeStore.getPlaceById(request.params.placeid);
      const viewData = {
        title: "Edit Place",
        placemark: placemark,
        place: place,
      };
      return h.view("place-view", viewData);
    },
  },

  update: {
    validate: {
      payload: PlaceSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("place-view", { title: "Edit place error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const place = await db.placeStore.getPlaceById(request.params.placeid);
      const newPlace = {
        title: request.payload.title,
        category: request.payload.category,
        longitude: request.payload.longitude,
        latitude: request.payload.latitude,
        description: request.payload.description,
      };
      await db.placeStore.updatePlace(place, newPlace);
      return h.redirect(`/placemark/${request.params.id}`);
    },
  },
};
