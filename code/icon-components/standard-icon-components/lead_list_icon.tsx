
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function lead_list_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m37.1 62.3h39.9c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2h-39.9c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2z m-12.1 8h-4c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v4c0.1 1-0.7 1.9-1.8 2h-0.2z m0-17.9h-4c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v4c0.1 1-0.7 1.9-1.8 2h-0.2z m0-17.9h-4c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v4c0.1 1-0.7 1.9-1.8 2h-0.2z m12.1 9.9h35.1c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2h-35.1c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2z m0-17.8h39.9c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2h-39.9c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(lead_list_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
