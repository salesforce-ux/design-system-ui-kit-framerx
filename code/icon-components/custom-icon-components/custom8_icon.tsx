
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom8_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m47 21.3l-24 26c-1.4 1.5-1.4 3.9 0 5.4l24 26c1.6 1.7 4.3 1.7 5.9 0l24-26c1.4-1.5 1.4-3.9 0-5.4l-24-26c-1.6-1.7-4.3-1.7-5.9 0z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom8_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
