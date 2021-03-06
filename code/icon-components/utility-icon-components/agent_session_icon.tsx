
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function agent_session_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m26 4c-13.3 0-23.9 9.8-23.9 21.9 0 3.8 1.1 7.4 2.9 10.6 0.3 0.5 0.4 1.1 0.2 1.7l-3.1 8.5c-0.3 0.8 0.5 1.5 1.3 1.3l8.6-3.3c0.5-0.2 1.1-0.1 1.7 0.2 3.6 2 7.9 3.2 12.5 3.2 13.1-0.1 23.8-9.8 23.8-22-0.1-12.3-10.8-22.1-24-22.1z m-6.5 32c0 0.5-0.4 0.9-0.9 0.9h-4.2c-0.5 0-0.9-0.4-0.9-0.9v-5.4c0-0.5 0.4-0.9 0.9-0.9h4.2c0.5 0 0.9 0.4 0.9 0.9v5.4z m9.6 0c0 0.5-0.4 0.9-0.9 0.9h-4.2c-0.5 0-0.9-0.4-0.9-0.9v-12.7c0-0.5 0.4-0.9 0.9-0.9h4.2c0.5 0 0.9 0.4 0.9 0.9v12.7z m9.6 0c0 0.5-0.4 0.9-0.9 0.9h-4.2c-0.5 0-0.9-0.4-0.9-0.9v-19.9c0-0.5 0.4-0.9 0.9-0.9h4.2c0.5 0 0.9 0.4 0.9 0.9v19.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(agent_session_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
