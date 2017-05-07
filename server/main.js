import { Meteor } from 'meteor/meteor';
import {Players} from '../imports/api/player.js'

Meteor.startup(() => {
  Meteor.publish('players', function(){
    return Players.find({});
  })
});
