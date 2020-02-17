
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function search_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m79.5 74.1l-16.6-16.5c3.4-4.7 5.1-10.7 4.2-17.1-1.5-10.7-10.2-19.2-21.1-20.2-14.7-1.5-27.2 11-25.7 25.8 1 10.7 9.5 19.6 20.2 21.1 6.4 0.9 12.3-0.9 17.1-4.2l16.6 16.6c0.7 0.7 1.9 0.7 2.6 0l2.6-2.6c0.8-0.9 0.8-2.1 0.1-2.9z m-51.8-30.4c0-8.8 7.2-16.1 16.1-16.1s16.1 7.2 16.1 16.1-7.2 16.1-16.1 16.1-16.1-7.1-16.1-16.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(search_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  