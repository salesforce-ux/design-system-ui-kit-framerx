
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function entity_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m74.4 28.7c0-4.8-10.9-8.7-24.4-8.7s-24.4 3.9-24.4 8.7v3c0 4.8 10.9 8.7 24.4 8.7s24.4-3.9 24.4-8.7v-3z m-48.8 10c0 3.8 10.9 6.8 24.4 6.8s24.4-3 24.4-6.8v6.2c0 4.8-10.9 8.7-24.4 8.7s-24.4-3.9-24.4-8.7v-6.2z m0 0c0 3.8 10.9 6.8 24.4 6.8s24.4-3 24.4-6.8v6.2c0 4.8-10.9 8.7-24.4 8.7s-24.4-3.9-24.4-8.7v-6.2z m0 13.2c0 3.8 10.9 6.8 24.4 6.8s24.4-3 24.4-6.8v6.1c0 4.8-10.9 8.7-24.4 8.7s-24.4-3.8-24.4-8.5v-6.3z m0 13.3c0 3.8 11 6.8 24.4 6.8s24.4-3 24.4-6.8v6.2c0 4.8-10.9 8.7-24.4 8.7s-24.4-3.9-24.4-8.7v-6.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(entity_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
