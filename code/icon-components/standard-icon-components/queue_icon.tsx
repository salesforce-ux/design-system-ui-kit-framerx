
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function queue_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m67.6 20.1c-2.9 0-5.4 2.1-6.4 5 3.8 1.7 6.7 5.4 7.7 9.9 3.1-0.7 5.4-3.7 5.4-7.3 0-4.3-3-7.6-6.7-7.6z m6.2 17.8c-1.3 1.2-2.9 2-4.7 2.3-0.3 2.7-1.3 5.2-2.8 7.2h11.1c1.4 0 2.5-1.1 2.5-2.5v-1.2c0-2.7-3-4.4-6.1-5.8z m-10.6 12.1c-2 1.8-4.5 2.9-7.2 2.9-0.2 3.1-1.1 5.9-2.5 8.3h14c1.6 0 3-1.3 3-3v-1.2c-0.1-3.3-3.7-5.3-7.3-7z m-12.9 15.2c-2.8 2.8-6.6 4.4-10.6 4.4-4.1 0-7.9-1.7-10.7-4.6-4.6 2.2-9 5-9 9.1v1.9c0 2.2 1.8 3.9 3.9 3.9h31.3c2.2 0 3.9-1.8 3.9-3.9v-1.8c0-4.2-4.2-6.9-8.8-9z" fill={props.fill}/>
	<path d="m55.7 29.5c-3.7 0-6.8 2.7-7.7 6.5 3.7 2.4 6.4 6.5 7.5 11.2h0.2c4.4 0 8-4 8-8.9 0.1-4.8-3.5-8.8-8-8.8z" fill={props.fill}/>
	<ellipse cx="39.6" cy="51.6" fill={props.fill} rx="10.7" ry="11.8"/>
</svg>
  );
};

addPropertyControls(queue_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
