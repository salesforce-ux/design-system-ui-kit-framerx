
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function environment_hub_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m43.1 47c0.4-4.2 1.6-8.3 3.6-11.8 3.3-5.7 8.6-9 15.8-9.2 1.2-3.5 4.6-6 8.5-6 5 0 9 4 9 9s-4 9-9 9c-3.9 0-7.2-2.5-8.5-6-8.1 0.3-12.5 6.6-13.4 15h13.4c1.2-3.5 4.6-6 8.5-6 5 0 9 4 9 9s-4 9-9 9c-3.9 0-7.3-2.5-8.5-6h-13.4c0.7 9 4.9 15.1 13.4 15 1.2-3.5 4.6-6 8.5-6 5 0 9 4 9 9s-4 9-9 9c-3.9 0-7.3-2.5-8.5-6-7.4 0.1-12.8-3.3-16.1-9.1-1.9-3.5-3-7.6-3.3-11.9h-5.6c-1.2 3.5-4.6 6-8.5 6-5 0-9-4-9-9s4-9 9-9c3.9 0 7.3 2.5 8.5 6h5.6z m27.9-15c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z m0 42c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z m0-21c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z m-42 0c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(environment_hub_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
