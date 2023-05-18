export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret"
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret"
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret"
    }
  },
  placemarks: {
    _model: "Placemark",
    beach: {
      title: "Beach Favourites",
      userid: "->users.bart"
    }
  },
places: {
  _model: "Place",
  place_1: {
    title: "Duncannon Strand",
    category: "Beach",
    latitude: 52.220,
    longitude: -6.933,    
    description: "1km sandy beach",  
    placemarkid: "->placemarks.beach"
  }
}
};
