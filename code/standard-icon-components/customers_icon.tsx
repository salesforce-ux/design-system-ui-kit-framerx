
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function customers_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<ellipse cx="41.3" cy="42.3" fill={props.fill} rx="12.2" ry="13.5"/>
	<path d="m52.6 57.4c-3.1 2.8-7 4.5-11.3 4.5-4.3 0-8.3-1.7-11.3-4.6-5.5 2.5-11 5.7-11 10.7v2.1c0 2.5 2 4.5 4.5 4.5h35.7c2.5 0 4.5-2 4.5-4.5v-2.1c-0.1-5-5.5-8.1-11.1-10.6z m15.4-10c-0.2-0.1-0.3-0.2-0.5-0.3-0.4-0.2-0.9-0.2-1.3 0.1-2.1 1.3-4.6 2.1-7.2 2.1h-1c-0.5 1.3-1 2.6-1.7 3.7 0.4 0.2 0.9 0.3 1.4 0.6 5.7 2.5 9.7 5.6 12.5 9.8h4.8c2.2 0 4-1.8 4-4v-1.9c0-4.9-5.7-7.9-11-10.1z m-1.1-13.2c0-4.9-3.6-8.9-7.9-8.9-2.2 0-4.1 1-5.6 2.5 3.5 3.6 5.7 8.7 5.7 14.4v0.8c4.3 0 7.8-3.9 7.8-8.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(customers_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
