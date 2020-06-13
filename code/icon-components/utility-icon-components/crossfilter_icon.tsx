
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function crossfilter_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m35 9c-1.7 0-3.3 0.2-4.8 0.7 1.8 1.5 3.4 3.3 4.7 5.3h0.1c6.1 0 11 4.9 11 11s-4.9 11-11 11c-1.5 0-3-0.3-4.3-0.9 0.8-1.1 1.5-2.3 2-3.5 0.2-0.5 0.4-0.9 0.5-1.4 0.5-1.6 0.8-3.4 0.8-5.2 0-9.4-7.6-17-17-17s-17 7.6-17 17 7.6 17 17 17c1.7 0 3.3-0.2 4.8-0.7-1.8-1.5-3.4-3.3-4.7-5.3h-0.1c-6.1 0-11-4.9-11-11s4.9-11 11-11c1.5 0 3 0.3 4.4 0.9-2.1 2.8-3.4 6.3-3.4 10.1 0 9.4 7.6 17 17 17s17-7.6 17-17-7.6-17-17-17z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(crossfilter_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
