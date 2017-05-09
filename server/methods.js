import {meteor} from 'meteor/meteor';
import { Players } from '../imports/api/player.js';

Meteor.methods({
  insertPlayer(player) {
    Players.insert(player);
  },

  updatePlayer(player) {
    Players.update(player._id,
    { $set: player });
  },

  deletePlayer(playerId){
    Players.remove(playerId);
  }
});
