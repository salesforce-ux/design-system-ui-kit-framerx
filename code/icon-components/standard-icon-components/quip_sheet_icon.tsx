
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function quip_sheet_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m31.9 38.8h-10c-1 0-1.9 0.9-1.9 1.9v31.9c0 2.8 2.2 5 5 5h6.9c1 0 1.9-0.9 1.9-1.9v-35c0-1.1-0.9-1.9-1.9-1.9z m46.2 0h-37.5c-1 0-1.9 0.9-1.9 1.9v35c0 1 0.9 1.9 1.9 1.9h34.4c2.8 0 5-2.2 5-5v-32c0-1-0.9-1.8-1.9-1.8z m-3.1-16.3h-50c-2.8 0-5 2.2-5 5v4.4c0 1 0.9 1.9 1.9 1.9h56.2c1 0 1.9-0.9 1.9-1.9v-4.4c0-2.7-2.2-5-5-5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(quip_sheet_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
