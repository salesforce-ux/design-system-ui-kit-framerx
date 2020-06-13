
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function lead_convert_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m27.6 28.3c-0.6 0.6-0.6 1.5 0 2.1l2.1 2.1c0.6 0.6 1.5 0.6 2.1 0l13.5-13.5c0.6-0.6 0.6-1.5 0-2.1l-13.4-13.5c-0.6-0.6-1.5-0.6-2.1 0l-2.1 2.1c-0.6 0.6-0.6 1.5 0 2.1l5.7 5.6c1.6 1.8-1 1.7-1 1.7h-8c-9.5 0.1-17.6 7.9-17.4 17.4 0.2 9.2 7.7 16.7 17 16.7h3.5c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5h-3.2c-5.7 0-10.7-4.2-11.3-9.9-0.6-6.6 4.6-12.1 11-12.1h8.6c0.7 0.2 1 1.1 0.5 1.7l-5.5 5.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(lead_convert_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
