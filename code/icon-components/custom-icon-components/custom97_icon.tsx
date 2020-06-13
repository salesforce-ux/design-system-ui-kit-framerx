
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom97_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m60 54.4v-25.3c0-6.2-4.8-11.1-10.9-11.1h-0.2c-6.1 0-10.9 4.9-10.9 11.1v25.3c-3.2 3-5 7.2-5 11.6 0 8.8 7.2 16 16 16s16-7.2 16-16c0-4.5-1.8-8.6-5-11.6z m-2.6 11.6h-16.8c-0.9 0-1.6-0.9-1.5-1.8 0.4-2.4 1.7-4.5 3.6-6 0.7-0.6 1.2-1.5 1.2-2.4v-26.7c0-2.9 2.2-5.1 4.9-5.1h0.2c2.8 0 4.9 2.2 4.9 5.1v0.9h-3c-1.7 0-3 1.3-3 3s1.3 3 3 3h3v4h-3c-1.7 0-3 1.3-3 3s1.3 3 3 3h3v4h-3c-1.7 0-3 1.3-3 3s1.3 3 3 3h3c0.1 0.9 0.5 1.6 1.2 2.2 1.9 1.5 3.2 3.7 3.6 6 0.3 0.9-0.4 1.8-1.3 1.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom97_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
