
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function picklist_type_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48.3 14.9h-31.9c-0.9 0-1.6-0.7-1.6-1.6v-3.2c0-0.9 0.7-1.6 1.6-1.6h31.9c0.9 0 1.6 0.7 1.6 1.6v3.2c0 0.9-0.7 1.6-1.6 1.6z m0 14.3h-31.9c-0.9 0-1.6-0.7-1.6-1.6v-3.2c0-0.9 0.7-1.6 1.6-1.6h31.9c0.9 0 1.6 0.7 1.6 1.6v3.2c0 0.9-0.7 1.6-1.6 1.6z m-41.4 0h-3.2c-0.9 0-1.6-0.7-1.6-1.6v-3.2c0-0.9 0.7-1.6 1.6-1.6h3.2c0.9 0 1.6 0.7 1.6 1.6v3.2c0 0.9-0.7 1.6-1.6 1.6z m0-14.3h-3.2c-0.9 0-1.6-0.7-1.6-1.6v-3.2c0-0.9 0.7-1.6 1.6-1.6h3.2c0.9 0 1.6 0.7 1.6 1.6v3.2c0 0.9-0.7 1.6-1.6 1.6z m0 28.6h-3.2c-0.9 0-1.6-0.7-1.6-1.6v-3.2c0-0.9 0.7-1.6 1.6-1.6h3.2c0.9 0 1.6 0.7 1.6 1.6v3.2c0 0.9-0.7 1.6-1.6 1.6z m41.4 0h-31.9c-0.9 0-1.6-0.7-1.6-1.6v-3.2c0-0.9 0.7-1.6 1.6-1.6h31.9c0.9 0 1.6 0.7 1.6 1.6v3.2c0 0.9-0.7 1.6-1.6 1.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(picklist_type_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
