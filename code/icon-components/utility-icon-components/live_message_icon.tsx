
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function live_message_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m46 2h-24c-2.2 0-4 1.8-4 4v0.1c3.6 0.4 6.9 1.7 9.6 3.8h14.8c0.8 0 1.6 0.8 1.6 1.6v27c0 0.8-0.8 1.4-1.6 1.4h-17c-0.8 0-1.4-0.6-1.4-1.4v-0.1c0-0.1-0.1-0.3-0.2-0.3-1.7 0.8-3.6 1.3-5.5 1.5-0.2 0.2-0.3 0.4-0.3 0.9v5.4c0 2.2 1.7 4 3.9 4h24c2.2 0 4.1-1.8 4.1-4v-39.9c0-2.2-1.8-4-4-4z m-12 46c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z m-32-25.1c0 7.1 6.3 12.8 13.9 12.9 2.7 0 5.2-0.7 7.3-1.9 0.4-0.2 0.7-0.2 1-0.1l5 1.9c0.5 0.1 0.9-0.3 0.8-0.8l-1.8-5c-0.1-0.4-0.1-0.7 0.1-1 1.1-1.9 1.7-4 1.7-6.2 0-7-6.2-12.7-14-12.7-7.7 0-13.9 5.7-14 12.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(live_message_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
