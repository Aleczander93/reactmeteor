import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import TeamList from './team-list.jsx';
import TeamStats from './team-stats.jsx';
import Player from './player';

export default class App extends Component {

constructor(props) {
  super(props);
  this.state = { players: [] };
}

componentWillMount() {
  this.setState({ players: [
    {
      _id:1,
      name: "Aaron Schwartz",
      ballManipulation: 2,
      kickingAbilities: 5,
      passingAbilities: 6,
      duelTackling: 3,
      fieldCoverage: 7,
      blockingAbiliteies: 5,
      gameStrategy: 4,
      playmakingRisks: 1,
    },
    {
      _id:2,
      name: "Thomas Echezabal",
      ballManipulation: 2,
      kickingAbilities: 5,
      passingAbilities: 6,
      duelTackling: 3,
      fieldCoverage: 7,
      blockingAbiliteies: 5,
      gameStrategy: 4,
      playmakingRisks: 1,
    },
    {
      _id:3,
      name: "Shandy Sulen",
      ballManipulation: 2,
      kickingAbilities: 5,
      passingAbilities: 6,
      duelTackling: 3,
      fieldCoverage: 7,
      blockingAbiliteies: 5,
      gameStrategy: 4,
      playmakingRisks: 1,
    }
  ]});
}

  renderPlayers() {
    return this.state.players.map((player) => (
      <TeamList key={player._id} player={player} />
    ))
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
          title="Soccer Application"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={false}/>
          <div className="row">
            <div className="col s12 m7"><Player /></div>
            <div className="col s12 m5">
              <h1>Team List</h1>
              <Divider/>
                <List>
                  {this.renderPlayers()}
                </List>
              <Divider/>
            </div>
            <div className="col s12 m5"><TeamStats /></div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
