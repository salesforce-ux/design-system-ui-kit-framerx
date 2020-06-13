
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function animal_and_nature_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m17.4 4.6c2.7-1 5.6-1.5 8.6-1.5s5.9 0.5 8.6 1.5c0.9-1.5 2.5-2.6 4.4-2.6 2.8 0 5 2.2 5 5 0 0.8-0.2 1.6-0.5 2.3 1.2 1 2 4.3 2.5 9.7 0.4 3 3 12.1 3 14 0.1 8-7.6 13.6-23 17-15.3-3.3-23-9-23-17 0-2.1 2.5-10.9 3-14 0.6-5.3 1.5-8.5 2.6-9.6-0.4-0.7-0.6-1.5-0.6-2.4 0-2.8 2.2-5 5-5 1.9 0 3.5 1.1 4.4 2.6z m3.6 18.1c-1.8 0.5-2.9 2.2-2.8 4.1l0.4 6.2c0.2 3.9 3.5 7 7.4 7 3.9 0 7.2-3.1 7.4-7l0.4-6.1c0.1-1.9-1-3.5-2.8-4.1-1.8-0.5-3.6-0.8-5.4-0.8-1.6 0-3.2 0.2-4.6 0.7z m15 0.3c1.7 0 3-1.8 3-4s-1.3-4-3-4-3 1.8-3 4 1.3 4 3 4z m-20 0c1.7 0 3-1.8 3-4s-1.3-4-3-4-3 1.8-3 4 1.3 4 3 4z m13.1 4.7c-1.8 2-4.7 2-6.4 0-1.7-2-0.3-3.7 3.2-3.7 3.5 0 4.9 1.7 3.2 3.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(animal_and_nature_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
