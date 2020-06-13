
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function bot_training_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g>
		<title/>
		<path d="m54.6 61c-1 0.4-2 0.7-3.2 0.8-7.3 0.8-13.4-4.9-13.4-12 0-1.2 0.2-2.4 0.5-3.6 0.2-0.5 0.8-0.6 1.1-0.3l6.8 6.8c0.5 0.5 1.3 0.5 1.9 0l4.8-4.8c0.5-0.5 0.5-1.3 0-1.9l-6.8-6.8c-0.3-0.4-0.2-1 0.3-1.1 1.1-0.3 2.3-0.5 3.5-0.5 7.1 0 12.8 6.1 12 13.4-0.1 1.1-0.4 2.1-0.8 3.2l12.6 12.6c3.9-4.6 6.2-10.5 6.2-16.8-0.1-15.5-13.5-27.7-30.1-27.7-16.7 0-30 12.3-30 27.4 0 4.8 1.4 9.3 3.6 13.3 0.4 0.6 0.5 1.4 0.3 2.1l-3.9 10.7c-0.4 1 0.6 1.9 1.6 1.6l10.9-4.1c0.6-0.3 1.4-0.1 2.1 0.3 4.5 2.5 9.9 4 15.7 4 6-0.1 11.6-1.8 16.3-4.6l-12-12z" fill={props.fill}/>
	</g>
</svg>
  );
};

addPropertyControls(bot_training_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
