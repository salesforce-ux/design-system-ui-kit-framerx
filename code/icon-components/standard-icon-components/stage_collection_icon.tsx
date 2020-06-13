
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function stage_collection_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="49.8" cy="50" fill={props.fill} r="4.2"/>
	<path d="m75.9 45.8c-1.5 0-2.9 0.8-3.6 2.1h-4.5c-1.1-9-8.7-15.9-17.9-15.9s-16.8 6.9-17.9 15.8h-4.3c-0.7-1.2-2.1-2.1-3.6-2.1-2.3 0-4.2 1.9-4.2 4.2s1.9 4.2 4.2 4.2c1.5 0 2.8-0.8 3.6-1.9h4.4c1.1 8.9 8.7 15.8 17.8 15.8 9.1 0 16.7-6.9 17.8-15.7h4.5c0.8 1.2 2.1 1.9 3.6 1.9 2.3 0 4.2-1.9 4.2-4.2s-1.8-4.2-4.1-4.2z m-26 16.2c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z" fill={props.fill}/>
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
  
