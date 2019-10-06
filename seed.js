const { Gear, Location, Trip } = require('./model');

const seed = async () => {
  try {
    const location1 = await Location.create({ location: 'Bear Mountain' });
    const location2 = await Location.create({ location: 'Mountain Creek' });
    const location3 = await Location.create({ location: 'Catskills' });


    const hike = await Trip.create({ trip: 'Hiking' });
    const camp = await Trip.create({ trip: 'Camping' });
    const bike = await Trip.create({ trip: 'Biking' });

    const gear1 = await Gear.create({ gear: 'Tent' });
    const gear2 = await Gear.create({ gear: 'Sleeping Bag' });
    const gear3 = await Gear.create({ gear: 'Water' });
    const gear4 = await Gear.create({ gear: 'Backpack' });
    const gear5 = await Gear.create({ gear: 'Flashlight' });
    const gear6 = await Gear.create({ gear: 'Bike' });

    await hike.setGears([gear3, gear4, gear5]);
    await camp.setGears([gear1, gear2, gear3, gear4, gear5]);
    await bike.setGears([gear3, gear4, gear5, gear6]);

    await hike.setLocation(location1);
    await camp.setLocation(location2);
    await bike.setLocation(location3);
  } catch (e) {
    // eslint-disable-next-line
    console.log(e.message);
  } finally {
    process.exit();
  }
};


seed();
