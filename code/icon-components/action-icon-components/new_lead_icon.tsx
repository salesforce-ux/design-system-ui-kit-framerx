
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_lead_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="26" cy="9.2" fill={props.fill} r="7.2"/>
	<path d="m48.4 21.2h-44.8c-1.6 0-2.2 2-0.9 2.9l11.7 7.5c0.6 0.4 0.9 1.1 0.6 1.8l-4.3 14.6c-0.5 1.6 1.6 2.7 2.8 1.5l11.4-12c0.6-0.7 1.8-0.7 2.4 0l11.4 12c1.1 1.2 3.2 0.1 2.8-1.5l-4.5-14.7c-0.2-0.6 0.1-1.4 0.6-1.8l11.7-7.5c1.3-0.8 0.7-2.8-0.9-2.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_lead_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
