
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function flow_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m79.9 30.7c-2.6-5.1-9.2-14.6-21.5-9-7.6 3.5-11.9 5.5-11.9 5.5l-11 4.8c-3.1 1.5-9.9-0.6-13.7-2-1.1-0.4-2.1 0.8-1.6 1.9 2.6 5.1 9.2 14.6 21.5 9 7.6-3.5 22.9-10.1 22.9-10.1 3.1-1.5 9.9 0.6 13.7 2 1.1 0.2 2.1-0.9 1.6-2.1z m-26.4 16.1c-1.4 0.8-6.9 3.3-6.9 3.3l-5.5 2.4c-2.7 1.5-8.6-0.5-12.1-1.9-1-0.5-1.9 0.8-1.4 1.8 2.2 5 8.1 14 18.9 8.5 6.7-3.4 12.4-5.6 12.4-5.6 2.7-1.5 8.6 0.5 12.1 1.9 1 0.4 1.9-0.8 1.4-1.9-2.3-5-8.2-14-18.9-8.5z m-4 22.1c-1.1 0.6-3 1.8-3 1.8-2.1 1.3-6.5-0.4-9.1-1.7-0.7-0.4-1.4 0.8-1 1.8 1.6 4.5 6 12.6 14.1 7.6 3-1.9 3-1.8 3-1.8 2.2-1.1 6.5 0.4 9.1 1.6 0.7 0.4 1.4-0.8 1-1.8-1.6-4.4-5.7-12.1-14.1-7.5z"/>
	</g>
	<path d="m50 50" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(flow_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
