
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function address_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m49 18.9a23.7 23.7 0 0 0-23.7 23.9c0 16.5 17 31.6 22.2 35.6a2.5 2.5 0 0 0 3.1 0c5.3-4.2 22.1-19.1 22.1-35.6a23.7 23.7 0 0 0-23.7-23.9z m0 33.7a10 10 0 1 1 10-10 10 10 0 0 1-10 10z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(address_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
