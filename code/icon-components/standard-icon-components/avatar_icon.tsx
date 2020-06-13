
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function avatar_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m80 71.2v2.8c0 3.3-2.7 6-6 6h-48c-3.3 0-6-2.7-6-6v-2.8c0-7.3 8.5-11.7 16.5-15.2 0.3-0.1 0.5-0.2 0.8-0.4 0.6-0.3 1.3-0.3 1.9 0.1 3.2 2.1 6.9 3.3 10.8 3.3 3.9 0 7.6-1.2 10.8-3.2 0.6-0.4 1.3-0.4 1.9-0.1 0.3 0.1 0.5 0.2 0.8 0.4 8 3.4 16.5 7.8 16.5 15.1z" fill={props.fill}/>
	<ellipse cx="50" cy="36.5" fill={props.fill} rx="14.9" ry="16.5"/>
</svg>
  );
};

addPropertyControls(avatar_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
