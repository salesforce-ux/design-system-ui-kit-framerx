
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function feed_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m49 72c-0.4 0-0.9-0.1-1.4-0.4-0.8-0.4-1.4-1.3-1.6-2.2l-7.8-31.2-6.5 14.9c-0.4 1.2-1.5 1.9-2.7 1.9h-9c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h7l9.2-21.2c0.5-1.2 1.7-1.9 3-1.8 1.3 0.1 2.4 1 2.7 2.3l7.9 31.6 10.4-23.1c0.5-1.2 1.7-1.9 3-1.8 1.1 0.1 2.1 0.9 2.6 2l5.2 12h9c1.1 0 2 0.9 2 2v2c0 1.1-0.9 2-2 2h-11c-1.2 0-2.3-0.7-2.8-1.8l-3.3-7.7-11.2 24.7c-0.5 1.1-1.5 1.8-2.7 1.8z" fill={props.fill}/>
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
  
