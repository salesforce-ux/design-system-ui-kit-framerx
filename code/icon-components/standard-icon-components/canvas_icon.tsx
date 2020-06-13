
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function canvas_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m73.9 65.9c-0.2 3.4-0.6 7.1-1.2 10.6-0.2 1.1-1.2 2.1-2.3 2.2-6.8 0.9-13.6 1.3-20.4 1.3-6.7 0-13.5-0.4-20.2-1.3-1.1-0.1-2.1-1.2-2.3-2.2-1-5.6-1.5-11.3-1.5-16.9 0-5.7 0.5-11.4 1.4-16.9 0.2-1.1 1.2-2.1 2.3-2.3 4.1-0.5 8.2-0.8 12.2-1 0 0 3.3-0.2 3.1-3.2-0.2-2.8-5-4.6-5-9.4 0-3.8 3.8-6.8 9.9-6.8 6.1 0 9.9 3.1 9.9 6.8 0 4.7-4.7 6.6-4.9 9.4-0.2 3.1 3 3.2 3 3.2 4.1 0.2 8.3 0.5 12.4 1 1.1 0.2 2.1 1.2 2.3 2.3 0.7 3.9 1.1 7.4 1.3 11.2 0.1 1.1-0.9 2-2.1 2-0.4 0-0.7-0.1-1.1-0.1-1.2 0-2.9-0.7-3.7-1.6 0 0-2.7-2.7-5.5-2.7-4.6-0.1-8.2 4.1-8.2 8.5s3.5 8.6 8.1 8.5c2.8-0.1 5.5-2.9 5.5-2.9 0.9-0.8 2.5-1.6 3.7-1.6 0.4-0.1 0.7-0.1 1.1-0.1 1.4 0.1 2.3 1 2.2 2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(canvas_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
