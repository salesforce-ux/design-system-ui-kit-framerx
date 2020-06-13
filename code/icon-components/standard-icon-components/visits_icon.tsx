
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function visits_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m50.6 52.9c2.6-3.7 5.3-5.6 7.1-8.4 3.2-4.8 3.9-11.6 1.8-16.8-2.1-5.3-7-8.4-12.7-8.3s-10.3 3.6-12.1 8.9c-2.1 5.8-1.2 12.8 3.5 17.2 1.9 1.8 3.7 4.7 2.7 7.4-0.9 2.6-4 3.7-6.2 4.8-5 2.2-11.1 5.3-12.1 11.2-1 4.9 2.3 10 7.6 10h23.3c1 0 1.9-1.2 1.3-1.9-3.2-3.7-6.6-8.7-6.6-13.6-0.3-3.5 0.7-7.4 2.4-10.5z m14.2 13.5c-2.7 0-5-2.2-5-4.9s2.2-4.9 5-4.9c2.7 0 5 2.2 5 4.9 0.1 2.7-2.3 4.9-5 4.9z m0-16.8c-6.6 0-11.9 5.3-11.9 11.9 0 8.1 8.5 15.8 11.1 17.7 0.4 0.4 1 0.4 1.6 0 2.6-2.1 11.1-9.6 11.1-17.7 0-6.6-5.3-11.9-11.9-11.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(visits_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
