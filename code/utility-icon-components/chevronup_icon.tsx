
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function chevronup_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m4.4 34.2l20.5-20.7c0.6-0.6 1.6-0.6 2.2 0l20.5 20.7c0.6 0.6 0.6 1.6 0 2.2l-2.2 2.2c-0.6 0.6-1.6 0.6-2.2 0l-16.1-16.4c-0.6-0.6-1.6-0.6-2.2 0l-16.1 16.3c-0.6 0.6-1.6 0.6-2.2 0l-2.2-2.2c-0.5-0.6-0.5-1.5 0-2.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(chevronup_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
