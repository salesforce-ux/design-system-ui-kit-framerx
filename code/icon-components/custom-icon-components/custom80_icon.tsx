
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom80_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m29 60c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z m0 14c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z m42-14c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z m0 14c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z m-0.6-20c2.2-0.1 4.3 0.3 6.3 1 1 0.4 2.1-0.1 2.6-1 5.1-9.7-3.1-14.2-8.3-16.8-1.4-0.6-3 0.3-3 1.8v5.8c0 1.2-0.8 2.4-2 2.2-7.4-1.2-14-9-22-9s-9 8-9 8c-5.6 0-11.1-0.4-13.6-1-1.2-0.3-2.4 0.7-2.4 2 0 0 0 7 10 7 8.2 0 15 6 15.9 14.2 0.2 2.2 0 4.4-0.6 6.3-0.2 0.7 0.3 1.4 1.1 1.4h9.2c0.8 0 1.3-0.7 1.1-1.4-0.6-1.9-0.8-3.9-0.6-6 0.7-7.8 7.3-14.2 15.3-14.5z m-51.4-7z m26.3-15.5c0.1 0.8 0.7 1.5 1.4 1.7l10.6 3.6c1 0.3 2-0.1 2.5-1l0.9-1.7c0.4-0.7-0.1-1.5-0.8-1.6-3.1-0.3-9.6-1.5-7.7-5 1.7-3 5.2-2.2 7.5-1.2 0.9 0.4 1.8-0.6 1.4-1.5-1.5-3.2-5-5.2-8.7-4.8-4.7 0.5-8 5.1-7.4 9.8l0.3 1.7z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom80_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
