
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom7_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m7.1 50c-2.8 0-5.1-2.3-5.1-5.1v-37.8c0-2.8 2.3-5.1 5.1-5.1h37.7c2.9 0 5.2 2.3 5.2 5.1v37.7c0 2.8-2.3 5.1-5.1 5.1h-37.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_custom7_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
