
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function routing_offline_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m43 9c-9.4-9.3-24.6-9.3-34 0s-9.3 24.6 0 34 24.6 9.3 34 0 9.3-24.6 0-34z m-17 35c-9.9 0-18-8.1-18-18s8.1-18 18-18 18 8 18 18-8 18-18 18z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(routing_offline_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
