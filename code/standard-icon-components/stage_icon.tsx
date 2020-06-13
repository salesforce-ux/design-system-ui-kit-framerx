
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function stage_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="75.9" cy="50" fill={props.fill} r="4.2"/>
	<circle cx="49.8" cy="50" fill={props.fill} r="4.2"/>
	<circle cx="24.1" cy="50" fill={props.fill} r="4.2"/>
	<path d="m31.9 50c0 9.9 8.1 18 18 18s18-8.1 18-18-8.1-18-18-18-18 8.1-18 18z m30 0c0 6.6-5.4 12-12 12s-12-5.4-12-12 5.4-12 12-12 12 5.4 12 12z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(stage_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
