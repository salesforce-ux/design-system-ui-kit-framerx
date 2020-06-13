
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function entity_milestone_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m74.2 32.9l-21.1-11.8c-2-1.1-4.4-1.1-6.4 0l-21.1 11.9c-2 1.1-3.2 3.2-3.2 5.4v23.7c0.1 2.2 1.3 4.2 3.2 5.4l21.1 11.9c2 1.1 4.4 1.1 6.4 0l21.1-11.9c2-1.1 3.2-3.2 3.1-5.4v-23.8c0-2.2-1.2-4.3-3.1-5.4z m-33.4 7.6v25c0 1.2-0.9 2.1-2.1 2.2-1.2 0-2.1-1-2.1-2.2v-25c-0.7-0.7-1.1-1.6-1.1-2.5 0-1.8 1.5-3.2 3.3-3.1s3.2 1.5 3.1 3.3c0 0.9-0.4 1.7-1.1 2.3z m25.7 15.7c0 0.4-0.2 0.7-0.5 0.9-8.3 4.6-12.9-2.8-20.5-0.4-0.6 0.2-1.2-0.1-1.4-0.7v-14.5c0-0.4 0.3-0.8 0.7-1 7.9-3 12.5 4.8 20.9 0.3 0.3-0.1 0.6 0 0.7 0.2 0 0.1 0.1 0.2 0.1 0.3v14.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(entity_milestone_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
