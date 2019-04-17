import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getPeople } from "../actions";

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    if (this.props.fetching) {
      <p>Loading...</p>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.characters,
  fetching: state.fetching,
})


export default connect(
  mapStateToProps, 
    { getPeople } 
)(CharacterListView);
