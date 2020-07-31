module.exports = {


  friendlyName: 'View available locations',


  description: 'Display "Available locations" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/locations/available-locations'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
