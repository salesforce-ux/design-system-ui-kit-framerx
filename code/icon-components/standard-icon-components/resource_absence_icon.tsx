
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function resource_absence_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m49.9 20a25.4 25.4 0 1 0 25.2 25.5c0-13.8-11.2-25.5-25.2-25.5z m16.6 38l-4.7 4.7-12.3-12.2-11.6 11.6-4.7-4.7 11.6-11.7-11.7-11.7 4.7-4.7 11.7 11.7 12.3-12.3 4.8 4.7-12.3 12.3z m-40.5 6.2h-1.3a4.8 4.8 0 0 0-4.7 4.8v6.3a4.7 4.7 0 0 0 4.7 4.7h50.6a4.8 4.8 0 0 0 4.7-4.7v-6.3a4.7 4.7 0 0 0-4.7-4.8h-1.6a30.1 30.1 0 0 1-47.7 0z" fill={props.fill} fillRule="evenodd"/>
</svg>
  );
};

addPropertyControls(resource_absence_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
