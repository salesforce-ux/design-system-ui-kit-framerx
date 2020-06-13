
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function case_milestone_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m73 36h-47.9c-3.3 0-6 2.7-6 6v32c0 3.3 2.7 6 6 6h47.9c3.3 0 6-2.7 6-6v-32c0-3.3-2.7-6-6-6z m-32.1 12.6v22c0 1-0.7 1.9-1.7 1.9h-0.1c-1 0-1.8-0.9-1.8-1.9v-22c-0.6-0.6-0.9-1.4-0.9-2.2-0.1-1.5 1-2.8 2.5-2.9s2.8 1 2.9 2.5v0.5c0 0.7-0.3 1.5-0.9 2.1z m21.5 13.8c0 0.3-0.2 0.6-0.4 0.8-6.9 4.1-10.8-2.4-17.2-0.3-0.5 0.1-1-0.1-1.2-0.6v-12.8c0-0.4 0.2-0.8 0.6-0.9 6.6-2.6 10.5 4.2 17.5 0.2 0.2-0.1 0.5-0.1 0.6 0.1 0.1 0.1 0.1 0.2 0.1 0.3v13.2z m-25.3-32.4h4c0.5 0 1-0.4 1-0.9v-3.1h14v3c0 0.5 0.4 1 0.9 1h4.1c0.5 0 1-0.4 1-0.9v-3.1c0-3.3-2.7-6-6-6h-14c-3.3 0-6 2.7-6 6v3c0 0.5 0.4 1 0.9 1h0.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(case_milestone_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
