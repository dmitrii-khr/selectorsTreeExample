import React, { Component } from 'react';
import './score.css';
import { connect } from 'react-redux';

class Score extends Component {
  render() {
    const score = this.props.score;

    const scores = [];
    for (let i = 0; i < score; i++) {
      scores.push((<span key={i}>*</span>));
    }

    return (
      <div className = 'score'>
        <p>your score:</p>
        <div>
          { scores}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownprops) {
  const score = state.getIn(['poemScoring', 'score']);

  return {
    score
  };
}


export default connect(mapStateToProps)(Score);
