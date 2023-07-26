const Car = require('./cars-model');

const checkCarId = async (req, res, next) => {
  try {
    const car = await Car.getById(req.params.id);
    if (!car) {
      next({ status: 404, message: `car with id ${req.params.id} is not found` });
    } else {
      req.car = car;
      next();
    }
  } catch (err) {
    next(err);
}};

const checkCarPayload = (req, res, next) => {
  // const error = { status: 400 }; 
  //   || !make || !model || !mileage) {
    //   next({ status: 400, message: ` is missing`});
    // }

  const { vin, make, model, mileage } = req.body;
  if (!vin) return next(
    { 
      status: 400, 
      message: 'vin is missing' 
    }); 
  if (!make) return next(
    { 
      status: 400, 
      message: 'make is missing' 
    }); 
  if (!model) return next(
    { 
      status: 400, 
      message: 'model is missing' 
    }); 
  if (!mileage) return next(
    { 
      status: 400, 
      message: 'mileage is missing' 
    });
    next();
};

const checkVinNumberValid = (req, res, next) => {
  next();
};

const checkVinNumberUnique = (req, res, next) => {
  next();
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
};