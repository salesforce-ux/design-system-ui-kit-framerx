
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function record_delete_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m17.2 11.6h17.6c0.9 0 1.6-0.7 1.6-1.6v-3.2c0-2.6-2.2-4.8-4.8-4.8h-11.2c-2.6 0-4.8 2.2-4.8 4.8v3.2c0 0.9 0.7 1.6 1.6 1.6z m26.4-5.6h-1.6c-0.5 0-0.8 0.3-0.8 0.8v3.2c0 3.5-2.9 6.4-6.4 6.4h-17.6c-3.5 0-6.4-2.9-6.4-6.4v-3.2c0-0.5-0.3-0.8-0.8-0.8h-1.6c-2.6 0-4.8 2.2-4.8 4.8v34.4c0 2.6 2.2 4.8 4.8 4.8h35.2c2.6 0 4.8-2.2 4.8-4.8v-34.4c0-2.6-2.2-4.8-4.8-4.8z m-9.3 36.4c0 1.4-1.1 2.4-2.4 2.4h-11.8c-1.4 0-2.4-1.1-2.4-2.4v-10.3c0-0.4 0.3-0.7 0.7-0.7h15.2c0.4 0 0.7 0.3 0.7 0.7v10.3z m2-14.9c0 0.4-0.3 0.7-0.7 0.7h-19.1c-0.4 0-0.7-0.3-0.7-0.7v-1.5c0-0.4 0.3-0.7 0.7-0.7h6.1v-2c0-1.1 0.9-2 2-2h2.9c1.1 0 2 0.9 2 2v2h6.1c0.4 0 0.7 0.3 0.7 0.7v1.5z m-12.3 7.3h-1c-0.3 0-0.5 0.2-0.5 0.5v5.7c0 0.3 0.2 0.5 0.5 0.5h1c0.3 0 0.5-0.2 0.5-0.5v-5.7c0-0.3-0.2-0.5-0.5-0.5z m4.9 0h-1c-0.3 0-0.5 0.2-0.5 0.5v5.7c0 0.3 0.2 0.5 0.5 0.5h1c0.3 0 0.5-0.2 0.5-0.5v-5.7c0-0.3-0.2-0.5-0.5-0.5z m-1.9-11.4h-2c-0.3 0-0.5 0.2-0.5 0.5v1.5h2.9v-1.5c0.1-0.3-0.1-0.5-0.4-0.5z"/>
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
  
