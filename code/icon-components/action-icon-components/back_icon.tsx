
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function back_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48.5 22h-33.2c-0.9 0-1.3-1.1-0.7-1.7l9.6-9.6c0.6-0.6 0.6-1.5 0-2.1l-2.2-2.2c-0.6-0.6-1.5-0.6-2.1 0l-17.5 17.5c-0.6 0.6-0.6 1.5 0 2.1l17.5 17.5c0.6 0.6 1.5 0.6 2.1 0l2.1-2.1c0.6-0.6 0.6-1.5 0-2.1l-9.6-9.6c-0.6-0.6-0.2-1.7 0.7-1.7h33.2c0.8 0 1.5-0.7 1.5-1.5v-3c0.1-0.8-0.6-1.5-1.4-1.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(back_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
