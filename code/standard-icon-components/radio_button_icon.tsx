
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function radio_button_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m33.5 53.1c-7.4 0-13.4 6-13.4 13.4s6 13.4 13.4 13.4 13.4-6 13.4-13.4-6-13.4-13.4-13.4z m0 20.9c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5c0 4.2-3.4 7.5-7.5 7.5z m33-20.9c-7.4 0-13.4 6-13.4 13.4s6 13.4 13.4 13.4 13.4-6 13.4-13.4-6-13.4-13.4-13.4z m-33-33.1c-7.4 0-13.4 6-13.4 13.4s6 13.4 13.4 13.4 13.4-6 13.4-13.4-6-13.4-13.4-13.4z m0 20.9c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5z m33-20.9c-7.4 0-13.4 6-13.4 13.4s6 13.4 13.4 13.4 13.4-6 13.4-13.4-6-13.4-13.4-13.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(radio_button_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
