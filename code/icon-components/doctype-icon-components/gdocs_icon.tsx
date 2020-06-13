
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function gdocs_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m5.1 0c-2.8 0-5.1 2.3-5.1 5.1v53.8c0 2.8 2.3 5.1 5.1 5.1h45.8c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3h-32z" fill="#3C8CEA"/>
	<path d="m56 20.4v1h-12.8s-6.4-1.3-6.2-6.7c0 0 0.2 5.7 6 5.7h13z" fill="#2D6FE4"/>
	<path d="m37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8h12.8l-18.9-20.4z" fill={props.fill} opacity=".5"/>
	<path d="m25.9 45.1h-7.6v2.2h5.4c-0.3 3.2-2.9 4.5-5.4 4.5-3.2 0-5.9-2.5-5.9-6 0-3.4 2.6-6 5.9-6 2.5 0 4.1 1.6 4.1 1.6l1.6-1.6s-2-2.2-5.7-2.2c-4.7 0-8.3 4-8.3 8.2 0 4.2 3.4 8.3 8.4 8.3 4.4 0 7.7-3 7.7-7.5-0.1-0.9-0.2-1.5-0.2-1.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(gdocs_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
