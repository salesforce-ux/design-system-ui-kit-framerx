
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function end_call_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48.5 5.6l-2.1-2.1c-0.6-0.6-1.7-0.5-2.4 0.3l-23.5 23.5-5-5.6c-0.6-0.6-0.6-1.4-0.2-2.1l3.8-5.2c1.1-1.4 1-3.4-0.1-4.8l-4.9-6.1c-1.5-1.8-4.2-2-5.9-0.3l-5.2 5.2c-0.8 0.8-1.2 1.9-1.2 3 0.5 9.2 4.2 18 10 24.6l-8 8c-0.7 0.7-0.8 1.8-0.3 2.4l2.1 2.1c0.6 0.6 1.7 0.5 2.4-0.3l40.2-40.2c0.8-0.7 0.9-1.8 0.3-2.4z m0 32.3l-6.1-4.9c-1.4-1.1-3.4-1.2-4.8-0.1l-5.2 3.8c-0.6 0.5-1.5 0.4-2.1-0.2l-2.4-2.2-8.5 8.5c6.1 4.1 13.4 6.8 21 7.2 1.1 0.1 2.2-0.4 3-1.2l5.2-5.2c1.9-1.5 1.8-4.3-0.1-5.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(end_call_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
