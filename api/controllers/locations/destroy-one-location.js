module.exports = {


  friendlyName: 'Destroy one location',


  description: 'Delete one location with the specified ID from the database.',


  inputs: {
    id: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {

    await Location.destroy({id: inputs.id });

    return;

  }


};
