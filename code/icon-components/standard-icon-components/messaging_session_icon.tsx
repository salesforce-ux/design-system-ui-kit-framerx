
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function messaging_session_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50 22c16.6 0 30 12.5 30.1 28 0 15.5-13.4 28-30 28-5.8 0-11.2-1.5-15.8-4.2-0.5-0.3-1.1-0.4-1.7-0.2l-8.8 3.1c-1.6 0.5-3.1-0.9-2.6-2.5l2.8-8.9c0.2-0.5 0.1-1.1-0.2-1.6-2.4-4.1-3.8-8.7-3.8-13.7 0-15.5 13.4-28 30-28z m13 23c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1h-26c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h26z m-20 20c0.6 0 1-0.4 1-1v-12c0-0.6-0.4-1-1-1h-6c-0.6 0-1 0.4-1 1v12c0 0.6 0.4 1 1 1h6z m20 0c0.6 0 1-0.4 1-1v-12c0-0.6-0.4-1-1-1h-12c-0.6 0-1 0.4-1 1v12c0 0.6 0.4 1 1 1h12z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(messaging_session_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
