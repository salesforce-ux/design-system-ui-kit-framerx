
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_opportunity_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m41.8 41h-31.6c-0.8 0-1.4 0.7-1.4 1.4v0.1c0 2.5 2 4.5 4.5 4.5h25.5c2.5 0 4.5-2 4.5-4.5v-0.1c-0.1-0.7-0.7-1.4-1.5-1.4z m3.7-30.8c-2.5 0-4.5 2-4.5 4.5 0 1.4 0.6 2.6 1.6 3.4-1.3 2.9-4.2 4.9-7.6 4.8-4-0.2-7.2-3.4-7.4-7.4 0-0.7 0-1.3 0.1-1.9 1.7-0.7 2.9-2.2 2.9-4.2-0.1-2.4-2.1-4.4-4.6-4.4s-4.5 2-4.5 4.5c0 1.9 1.2 3.5 2.8 4.2 0.2 0.6 0.2 1.2 0.2 1.9-0.2 4-3.4 7.2-7.4 7.4-3.4 0.2-6.4-1.9-7.7-4.8 1-0.8 1.6-2.1 1.6-3.4 0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5 2 4.5 4.5 4.5l2.1 16c0.1 0.7 0.7 1.2 1.4 1.2h32c0.7 0 1.3-0.5 1.4-1.2l2.1-16c2.5 0 4.5-2 4.5-4.5s-2-4.6-4.5-4.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_opportunity_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
