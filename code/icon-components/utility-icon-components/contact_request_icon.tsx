
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function contact_request_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m25.4 27c-0.6 0.2-0.9 0.9-0.4 1.4l4.4 4.5c0.5 0.5 0.5 1.2 0 1.7l-1.7 1.7c-0.5 0.5-1.2 0.5-1.7 0l-10.7-10.8c-0.5-0.5-0.5-1.2 0-1.7l10.7-10.7c0.5-0.5 1.2-0.5 1.7 0l1.7 1.7c0.5 0.5 0.5 1.2 0 1.7l-4.5 4.5c-0.5 0.5 0.4 1.4 0.4 1.4 10.2 0.3 18.1 7 20.5 16.1 2.6-3.6 4.2-7.9 4.2-12.5-0.1-12.3-10.8-22-24-22s-23.8 9.8-23.8 21.8c0 3.8 1.1 7.4 2.9 10.6 0.3 0.5 0.4 1.1 0.2 1.7l-3.1 8.5c-0.3 0.8 0.5 1.5 1.3 1.3l8.7-3.3c0.5-0.2 1.1-0.1 1.7 0.2 3.6 2 7.9 3.2 12.5 3.2 5.9-0.1 11.4-2.1 15.5-5.5-1.1-8.5-8-15.1-16.5-15.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(contact_request_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
