import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideMessage } from '../../actions/message';

import './message.css';

class Message extends Component {
  componentDidUpdate() {
    if (this.props.messageText) {
      setTimeout(() => {
        this.props.actions.hideMessage();
      }, 2000);
    }
  }

  render() {
    const text = this.props.messageText;
    if (text) {
      return (
        <div className = 'message'>
          <span>{this.props.messageText}</span>
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps(state, ownprops) {
  const messageText = state.getIn(['app', 'message', 'text']);

  return {
    messageText
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ hideMessage }, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Message);
