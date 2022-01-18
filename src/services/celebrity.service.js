const httpStatus = require('http-status');
const { Celebrity } = require('../models');
const ApiError = require('../utils/ApiError');

const createCelebrity = async (name) => {
  if (!name) {
    throw new ApiError(httpStatus.NOT_FOUND, 'not found');
  } // todo: 에러를 잡는곳이 여기가 맞나요(에러잡는방법)
  return Celebrity.create(name);
};

const getCelebrities = async () => {
  return Celebrity.find();
};

const getCelebrityByName = async (name) => {
  return Celebrity.findOne({ name });
};

const updateCelebrityById = async (id, body) => {
  return Celebrity.updateOne({ id }, { $set: body });
};

module.exports = {
  createCelebrity,
  getCelebrityByName,
  getCelebrities,
  updateCelebrityById,
};
