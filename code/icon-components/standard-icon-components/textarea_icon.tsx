
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function textarea_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m74 80h-48c-3.3 0-6-2.7-6-6v-48c0-3.3 2.7-6 6-6h48c3.3 0 6 2.7 6 6v48c0 3.3-2.7 6-6 6z m-45.9-50v40c0 1.1 0.9 2 2 2h39.9c1.1 0 2-0.9 2-2v-40c0-1.1-0.9-2-2-2h-39.9c-1.1 0-2 0.9-2 2z m33.8 21.2c1 0 2 0.9 2 2v8.7c0 1.1-0.9 2-2 2h-9.2c-1.1 0-2-0.9-2-2 0-0.7 0.3-1.3 0.8-1.8l1.9-1.9c1.3-1.2 2.7-2.4 4-3.6 0.9-0.8 1.8-1.7 2.8-2.5 0.3-0.2 0.5-0.5 0.8-0.6 0.3-0.2 0.6-0.3 0.9-0.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(textarea_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
