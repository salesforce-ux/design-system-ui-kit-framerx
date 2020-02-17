
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function level_down_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m8 11.9c0-0.7-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.8-1.5 1.5v16.2c0 0.8 0.8 1.6 1.5 1.6h33.2c0.9 0 1.3 1 0.7 1.7l-5.6 5.6c-0.6 0.6-0.6 1.5 0 2.1l2.1 2.1c0.6 0.6 1.5 0.6 2.1 0l13.6-13.5c0.6-0.6 0.6-1.5 0-2.1l-13.5-13.5c-0.6-0.6-1.5-0.6-2.1 0l-2.1 2.1c-0.6 0.6-0.6 1.5 0 2.1l5.6 5.6c0.6 0.6 0.2 1.8-0.7 1.8h-27.3c-1.6 0-1.5-1.6-1.5-1.6v-10.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(level_down_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  