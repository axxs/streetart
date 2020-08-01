module.exports = {


  friendlyName: 'View available locations',


  description: 'Display "Available locations" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/locations/available-locations'
    }

  },


  fn: async function () {
    // todo come back to this and only fetch things the current user is able to see
    var locations = await Location.find();
    return {locations};
  }


};
