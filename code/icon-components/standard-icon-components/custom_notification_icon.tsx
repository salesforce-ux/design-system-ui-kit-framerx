
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom_notification_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" {...props}>
	<path d="m53.8 21.9l-3.8 18.2a1 1 0 0 0 1.1 1.1h19.5a2 2 0 0 1 1.7 2.9l-21.3 34.9a1.9 1.9 0 0 1-3.5-0.9l3.8-21.5c0-0.7-0.7-0.5-1.4-0.5h-20.5c-1.3 0-2.3-2-1.6-3.2l22.5-31.9a1.9 1.9 0 0 1 3.5 0.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom_notification_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
