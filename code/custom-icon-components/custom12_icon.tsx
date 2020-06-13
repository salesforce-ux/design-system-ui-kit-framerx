
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom12_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="50" cy="50" fill={props.fill} r="30"/>
</svg>
  );
};

addPropertyControls(custom12_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
