
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function timeslot_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m71 20h-41.8a7.9 7.9 0 0 0-8 7.8v44.4a7.9 7.9 0 0 0 7.9 7.8h41.9a7.9 7.9 0 0 0 7.8-7.8v-44.4a7.7 7.7 0 0 0-7.8-7.8z m-39.2 13a2.7 2.7 0 0 1 2.6-2.6h13.3a2.7 2.7 0 0 1 2.6 2.6v2.6a2.7 2.7 0 0 1-2.6 2.6h-13.3a2.7 2.7 0 0 1-2.6-2.6z m36.2 34a2.7 2.7 0 0 1-2.6 2.6h-13.2a2.7 2.7 0 0 1-2.6-2.6v-2.6a2.7 2.7 0 0 1 2.6-2.6h13.3a2.6 2.6 0 0 1 2.5 2.6z m0.5-12.4a2.8 2.8 0 0 1-2.7 2.6h-31.4a2.7 2.7 0 0 1-2.6-2.6v-9.1a2.7 2.7 0 0 1 2.6-2.6h31.5a2.7 2.7 0 0 1 2.6 2.6z" fill={props.fill} fillRule="evenodd"/>
</svg>
  );
};

addPropertyControls(timeslot_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
