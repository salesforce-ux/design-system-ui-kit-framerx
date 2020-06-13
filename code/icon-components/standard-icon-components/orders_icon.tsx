
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function orders_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m78.8 62.1l-3.6-1.7c-0.5-0.3-1.2-0.3-1.7 0l-21.5 10.2c-1.2 0.6-2.7 0.6-3.9 0l-21.6-10.2c-0.5-0.3-1.2-0.3-1.7 0l-3.6 1.7c-1.6 0.8-1.6 2.9 0 3.7l26.8 12.7c1.2 0.6 2.7 0.6 3.9 0l26.8-12.7c1.7-0.8 1.7-3 0.1-3.7z m0-14l-3.7-1.7c-0.5-0.3-1.2-0.3-1.7 0l-21.4 10.2c-1.2 0.6-2.7 0.6-3.9 0l-21.5-10.2c-0.5-0.3-1.2-0.3-1.7 0l-3.7 1.7c-1.6 0.8-1.6 2.9 0 3.7l26.8 12.8c1.2 0.6 2.7 0.6 3.9 0l26.8-12.7c1.7-0.8 1.7-3 0.1-3.8z m-57.6-10.3l26.8 12.7c1.2 0.6 2.7 0.6 3.9 0l26.8-12.7c1.6-0.8 1.6-2.9 0-3.7l-26.8-12.7c-1.2-0.6-2.7-0.6-3.9 0l-26.8 12.8c-1.6 0.7-1.6 2.9 0 3.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(orders_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
