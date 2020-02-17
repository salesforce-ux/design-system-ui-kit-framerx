
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function dial_in_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<circle cx="10" cy="10" r="6"/>
		<circle cx="10" cy="26" r="6"/>
		<circle cx="26" cy="10" r="6"/>
		<circle cx="42" cy="10" r="6"/>
		<circle cx="26" cy="26" r="6"/>
		<circle cx="42" cy="26" r="6"/>
		<circle cx="10" cy="42" r="6"/>
		<circle cx="26" cy="42" r="6"/>
		<circle cx="42" cy="42" r="6"/>
	</g>
</svg>
  );
};

addPropertyControls(dial_in_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
