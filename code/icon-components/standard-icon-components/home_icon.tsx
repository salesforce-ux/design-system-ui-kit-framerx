
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function home_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m78.8 51.2h-6.3v27.5c0 0.8-0.5 1.2-1.3 1.2h-12.4c-0.8 0-1.3-0.5-1.3-1.2v-21.2h-15v21.2c0 0.8-0.5 1.2-1.3 1.2h-12.4c-0.8 0-1.3-0.5-1.3-1.2v-27.5h-6.3c-0.5 0-1-0.2-1.1-0.8-0.3-0.5-0.1-1 0.3-1.4l28.8-28.8c0.5-0.5 1.4-0.5 1.8 0l28.8 28.8c0.4 0.4 0.4 0.9 0.3 1.4s-0.8 0.8-1.3 0.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(home_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
