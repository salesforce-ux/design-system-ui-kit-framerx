
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function toggle_panel_right_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m4 8h44v36h-44v-36z m4 4v28h36v-28h-36z m22 2h12v24h-12v-24z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(toggle_panel_right_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
