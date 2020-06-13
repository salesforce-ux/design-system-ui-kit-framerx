
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function choice_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<circle cx="26" cy="26" r="11.2"/>
		<path d="m26 2c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.8-24-24-24z m0 41.6c-9.7 0-17.6-7.9-17.6-17.6s7.9-17.6 17.6-17.6 17.6 7.9 17.6 17.6-7.9 17.6-17.6 17.6z"/>
	</g>
</svg>
  );
};

addPropertyControls(choice_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
