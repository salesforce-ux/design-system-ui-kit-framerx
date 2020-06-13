
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom44_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m69.7 28.9c-5.3-6.6-9.6-8.9-18.7-8.9-4.1 0-9 1.6-11 2 0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v8c0 1.1 0.9 2 2 2h4c1.1 0 2-0.9 2-2h2.1c1.6 0 2.9 1.3 2.9 2.9v0.1c0 1.7 1.3 3 3 3v16c-2.2 0-4 1.8-4 4v18c0 3.3 2.7 6 6 6h2c3.3 0 6-2.7 6-6v-18c0-2.2-1.8-4-4-4v-16c1.7 0 3-2.2 3-3.9v-0.1c0-1.5 1.2-2.7 2.7-2.8 4-0.2 6.2 1.4 7.3 2.3 0.6 0.5 1.6 0.6 2.2 0.1 1-0.6 1.2-1.8 0.5-2.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom44_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
