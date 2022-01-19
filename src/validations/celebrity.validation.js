const Joi = require('joi');

const create = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    area: Joi.string().required(),
  }),
};

const getCelebrityById = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const updateCelebrity = {
  body: Joi.object().keys({
    name: Joi.string(),
    area: Joi.string(),
  }),
  params: Joi.object().keys({
    _id: Joi.string().required(),
  }),
};

module.exports = {
  create,
  getCelebrityById,
  updateCelebrity,
};
