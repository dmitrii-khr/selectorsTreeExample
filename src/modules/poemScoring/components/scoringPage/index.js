import React, { Component } from 'react';
import Poem from '../poem';
import Score from '../score';

import './scoringPage.css';

class ScoringPage extends Component {
  render() {
    return (
      <div className='poemScoringPage'>
        <Poem />
        <Score/>
      </div>
    );
  }
}

export default ScoringPage;
