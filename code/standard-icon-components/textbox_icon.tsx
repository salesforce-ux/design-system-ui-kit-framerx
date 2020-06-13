
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function textbox_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m74 80h-48c-3.3 0-6-2.7-6-6v-48c0-3.3 2.7-6 6-6h48c3.3 0 6 2.7 6 6v48c0 3.3-2.7 6-6 6z m-45.9-50v40c0 1.1 0.9 2 2 2h39.9c1.1 0 2-0.9 2-2v-40c0-1.1-0.9-2-2-2h-39.9c-1.1 0-2 0.9-2 2z m8.1 31.9v-23.8c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v23.8c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(textbox_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
