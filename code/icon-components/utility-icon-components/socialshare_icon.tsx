
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function socialshare_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m40.9 32c-2.6 0-4.9 1.1-6.5 2.8l-14.6-7.3c0.1-0.5 0.1-1 0.1-1.6 0-0.5-0.1-1.1-0.1-1.6l14.6-7.3c1.6 1.8 4 2.9 6.6 2.9 5 0 9-4 9-9s-4-9-9-9-9 4-9 9v0.6l-15.1 7.6c-1.7-1.3-3.7-2.1-6-2.1-5 0-9 4-9 9s4 9 9 9c2.3 0 4.3-0.8 5.9-2.2l15.1 7.5v0.7c0 5 4 9 9 9s9-4 9-9-4-9-9-9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(socialshare_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
