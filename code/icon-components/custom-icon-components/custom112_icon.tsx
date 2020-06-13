
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom112_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m51.1 50.2c-8.4-2-17.3-2-25.7 0-2.9 0.9-4.8 3.5-5 6.5v5.2c0.1 3 2.1 5.6 5 6.5 0.8 0.2 1.6 0.4 2.4 0.5l6.6 9.6c1.2 1.7 2.2 1.4 2.2-0.7v-7.9c4.9 0.1 9.8-0.4 14.5-1.5 2.9-0.9 4.8-3.5 5-6.5v-5.2c-0.1-3-2.1-5.6-5-6.5z m23.5-27.7c-11.5-2.8-23.5-2.8-35 0-2.9 1-4.8 3.6-5 6.6v9.3c0.2 3 2.1 5.6 5 6.6 6.4 1.6 13 2.3 19.6 2v11c0 2.1 1 2.5 2.1 0.7l9-12.8c1.5-0.2 2.9-0.5 4.3-0.9 2.9-1 4.8-3.6 5-6.6v-9.3c-0.1-3-2.1-5.6-5-6.5v-0.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom112_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
