
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function case_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m17.2 11.3h2.9c0.4 0 0.7-0.3 0.7-0.7v-2.2h10.3v2.2c0 0.4 0.3 0.7 0.7 0.7h2.9c0.4 0 0.7-0.3 0.7-0.7v-2.2c0-2.4-2-4.4-4.4-4.4h-10.1c-2.4 0-4.4 2-4.4 4.4v2.2c0 0.4 0.2 0.7 0.7 0.7z m26.4 4.4h-35.2c-2.4 0-4.4 2-4.4 4.4v23.5c0 2.4 2 4.4 4.4 4.4h35.2c2.4 0 4.4-2 4.4-4.4v-23.5c0-2.4-2-4.4-4.4-4.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(case_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
