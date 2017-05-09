import {meteor} from 'meteor/meteor';
import { Players } from '../imports/api/player.js';

Meteor.methods({
  insertPlayer(player) {
    Players.insert(player);
  }
});
