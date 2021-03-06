
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function sales_cadence_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m41.7 66.7c0.7 0.7 1.9 0.7 2.6 0l15.3-15.2c0.8-0.7 0.8-1.9 0.2-2.6l-0.2-0.2-15.3-15.3c-0.7-0.8-1.9-0.8-2.6-0.2l-0.2 0.2-2.8 2.8c-0.8 0.7-0.8 1.9-0.2 2.6l0.2 0.2 4.8 4.8c0.5 0.5 0.5 1.4 0 1.9-0.2 0.2-0.6 0.4-0.9 0.4h-20.5c-1.1 0-2.1 0.9-2.1 2v4c0.1 1.1 1 1.9 2.1 2h20.7c0.7 0 1.3 0.6 1.3 1.3 0 0.3-0.1 0.7-0.4 0.9l-4.8 4.8c-0.8 0.7-0.8 1.9-0.2 2.6l0.2 0.2 2.8 2.8z m21.8-10.4l-4.8 4.8c-0.8 0.7-0.8 1.9-0.2 2.6l0.2 0.2 2.8 2.8c0.7 0.7 1.9 0.7 2.6 0l15.3-15.2c0.8-0.7 0.8-1.9 0.2-2.6l-0.2-0.2-15.3-15.3c-0.7-0.8-1.9-0.8-2.6-0.2l-0.2 0.2-2.8 2.8c-0.8 0.7-0.8 1.9-0.2 2.6l0.2 0.2 4.8 4.8 6.4 6.3-6.2 6.2z"/>
	</g>
</svg>
  );
};

addPropertyControls(sales_cadence_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
