
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function stage_collection_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="25.9" cy="26" fill={props.fill} r="3.4"/>
	<path d="m46.7 22.6c-1.2 0-2.3 0.7-2.9 1.6h-3.6c-0.9-7.1-6.9-12.6-14.3-12.6s-13.4 5.5-14.3 12.6h-3.3c-0.6-1-1.7-1.6-2.9-1.6-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4c1.2 0 2.2-0.6 2.8-1.6h3.5c0.9 7.1 7 12.6 14.3 12.6 7.3 0 13.3-5.5 14.3-12.6h3.6c0.6 0.9 1.6 1.6 2.8 1.6 1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4z m-20.7 13c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6-4.4 9.6-9.6 9.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(stage_collection_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
