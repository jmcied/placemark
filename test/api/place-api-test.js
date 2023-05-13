import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-service.js";
import { maggie, john, testPlacemarks, testPlaces, forest } from "../fixtures.js";

suite("Place API tests", () => {
  let user = null;
  let hike = null;

  setup(async () => {
    await placemarkService.deleteAllPlacemarks();
    await placemarkService.deleteAllUsers();
    await placemarkService.deleteAllPlaces();
    user = await placemarkService.createUser(maggie);
    john.userid = user._id;
    hike = await placemarkService.createPlacemark(john);
  });

  teardown(async () => {});

  test("create Multiple places", async () => {
    for (let i = 0; i < testPlaces.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createPlace(hike._id, testPlaces[i]);
    }
    const returnedPlaces = await placemarkService.getAllPlaces();
    assert.equal(returnedPlaces.length, testPlaces.length);
    for (let i = 0; i < returnedPlaces.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const place = await placemarkService.getPlace(returnedPlaces[i]._id);
      assertSubset(place, returnedPlaces[i]);
    }
  });

  test("Delete PlaceApi", async () => {
    for (let i = 0; i < testPlaces.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createPlace(hike._id, testPlaces[i]);
    }
    let returnedPlaces = await placemarkService.getAllPlaces();
    assert.equal(returnedPlaces.length, testPlaces.length);
    for (let i = 0; i < returnedPlaces.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const place = await placemarkService.deletePlace(returnedPlaces[i]._id);
    }
    returnedPlaces = await placemarkService.getAllPlaces();
    assert.equal(returnedPlaces.length, 0);
  });

  test("denormalised placemark", async () => {
    for (let i = 0; i < testPlaces.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createPlace(hike._id, testPlaces[i]);
    }
    const returnedPlacemark = await placemarkService.getPlacemark(hike._id);
    assert.equal(returnedPlacemark.places.length, testPlaces.length);
    for (let i = 0; i < testPlaces.length; i += 1) {
      assertSubset(testPlaces[i], returnedPlacemark.places[i]);
    }
  });
});
