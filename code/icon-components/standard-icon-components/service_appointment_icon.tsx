
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function service_appointment_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<rect height="5.48" width="5.48" fill={props.fill} rx="0.91" ry="0.91" x="60.31" y="60.99"/>
	<rect height="5.48" width="5.48" fill={props.fill} rx="0.91" ry="0.91" x="60.31" y="70.12"/>
	<rect height="5.48" width="5.48" fill={props.fill} rx="0.91" ry="0.91" x="51.17" y="60.99"/>
	<rect height="5.48" width="5.48" fill={props.fill} rx="0.91" ry="0.91" x="51.17" y="70.12"/>
	<rect height="5.48" width="5.48" fill={props.fill} rx="0.91" ry="0.91" x="42.03" y="60.99"/>
	<rect height="5.48" width="5.48" fill={props.fill} rx="0.91" ry="0.91" x="42.03" y="70.12"/>
	<path d="m71.8 20h-43.5a8.1 8.1 0 0 0-8.3 7.8v44.4a8.1 8.1 0 0 0 8.2 7.8h5.9a3.6 3.6 0 0 1-0.4-1.7v-22.3a1.4 1.4 0 0 1 1.3-1.4h37.5a1.4 1.4 0 0 1 1.4 1.4v22.3a3.6 3.6 0 0 1-0.3 1.5 8 8 0 0 0 6.4-7.6v-44.4c0.1-4.2-3.6-7.8-8.2-7.8z m-41 16.1a2.9 2.9 0 0 1-2.8-2.7v-2.8a2.9 2.9 0 0 1 2.8-2.7h14a2.9 2.9 0 0 1 2.8 2.7v2.8a2.9 2.9 0 0 1-2.8 2.7z m43.1 14.1a1.4 1.4 0 0 1-1.4 1.4h-37.5a1.4 1.4 0 0 1-1.4-1.4v-2.2a3.7 3.7 0 0 1 3.7-3.6h4.6v-1.9a2.7 2.7 0 0 1 5.4 0v1.8h12.8v-1.8a2.7 2.7 0 0 1 5.5 0v1.8h4.6a3.7 3.7 0 0 1 3.7 3.7z" fill={props.fill} fillRule="evenodd"/>
</svg>
  );
};

addPropertyControls(service_appointment_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
