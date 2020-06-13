
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function default_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m44.6 32.8c2.1-2.1 4.9-3.4 8.1-3.4 4.2 0 7.9 2.3 9.9 5.7 1.7-0.7 3.6-1.2 5.6-1.2 7.6 0.1 13.8 6.2 13.8 13.7 0 7.6-6.2 13.7-13.8 13.7-0.9 0-1.8-0.1-2.7-0.3-1.7 3-5 5.1-8.8 5.1-1.6 0-3.1-0.4-4.4-1-1.8 4-5.8 6.9-10.6 6.9-5 0-9.2-3.1-10.8-7.4-0.7 0.1-1.4 0.2-2.2 0.2-5.9 0-10.7-4.7-10.7-10.6 0-3.9 2.1-7.4 5.3-9.2-0.7-1.5-1-3.1-1-4.8 0-6.7 5.6-12.2 12.4-12.2 4.1 0 7.7 1.9 9.9 4.8" fill={props.fill} opacity=".5"/>
</svg>
  );
};

addPropertyControls(default_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
