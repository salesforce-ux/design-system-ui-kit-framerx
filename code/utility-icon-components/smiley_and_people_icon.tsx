
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function smiley_and_people_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50 26.1c0 13.3-10.8 24.1-24 24.1s-24-10.8-24-24.1 10.8-24.1 24-24.1 24 10.8 24 24.1z m-33-11.1c-1.7 0-3 1.8-3 4s1.3 4 3 4 3-1.8 3-4-1.3-4-3-4z m18 0c-1.7 0-3 1.8-3 4s1.3 4 3 4 3-1.8 3-4-1.3-4-3-4z m-24 14c0.6 7.6 6.2 14 14.9 14 8.8 0 14.5-6.4 15.1-14h-30z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(smiley_and_people_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
