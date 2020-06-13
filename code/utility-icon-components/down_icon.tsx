
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function down_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m8.3 14h35.4c1 0 1.7 1.3 0.9 2.2l-17.3 21.2c-0.6 0.8-1.9 0.8-2.5 0l-17.5-21.2c-0.7-0.9-0.1-2.2 1-2.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(down_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
