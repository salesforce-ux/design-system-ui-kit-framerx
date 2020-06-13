
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom71_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m71.2 30.8c-5.9-5.9-13.8-9-22.1-8.8-16 0.5-29.1 14.2-29.1 30.6v9.4c0 3.3 2.7 6 6 6h4v4.8c0 2.6 1.9 4.9 4.5 5.2 3 0.3 5.5-2.1 5.5-5v-17.8c0-2.6-1.9-4.9-4.5-5.2-3-0.3-5.5 2.1-5.5 5v7h-2c-1.1 0-2-0.9-2-2v-7.4c0-13.2 10.5-24.2 23.3-24.6 6.6-0.2 12.7 2.2 17.4 6.8 4.7 4.6 7.3 10.7 7.3 17.2v8c0 1.1-0.9 2-2 2h-2v-6.8c0-2.6-1.9-4.9-4.5-5.2-3-0.3-5.5 2.1-5.5 5v17.8c0 2.6 1.9 4.9 4.5 5.2 3 0.3 5.5-2.1 5.5-5v-5h4c3.3 0 6-2.7 6-6v-9.4c0-8.1-3-16-8.8-21.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom71_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
