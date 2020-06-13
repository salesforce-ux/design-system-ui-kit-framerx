
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function sales_path_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m15.2 68.2l14.2-17.2c0.4-0.7 0.4-1.5 0-2.1l-14.2-17c-0.1-0.2-0.2-0.4-0.2-0.6 0-0.6 0.5-1 1-1h20.7c0.6 0 1.1 0.2 1.4 0.7l14.9 18c0.4 0.6 0.4 1.4 0 2.1l-14.8 18c-0.3 0.4-0.9 0.7-1.4 0.7h-20.7c-0.6 0-1-0.4-1-1-0.1-0.2 0-0.5 0.1-0.6z m31.6 0l14.1-17.2c0.4-0.7 0.4-1.5 0-2.1l-14.2-17c-0.1-0.2-0.2-0.4-0.2-0.6 0-0.6 0.5-1 1-1h20.7c0.6 0 1.1 0.2 1.4 0.7l14.9 18c0.4 0.6 0.4 1.4 0 2.1l-14.8 18c-0.3 0.4-0.9 0.7-1.4 0.7h-20.7c-0.6 0-1-0.4-1-1 0-0.2 0.1-0.5 0.2-0.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(sales_path_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
