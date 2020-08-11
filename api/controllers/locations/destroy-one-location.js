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

    forbidden: {
      description: 'The user making this request doesn\'t have the permissions to delete this location',
      responseType: 'forbidden' // res.forbidden
    }

  },

  fn: async function ({id}) {

    var locationToDestroy = await Location.findOne({ id });
    // Ensure the location exists.
    if(!locationToDestroy) {
      throw 'notFound';
    }
    // Verify permissions.
    if(locationToDestroy.owner !== this.req.me.id) {
      throw 'forbidden';
    }

    // Archive the record.
    await Location.archiveOne({ id });

  }

};
