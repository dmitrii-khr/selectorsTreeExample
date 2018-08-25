import React from 'react';
import { createDevTools } from 'redux-devtools';
// import LogMonitor from 'redux-devtools-log-monitor';
import Inspector from 'redux-devtools-inspector';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q' >
    <Inspector />
  </DockMonitor>
);
