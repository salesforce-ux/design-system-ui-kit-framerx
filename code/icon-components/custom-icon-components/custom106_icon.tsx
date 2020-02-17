
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom106_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m49.6 20.5c-11.9 0.1-21.5 9.8-21.4 21.7 0 17.6 21.4 37.3 21.4 37.3s21.5-20.5 21.5-37.3c0-11.9-9.6-21.6-21.5-21.7z m0 31.1c-3.7 0-7.1-2.2-8.6-5.7-1.5-3.5-0.7-7.5 1.9-10.1 2.7-2.7 6.7-3.5 10.2-2.1 3.4 1.4 5.7 4.8 5.7 8.5 0.1 5.1-4.1 9.3-9.2 9.4v0z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom106_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  