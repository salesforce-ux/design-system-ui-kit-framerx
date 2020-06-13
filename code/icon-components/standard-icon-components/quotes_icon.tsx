
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function quotes_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m72 22h-21.9c-1.4-0.1-2.6 0.6-3.6 1.6l-26.8 26.9c-2.3 2.3-2.3 6.1 0 8.5l21.2 21.2c2.3 2.3 6.1 2.3 8.5 0l27.1-27.2c1-1 1.6-2.6 1.5-4v-21c0-3.3-2.7-6-6-6z m-21.6 44l-1.4 1.4c-0.8 0.8-2 0.8-2.8 0l-13.6-13.6c-0.8-0.8-0.8-2 0-2.8l1.4-1.4c0.8-0.8 2-0.8 2.8 0l13.6 13.6c0.8 0.8 0.8 2 0 2.8z m8-8l-1.4 1.4c-0.8 0.8-2 0.8-2.8 0l-13.6-13.6c-0.8-0.8-0.8-2 0-2.8l1.4-1.4c0.8-0.8 2-0.8 2.8 0l13.6 13.6c0.8 0.8 0.8 2 0 2.8z m5.6-17c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(quotes_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
