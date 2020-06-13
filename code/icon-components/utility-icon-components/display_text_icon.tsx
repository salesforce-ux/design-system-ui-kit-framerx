
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function display_text_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m43.5 2.5h-34.9c-3.4 0-6.1 2.7-6.1 6.1v34.7c0 3.4 2.7 6.1 6.1 6.1h34.8c3.4 0 6.1-2.7 6.1-6.1v-34.7c0.1-3.4-2.7-6.1-6-6.1z m-32.9 10.2c0-1.1 0.9-2 2-2h22.9c1.1 0 2 0.9 2 2v2.1c0 1.1-0.9 2-2 2h-23c-1.1 0-2-0.9-2-2v-2.1z m24.1 26.6c0 1.1-0.9 2-2 2h-20c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h20c1.1 0 2 0.9 2 2v2z m6.7-12.3c0 1.1-0.9 2-2 2h-26.7c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h26.6c1.1 0 2 0.9 2 2v2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(display_text_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
