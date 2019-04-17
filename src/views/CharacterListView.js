import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getPeople } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    if (this.props.fetching) {
      <h3>Loading...</h3>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );    
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching
})


export default connect(
  mapStateToProps, 
    { getPeople } 
)(CharacterListView);
