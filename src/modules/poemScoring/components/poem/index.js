import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions  from '../../actions/poem';
import selectors from '../../selectors';

class Poem extends Component {
  handleChange=(event) => {
    this.props.actions.poemTextChange(event.target.value);
  }

  handleNewPoem = () => {
    this.props.actions.newPoem();
  }

  render() {
    return (
      <div>
        <p>
          Type a poem:
        </p>
        <textarea
          rows='4'
          cols='50'
          value={this.props.text}
          onChange={this.handleChange}
        />
        <div>
          <br />
          <button onClick = {this.handleNewPoem}>New Poem</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownprops) {
  const text = selectors.flat.poemText(state) || '';

  return {
    text
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Poem);
