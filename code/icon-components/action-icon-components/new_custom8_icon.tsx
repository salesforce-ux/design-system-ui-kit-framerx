
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom8_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m23.7 3l-18.9 20.8c-1.1 1.2-1.1 3.1 0 4.3l18.9 20.9c1.3 1.4 3.4 1.4 4.6 0l18.9-20.8c1.1-1.2 1.1-3.1 0-4.3l-18.9-20.9c-1.2-1.3-3.4-1.3-4.6 0z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_custom8_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
