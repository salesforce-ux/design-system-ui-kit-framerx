
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function radio_button_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m13.1 28.5c-5.9 0-10.6 4.7-10.6 10.5s4.7 10.6 10.6 10.6c5.8 0 10.6-4.7 10.6-10.6-0.1-5.8-4.8-10.5-10.6-10.5z m0 16.4c-3.2 0-5.9-2.6-5.9-5.9s2.6-5.9 5.9-5.9 5.9 2.6 5.9 5.9-2.7 5.9-5.9 5.9z m25.8-16.4c-5.8 0-10.6 4.7-10.6 10.6 0 5.8 4.7 10.6 10.6 10.6 5.8 0 10.6-4.7 10.6-10.6 0-5.9-4.7-10.6-10.6-10.6z m-25.8-26c-5.9 0-10.6 4.7-10.6 10.6 0 5.8 4.7 10.6 10.6 10.6 5.8 0 10.6-4.7 10.6-10.6-0.1-5.9-4.8-10.6-10.6-10.6z m0 16.4c-3.2 0-5.9-2.6-5.9-5.9s2.6-5.9 5.9-5.9 5.9 2.6 5.9 5.9-2.7 5.9-5.9 5.9z m25.8-16.4c-5.8 0-10.6 4.7-10.6 10.6 0 5.8 4.7 10.6 10.6 10.6 5.8 0 10.6-4.7 10.6-10.6 0-5.9-4.7-10.6-10.6-10.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(radio_button_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
