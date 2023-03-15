// eslint-disable-next-line import/no-extraneous-dependencies
import Joi from "joi";

export const UserSpec = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const UserCredentialsSpec = {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  };

  export const PlaceSpec = {
    title: Joi.string().required(),
    category: Joi.string().required(),
    description: Joi.string().allow("").optional(),
  };
  
  export const PlacemarkSpec = {
    title: Joi.string().required(),
  };