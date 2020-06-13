
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom4_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m26.2 32.7l20.8-11.9c1.9-1.1 4.3-1.1 6.2 0l20.7 11.9c1.9 1.1 3.1 3.2 3.1 5.4v23.8c0 2.2-1.1 4.3-3.1 5.4l-20.7 11.9c-1.9 1.1-4.3 1.1-6.2 0l-20.8-11.9c-1.9-1.1-3.2-3.2-3.2-5.4v-23.8c0-2.2 1.3-4.3 3.2-5.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom4_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
