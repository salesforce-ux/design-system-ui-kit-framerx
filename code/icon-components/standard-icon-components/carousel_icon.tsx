
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function carousel_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m76.3 37.7h-2.7v26.9h2.7a3.8 3.8 0 0 0 3.7-3.7v-19.5a3.8 3.8 0 0 0-3.7-3.7z m-56.3 3.7v19.5a3.8 3.8 0 0 0 3.7 3.7h2.7v-26.9h-2.7a3.8 3.8 0 0 0-3.7 3.7z m46.5-7.1h-33a3.8 3.8 0 0 0-3.7 3.8v26.2a3.8 3.8 0 0 0 3.7 3.7h33a3.8 3.8 0 0 0 3.7-3.7v-26.2a3.8 3.8 0 0 0-3.7-3.8z m-5.6 27h-23.1a1.2 1.2 0 0 1-1-1.9l7-12.1a0.8 0.8 0 0 1 1.3 0l4.3 7.2a0.8 0.8 0 0 0 1.3 0.1l3.4-5a0.8 0.8 0 0 1 1.4 0l6.3 10a1 1 0 0 1-0.9 1.7z m-0.6-14.4a3.2 3.2 0 1 1 3.2-3.2 3.2 3.2 0 0 1-3.2 3.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(carousel_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
