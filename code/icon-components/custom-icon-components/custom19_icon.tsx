
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom19_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m79.2 32.8c-0.2-0.7-1.1-0.9-1.7-0.4l-10.1 10.1c-0.8 0.8-2 0.8-2.8 0l-7.1-7.1c-0.8-0.8-0.8-2 0-2.8l10.2-10.2c0.5-0.5 0.3-1.4-0.4-1.7-1.7-0.4-3.5-0.7-5.3-0.7-10.6 0-19.1 9.2-17.9 20 0.2 1.7 0.6 3.2 1.2 4.7l-23.3 23.4c-2.7 2.7-2.7 7.2 0 9.9 1.4 1.4 3.2 2.1 5 2.1s3.6-0.7 5-2.1l23.3-23.3c1.5 0.6 3.1 1 4.7 1.2 10.9 1.2 20-7.3 20-17.9 0-1.8-0.3-3.6-0.8-5.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom19_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
