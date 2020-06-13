
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function password_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m74 80h-48c-3.3 0-6-2.7-6-6v-48c0-3.3 2.7-6 6-6h48c3.3 0 6 2.7 6 6v48c0 3.3-2.7 6-6 6z m-45.9-50v40c0 1.1 0.9 2 2 2h39.9c1.1 0 2-0.9 2-2v-40c0-1.1-0.9-2-2-2h-39.9c-1.1 0-2 0.9-2 2z m38.2 17.3l-1.2-3.8c-0.3-1-1.5-1.6-2.5-1.3l-8.7 2.8v-8.6c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v8.6l-8.5-2.8c-1-0.3-2.2 0.3-2.5 1.3l-1.2 3.8c-0.3 1 0.3 2.2 1.3 2.5l7.9 2.6-5.7 7.8c-0.6 0.9-0.4 2.2 0.5 2.8l3.3 2.3c0.9 0.6 2.2 0.4 2.8-0.5l6.3-8.7 6.3 8.7c0.6 0.9 1.9 1.1 2.8 0.5l3.3-2.3c0.9-0.6 1.1-1.9 0.5-2.8l-5.7-7.9 7.8-2.5c0.9-0.4 1.5-1.5 1.2-2.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(password_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
