
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function approval_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m74 54h-11c-3.3 0-6-2.7-6-6 0.5-8.9 4.6-9.4 5-15.1 0.4-6-3.4-11.4-9.3-12.7-7.8-1.6-14.7 4.3-14.7 11.8 0 6.6 4.5 6.6 5 16 0 3.3-2.7 6-6 6h-11c-3.3 0-6 2.7-6 6v4c0 1.1 0.9 2 2 2h56c1.1 0 2-0.9 2-2v-4c0-3.3-2.7-6-6-6z m0.1 18h-48.2c-1.1 0-1.9 0.9-1.9 1.9v0.1c0 3.3 2.7 6 6 6h40.1c3.3 0 5.9-2.7 5.9-6v-0.1c0-1-0.9-1.9-1.9-1.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(approval_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
