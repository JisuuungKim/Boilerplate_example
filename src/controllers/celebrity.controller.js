const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { celebrityService } = require('../services');

const createCelebrity = catchAsync(async (req, res) => {
  const celebrity = await celebrityService.createCelebrity(req.body);
  res.status(httpStatus.CREATED).send(celebrity);
});

const getCelebrities = catchAsync(async (req, res) => {
  const celebrity = await celebrityService.getCelebrities();
  res.status(httpStatus.OK).send(celebrity);
});

const getCelebrityByName = catchAsync(async (req, res) => {
  const celebrity = await celebrityService.getCelebrityByName(req.params.name);
  if (!celebrity) throw new ApiError(httpStatus.NOT_FOUND, 'celebrity not found');
  res.status(httpStatus.OK).send(celebrity);
});

const updateCelebrityById = catchAsync(async (req, res) => {
  const celebrity = await celebrityService.updateCelebrityById(req.params.id, req.body);
  res.status(httpStatus.OK).send(celebrity);
});

module.exports = {
  createCelebrity,
  getCelebrities,
  getCelebrityByName,
  updateCelebrityById,
};
