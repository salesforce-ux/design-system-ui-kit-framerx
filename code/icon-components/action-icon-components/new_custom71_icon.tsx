
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom71_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m43 10.9c-4.7-4.6-11-7.1-17.7-6.9-12.8 0.4-23.3 11.2-23.3 24v7.4c0 2.6 2.2 4.7 4.8 4.7h3.2v3.8c0 2 1.5 3.8 3.6 4.1 2.4 0.2 4.4-1.6 4.4-3.9v-14c0-2-1.5-3.8-3.6-4.1-2.4-0.2-4.4 1.6-4.4 3.9v5.5h-1.6c-0.9 0-1.6-0.7-1.6-1.6v-5.8c0-10.4 8.4-19 18.6-19.3 5.3-0.2 10.2 1.7 13.9 5.3 3.8 3.6 5.8 8.4 5.8 13.5v6.3c0 0.9-0.7 1.6-1.6 1.6h-1.5v-5.3c0-2-1.5-3.8-3.6-4.1-2.4-0.2-4.4 1.6-4.4 3.9v14c0 2 1.5 3.8 3.6 4.1 2.4 0.2 4.4-1.6 4.4-3.9v-3.9h3.2c2.6 0 4.8-2.1 4.8-4.7v-7.5c0-6.3-2.4-12.5-7-17.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_custom71_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  