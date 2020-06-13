
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom10_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m42 48.3c-7.6 3-19.6 2.2-26.1-4.8-15.8-16.9-2-41.5 17-41.5 3.2 0 6.2 0.6 9.1 1.8 1.2 0.5 1.3 2.1 0.3 2.8-6.1 4.3-10.2 11.4-10.2 19.4 0 8.1 4 15.2 10.1 19.5 1.1 0.7 0.9 2.3-0.2 2.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_custom10_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
