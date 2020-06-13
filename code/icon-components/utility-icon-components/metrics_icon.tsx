
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function metrics_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m44.9 2h-37.8c-2.8 0-5.1 2.3-5.1 5.1v37.7c0 2.9 2.3 5.2 5.1 5.2h37.7c2.8 0 5.1-2.3 5.1-5.1v-37.8c0.1-2.8-2.2-5.1-5-5.1z m-29.2 37.7c0 0.9-0.8 1.7-1.7 1.7h-1.7c-0.9 0-1.7-0.8-1.7-1.7v-9.4c0-0.9 0.8-1.7 1.7-1.7h1.7c0.9 0 1.7 0.8 1.7 1.7v9.4z m8.6 0c0 0.9-0.8 1.7-1.7 1.7h-1.7c-0.9 0-1.7-0.8-1.7-1.7v-22.3c0-0.9 0.8-1.7 1.7-1.7h1.7c0.9 0 1.7 0.8 1.7 1.7v22.3z m8.6 0c0 0.9-0.8 1.7-1.7 1.7h-1.7c-0.9 0-1.7-0.8-1.7-1.7v-27.4c0-0.9 0.8-1.7 1.7-1.7h1.7c0.9 0 1.7 0.8 1.7 1.7v27.4z m8.5 0c0 0.9-0.8 1.7-1.7 1.7h-1.7c-0.9 0-1.7-0.8-1.7-1.7v-16.3c0-0.9 0.8-1.7 1.7-1.7h1.7c0.9 0 1.7 0.8 1.7 1.7v16.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(metrics_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
