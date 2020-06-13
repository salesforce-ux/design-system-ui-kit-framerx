
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function email_chatter_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48.7 55c0.8 0.7 1.9 0.7 2.7 0l28.3-26.2c0.5-1 0.4-2.6-1.6-2.6l-56 0.1c-1.5 0-2.7 1.4-1.6 2.6l28.2 26.1z m31.3-15c0-1.3-1.6-2-2.5-1.1l-22 20.4c-1.5 1.4-3.4 2.1-5.4 2.1s-3.9-0.7-5.4-2.1l-22.1-20.4c-1-0.9-2.5-0.2-2.5 1.1v26c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6-0.1 0-0.1-18-0.1-26z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(email_chatter_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
