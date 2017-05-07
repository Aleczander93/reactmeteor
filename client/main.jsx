import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from '../imports/ui/app.jsx';
import New from '../imports/ui/new.jsx';
import Lost from '../imports/ui/lost.jsx';


injectTapEventPlugin();

Meteor.startup(() => {
  render((
      <Router>
        <div>
          <Route exact path="/" component={App}/>
          <Route path="/new" component={New}/>
        </div>
      </Router>
  ), document.getElementById('render-target'));
});
