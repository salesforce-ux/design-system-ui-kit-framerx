
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function setup_modal_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48.5 2h-45c-0.8 0-1.5 0.7-1.5 1.5v32.4c0 0.8 0.7 1.5 1.5 1.5h45c0.8 0 1.5-0.7 1.5-1.5v-32.4c0-0.8-0.7-1.5-1.5-1.5z" fill={props.fill}/>
	<path d="m32 44c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2m0-2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" fill={props.fill}/>
	<circle cx="20" cy="46" fill={props.fill} r="4"/>
	<circle cx="8" cy="46" fill={props.fill} r="4"/>
	<circle cx="44" cy="46" fill={props.fill} r="4"/>
</svg>
  );
};

addPropertyControls(setup_modal_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
