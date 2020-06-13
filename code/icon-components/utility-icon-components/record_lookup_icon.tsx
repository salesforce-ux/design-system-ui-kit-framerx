
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function record_lookup_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m17.2 11.6h17.6c0.9 0 1.6-0.7 1.6-1.6v-3.2c0-2.6-2.2-4.8-4.8-4.8h-11.2c-2.6 0-4.8 2.2-4.8 4.8v3.2c0 0.9 0.7 1.6 1.6 1.6z m26.4-5.6h-1.6c-0.5 0-0.8 0.3-0.8 0.8v3.2c0 3.5-2.9 6.4-6.4 6.4h-17.6c-3.5 0-6.4-2.9-6.4-6.4v-3.2c0-0.5-0.3-0.8-0.8-0.8h-1.6c-2.6 0-4.8 2.2-4.8 4.8v34.4c0 2.6 2.2 4.8 4.8 4.8h35.2c2.6 0 4.8-2.2 4.8-4.8v-34.4c0-2.6-2.2-4.8-4.8-4.8z m-6.1 38.1l-1 1c-0.3 0.3-0.7 0.3-1 0l-6.5-6.5c-1.9 1.3-4.2 2-6.7 1.6-4.2-0.6-7.5-4.1-7.9-8.3-0.6-5.8 4.3-10.7 10.1-10.1 4.3 0.4 7.7 3.7 8.3 7.9 0.4 2.5-0.3 4.9-1.6 6.7l6.5 6.5c0.1 0.4 0.1 0.8-0.2 1.2z m-14-19.3c-3.5 0-6.3 2.9-6.3 6.3 0 3.5 2.8 6.3 6.3 6.3s6.3-2.8 6.3-6.3-2.8-6.3-6.3-6.3z"/>
	</g>
</svg>
  );
};

addPropertyControls(record_lookup_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
