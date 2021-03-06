
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom9_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m49.5 17.3c-2.3-9.5-12.3-15.3-23.3-15.3-13.4 0-24.2 10.7-24.2 24s10.8 24 24.2 24c18.6 0 17.1-9.4 11.2-13.1-3.5-2.2-5.4-7.3-1.9-10.9 6.5-6.7 17 4 14-8.7z m-36.5 16.7c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z m1-19c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z m11 29c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z m9-26c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_custom9_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
