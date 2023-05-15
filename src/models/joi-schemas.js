// eslint-disable-next-line import/no-extraneous-dependencies
import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  firstName: Joi.string().example("Homer").required(),
  lastName: Joi.string().example("Simpson").required(),
}).label("UserDetails");

export const UserSpecPlus = UserSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpec).label("UserArray");

  export const PlaceSpec = Joi.object()
  .keys({
    title: Joi.string().required(),
    category: Joi.string().required(),
    longitude: Joi.string().required(),
    latitude: Joi.string().required(),
    description: Joi.string().allow("").optional(),
  })
  .label("Place");
  
  export const PlaceSpecPlus = PlaceSpec.keys({
    _id: IdSpec,
    __v: Joi.number(),
  }).label("PlacePlus");
  
  export const PlaceArraySpec = Joi.array().items(PlaceSpecPlus).label("PlaceArray");

  export const PlacemarkSpec = Joi.object()
  .keys({
    title: Joi.string().required().example("Hook Hikes"),
    userid: IdSpec,
    places: PlaceArraySpec,
  })
  .label("Placemark");

export const PlacemarkSpecPlus = PlacemarkSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("PlacemarkPlus");

export const PlacemarkArraySpec = Joi.array().items(PlacemarkSpecPlus).label("PlacemarkArray");
