
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function loop_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m76.5 58.3c0 0.1 0 0.2-0.1 0.2-0.3 1.1-0.7 2.2-1.1 3.3-0.5 1.2-1 2.3-1.6 3.4-1.2 2.2-2.7 4.2-4.5 6-1.7 1.8-3.7 3.4-5.9 4.7-2.2 1.3-4.5 2.3-7 3-2.5 0.7-5.1 1.1-7.7 1.1-15.8 0-28.6-12.8-28.6-28.7s12.8-28.6 28.6-28.6c5.3 0 10.3 1.5 14.6 4h0.1c2.1 1.2 4 2.7 5.6 4.4 0.5 0.4 0.8 0.7 1.2 1.2 0.9 0.8 1.6 0.3 1.6-0.9v-9.4c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2.2 2v24.5c0 0.9-0.8 1.8-1.8 1.8h-24.5c-1.1 0-1.9-0.8-1.9-1.9v-4.2c0-1.1 0.9-2 2-2h9.4c0.8 0 1.4-0.2 1.7-0.7-3.6-5-9.6-8.3-16.2-8.3-11.1 0-20.1 9-20.1 20.1s9 20.1 20.1 20.1c8.7 0 16.1-5.5 18.9-13.3 0 0 0.3-1.8 1.7-1.8h5.7c0.8 0 1.6 0.6 1.6 1.5v0.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(loop_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
