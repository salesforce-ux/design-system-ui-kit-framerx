
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function offline_cached_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m38.6 20.4c-1-6.5-6.7-11.5-13.5-11.5-7.6 0-13.7 6.1-13.7 13.7 0 0.3 0 0.7 0.1 1-5 0.4-8.9 4.6-8.9 9.6 0 5.4 4.3 9.7 9.7 9.7h11.5l-8.1-8.1c-0.4-0.4-0.4-0.9 0-1.3l1.3-1.3c0.4-0.4 0.9-0.4 1.3 0l3.5 3.5c0.4 0.4 1.1 0.1 1.1-0.4v-13.5c0-0.4 0.5-0.9 1-0.9h1.9c0.5 0 0.9 0.4 0.9 0.9v13.4c0 0.6 0.8 0.8 1.1 0.4l3.5-3.5c0.4-0.4 0.9-0.4 1.3 0l1.3 1.3c0.4 0.4 0.4 0.9 0 1.3l-7.9 8.2h12.3c6.1-0.1 11-5.1 11-11.3 0.1-6.1-4.7-11-10.7-11.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(offline_cached_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
