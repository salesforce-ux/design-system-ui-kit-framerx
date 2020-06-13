
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function lead_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="50" cy="29" fill={props.fill} r="9"/>
	<path d="m78 44h-56c-2 0-2.8 2.5-1.1 3.6l14.6 9.4c0.7 0.5 1.1 1.4 0.8 2.2l-5.5 18.3c-0.6 2 2 3.4 3.5 1.9l14.2-15c0.8-0.9 2.2-0.9 3 0l14.2 15c1.4 1.5 4 0.1 3.5-1.9l-5.5-18.3c-0.2-0.8 0.1-1.7 0.8-2.2l14.6-9.4c1.7-1.1 0.9-3.6-1.1-3.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(lead_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
