
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function assigned_resource_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m49.9 20a25.4 25.4 0 1 0 25.2 25.5c0-13.8-11.2-25.5-25.2-25.5z m16.5 23.2l-10.5 10.2c-0.7 0.7-1.7 0.1-1.7-1.2v-6c-7.6 0-12.7 5.2-12.7 12.8h-7.6a20.1 20.1 0 0 1 20.3-20.4v-6.2c0-1.3 1.1-1.9 1.7-1.2l10.6 10.3a1.5 1.5 0 0 1 0 1.7z m-40.4 21h-1.3a4.8 4.8 0 0 0-4.7 4.8v6.3a4.7 4.7 0 0 0 4.7 4.7h50.6a4.8 4.8 0 0 0 4.7-4.7v-6.3a4.7 4.7 0 0 0-4.7-4.8h-1.6a30.1 30.1 0 0 1-47.7 0z" fill={props.fill} fillRule="evenodd"/>
</svg>
  );
};

addPropertyControls(assigned_resource_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
