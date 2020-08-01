/**
 * Location.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    address: {
      type: 'string',
      example: '80 Wilson St, Burnie',
      description: 'The full address of the location, including suburb for accuracy',
    },
    size: {
      type: 'string',
      example: 'Large',
      description: 'The size of location, large, medium, small',
    },
    type: {
      type: 'string',
      example: 'Wall',
      description: 'The type of location, eg: wall, fence, footpath',
    },
    condition: {
      type: 'string',
      example: 'Wall has old paint on it',
      description: 'The condition of the surface',
    },
    access: {
      type: 'string',
      example: 'Down the alley',
      description: 'How and what type of access there is to the location',
    },
    image: {
      type: 'string',
      description: '',
    },
    email: {
      type: 'string',
      example: 'name@example.com',
      description: '',
    },
    phone: {
      type: 'string',
      example: '03 6430 774',
      description: '',
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

