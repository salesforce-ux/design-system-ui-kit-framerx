
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function incoming_call_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48.5 37.9l-6.1-4.9c-1.4-1.1-3.4-1.2-4.8-0.1l-5.2 3.8c-0.6 0.5-1.5 0.4-2.1-0.2l-7.8-7-7-7.8c-0.6-0.6-0.6-1.4-0.2-2.1l3.8-5.2c1.1-1.4 1-3.4-0.1-4.8l-4.9-6.1c-1.5-1.8-4.2-2-5.9-0.3l-5.2 5.2c-0.8 0.8-1.2 1.9-1.2 3 0.5 10.2 5.1 19.9 11.9 26.7s16.5 11.4 26.7 11.9c1.1 0.1 2.2-0.4 3-1.2l5.2-5.2c1.9-1.5 1.8-4.3-0.1-5.7z m-18.9-13.9h15.4c1 0 1.3-1.1 0.5-1.9l-4.9-5 9-9.1c0.5-0.5 0.5-1.4 0-1.9l-3.7-3.7c-0.5-0.5-1.3-0.5-1.9 0l-9.1 9.1-5.1-4.9c-0.7-0.9-1.8-0.6-1.8 0.4v15.3c0 0.7 0.9 1.7 1.6 1.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(incoming_call_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
