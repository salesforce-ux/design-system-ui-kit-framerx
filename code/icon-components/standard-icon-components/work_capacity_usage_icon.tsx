
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function work_capacity_usage_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m39 32h22c1.1 0 2-0.9 2-2v-4c0-3.3-2.7-6-6-6h-14c-3.3 0-6 2.7-6 6v4c0 1.1 0.9 2 2 2z m10.8 16.4v11.4h10.7s0.6-4-3.1-7.8-7.6-3.6-7.6-3.6z m22.2-23.4h-2c-0.6 0-1 0.4-1 1v4c0 4.4-3.6 8-8 8h-22c-4.4 0-8-3.6-8-8v-4c0-0.6-0.4-1-1-1h-2c-3.3 0-6 2.7-6 6v43c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6v-43c0-3.3-2.7-6-6-6z m-7.1 34.3c-0.1 8.2-6.8 14.9-15 14.8-8.2-0.1-14.9-6.8-14.8-15 0.1-8.2 6.8-14.9 15-14.8 8.2 0 14.8 6.8 14.8 15z"/>
	</g>
</svg>
  );
};

addPropertyControls(work_capacity_usage_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
