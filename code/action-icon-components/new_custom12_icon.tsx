
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom12_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="26" cy="26" fill={props.fill} r="24"/>
</svg>
  );
};

addPropertyControls(new_custom12_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
