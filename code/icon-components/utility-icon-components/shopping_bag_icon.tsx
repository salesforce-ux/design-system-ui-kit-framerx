
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function shopping_bag_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m64.7 19.1v0.4-0.4z"/>
	<path d="m44 19.6c0-2.2-1.8-4-4-4h-0.7c-0.5-6.8-6.2-12.2-13.2-12.2s-12.6 5.4-13.2 12.2h-0.9c-2.2 0-4 1.8-4 4l-2 25c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4l-2-25z m-17.9-10.2c3.7 0 6.7 2.7 7.2 6.2h-14.4c0.6-3.5 3.6-6.2 7.2-6.2z m5.7 18.2h-11.6c-1.7 0-3-1.4-3-3s1.4-3 3-3h11.7c1.7 0 3 1.4 3 3s-1.4 3-3.1 3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(shopping_bag_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
