
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function record_delete_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m39 32h22c1.1 0 2-0.9 2-2v-4c0-3.3-2.7-6-6-6h-14c-3.3 0-6 2.7-6 6v4c0 1.1 0.9 2 2 2z m33-7h-2c-0.6 0-1 0.4-1 1v4c0 4.4-3.6 8-8 8h-22c-4.4 0-8-3.6-8-8v-4c0-0.6-0.4-1-1-1h-2c-3.3 0-6 2.7-6 6v43c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6v-43c0-3.3-2.7-6-6-6z m-11.6 45.6c0 1.7-1.3 3.1-3.1 3.1h-14.6c-1.7 0-3.1-1.3-3.1-3.1v-13c0-0.5 0.4-0.9 0.9-0.9h19c0.5 0 0.9 0.4 0.9 0.9v13z m2.4-18.7c0 0.5-0.4 0.9-0.9 0.9h-23.8c-0.5 0-0.9-0.4-0.9-0.9v-1.8c0-0.5 0.4-0.9 0.9-0.9h7.6v-2.4c0-1.3 1.1-2.4 2.4-2.4h3.7c1.3 0 2.4 1.1 2.4 2.4v2.4h7.6c0.5 0 0.9 0.4 0.9 0.9v1.8z m-15.2 9.1h-1.2c-0.4 0-0.6 0.2-0.6 0.6v7.1c0 0.4 0.2 0.6 0.6 0.6h1.2c0.4 0 0.6-0.2 0.6-0.6v-7.1c0-0.4-0.3-0.6-0.6-0.6z m6.1 0h-1.2c-0.4 0-0.6 0.2-0.6 0.6v7.1c0 0.4 0.2 0.6 0.6 0.6h1.2c0.4 0 0.6-0.2 0.6-0.6v-7.1c0-0.4-0.3-0.6-0.6-0.6z m-2.5-14.3h-2.4c-0.4 0-0.6 0.2-0.6 0.6v1.8h3.7v-1.8c-0.1-0.4-0.3-0.6-0.7-0.6z"/>
	</g>
</svg>
  );
};

addPropertyControls(record_delete_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
