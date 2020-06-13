
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function actions_and_buttons_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48.3 74.5c1 0 1.8-0.8 1.8-1.8l0.1-20.8c0.1-1-0.8-1.8-1.6-1.9h-21.2c-1-0.1-1.8 0.8-1.9 1.6v4.1c-0.1 1 0.8 1.8 1.6 1.9h6.9c0.7 0 1.3 0.6 1.3 1.3 0 0.3-0.1 0.7-0.3 0.9l-14 14c-0.8 0.8-0.8 2.1-0.1 2.8l2.7 2.7c0.8 0.7 2 0.6 2.8-0.1l14.1-14.1c0.5-0.5 1.3-0.5 1.8 0 0.2 0.2 0.4 0.5 0.3 0.9v6.6c-0.1 1 0.8 1.8 1.6 1.9h4.1z m7.4 3.2c5.7-1 11.2-3.7 15.6-8 11.3-11.3 11.3-29.7 0-41s-29.7-11.3-41 0c-4.4 4.4-7 9.8-8 15.5h5.9c0.9-4.2 3-8.1 6.2-11.4 9-9 23.8-9 32.8 0s9 23.8 0 32.8c-3.2 3.2-7.2 5.3-11.3 6.2l-0.2 5.9z m0.3-11.9c2.6-0.8 5.1-2.2 7.1-4.3 6.8-6.8 6.8-17.8 0-24.6s-17.8-6.8-24.6 0c-2.1 2.1-3.5 4.6-4.3 7.2h6.2c0.5-1.2 1.3-2.2 2.2-3.2 4.5-4.5 11.9-4.5 16.4 0s4.5 11.9 0 16.4c-0.9 0.9-1.9 1.6-3 2.2v6.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(actions_and_buttons_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
