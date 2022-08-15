import LandVehicle from './land-vehicle.js';
import AirVehicle from './air-vehicle.js';
import WaterVehicle from './water-vehicle.js';

const vehicles: (LandVehicle | AirVehicle | WaterVehicle)[] = [
  new LandVehicle({
    tires: ['GoodYear R20 m&s']
  }, {
    brand: 'Subaru',
    model: 'Sultan',
    year: 2004,
  }),
  new AirVehicle({
    maxAltitude: 5000,
  }, {
    brand: 'LongRanger',
    model: 'Maverick',
    year: 2004,
  }),
  new WaterVehicle({
    maxDepth: 70,
  }, {
    brand: 'Cuban',
    model: 'Jetmax',
    year: 2004,
  }),
];

vehicles.forEach(v => console.log(v.toString()));