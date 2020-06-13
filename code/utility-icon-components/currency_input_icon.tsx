
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function currency_input_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m35.9 37.6c2.7-4.5 2.2-10.4-1.7-14.3-4.5-4.5-11.9-4.5-16.4 0-3.9 3.9-4.4 9.8-1.7 14.3h19.8z m13.6-30.4v37.6c0 2.6-2.1 4.7-4.7 4.7h-37.6c-2.6 0-4.7-2.1-4.7-4.7v-37.6c0-2.6 2.1-4.7 4.7-4.7h37.6c2.6 0 4.7 2.1 4.7 4.7z m-39.2 36h31.3c0.9 0 1.6-0.7 1.6-1.6v-31.3c0-0.9-0.7-1.6-1.6-1.6h-31.3c-0.9 0-1.6 0.7-1.6 1.6v31.3c0.1 0.9 0.8 1.6 1.6 1.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(currency_input_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
