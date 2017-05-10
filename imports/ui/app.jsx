import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import createReactClass from 'create-react-class';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

// database - collection
import { Players } from '../api/player'

import TeamList from './team-list.jsx';
import TeamStats from './team-stats.jsx';
import Player from './player';
import AccountsWrapper from './AccountsWrapper.jsx';
import Edit from './editPlayer.jsx';

const tempPlayer = {
  name: "Temporary player",
  team: "Lynda",
  ballManipulation: 1,
  kickingAbilities: 3,
  passingAbilities: 3,
  duelTackling: 1,
  fieldCoverage: 2,
  blockingAbilities: 2,
  gameStrategy: 1,
  playmakingRisks: 3,
  notes: "This is a temporary player",
}

export class App extends PureComponent {
constructor(props) {
  super(props);

  //setting up the state
  this.state = {
  currentPlayer: tempPlayer,
  showEditPlayer: false,
 };
  this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  this.showEditForm = this.showEditForm.bind(this);
  this.showTeamStats = this.showTeamStats.bind(this);
}

  renderPlayers() {
    return this.props.players.map((player) => (
      <TeamList key={player._id} player={player} updateCurrentPlayer={this.updateCurrentPlayer}/>
    ));
  }

  updateCurrentPlayer(player) {
    this.setState({
      currentPlayer: player,
    });
  }

  showEditForm() {
    this.setState({
      showEditPlayer: true,
    });
  }

  showTeamStats(){
    this.setState({
      showEditPlayer: false,
    });
  }

  showForm(){
    if(this.state.showEditPlayer === true){
      return( <Edit currentPlayer={this.state.currentPlayer}
      showTeamStats={this.showTeamStats}/>);
    } else {
      return ( <TeamStats players={this.props.players}/>);
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">

          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}
            style={{backgroundColor: '#027780'}}>
              <AccountsWrapper />
          </AppBar>

          <div className="row">
            <div className="col s12 m7"><Player player={this.state.currentPlayer} showEditForm={this.showEditForm} /></div>
            <div className="col s12 m5">
              <h1>Team List</h1><Link to='/new' className="waves-effect waves-light btn light-blue darken-3">Add player</Link>
              <Divider/>
                <List>
                  {this.renderPlayers()}
                </List>
              <Divider/>
            </div>

          </div>
          <div className="row">
            <div className="col s12">
              <br/>
              <Divider/>
              {this.showForm()}
              <Divider/>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  players: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('players');

  // const user = Meteor.userId()

  return {
    players: Players.find({}, {sort: { name: 1 }}).fetch(),
  };
}, App);
