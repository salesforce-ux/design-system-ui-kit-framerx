
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function trending_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50.1 30.6a1.2 1.2 0 0 1-2 0.8l-5.4-5.4-12.4 10.6a3.4 3.4 0 0 1-4.9 0l-7.5-8.5-13.3 11.7a1.1 1.1 0 0 1-1.7 0l-0.6-0.6a1.1 1.1 0 0 1 0-1.6l13.2-17.9a3.4 3.4 0 0 1 4.9 0l7.5 7.5 7.6-8.8-4.9-4.5a1.3 1.3 0 0 1 0.8-2.1h16.4a2.4 2.4 0 0 1 2.2 2.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(trending_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
