
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function feed_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m25.2 43c-0.3 0-0.7-0.1-1.1-0.3-0.6-0.3-1.1-1-1.2-1.6l-5.7-23.1-4.9 11c-0.3 0.9-1.1 1.4-2 1.4h-6.8c-0.8 0-1.5-0.6-1.5-1.4v-1.5c0-0.8 0.7-1.5 1.5-1.5h5.2l6.9-15.7c0.4-0.8 1.3-1.4 2.3-1.3 1 0.1 1.8 0.7 2 1.7l5.9 23.4 7.9-17.1c0.4-0.9 1.3-1.4 2.2-1.3 0.8 0.1 1.6 0.7 2 1.5l3.9 8.9h6.8c0.8 0 1.5 0.7 1.5 1.5v1.4c0 0.8-0.7 1.5-1.5 1.5h-8.2c-0.9 0-1.7-0.5-2.1-1.3l-2.5-5.7-8.4 18.3c-0.5 0.7-1.2 1.2-2.2 1.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(feed_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
