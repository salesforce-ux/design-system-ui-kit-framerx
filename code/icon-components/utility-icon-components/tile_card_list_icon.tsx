
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function tile_card_list_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m14.5 4h-9c-0.8 0-1.5 0.7-1.5 1.5v17c0 0.8 0.7 1.5 1.5 1.5h9c0.8 0 1.5-0.7 1.5-1.5v-17c0-0.8-0.7-1.5-1.5-1.5z m16 0h-9c-0.8 0-1.5 0.7-1.5 1.5v17c0 0.8 0.7 1.5 1.5 1.5h9c0.8 0 1.5-0.7 1.5-1.5v-17c0-0.8-0.7-1.5-1.5-1.5z m16 0h-9c-0.8 0-1.5 0.7-1.5 1.5v17c0 0.8 0.7 1.5 1.5 1.5h9c0.8 0 1.5-0.7 1.5-1.5v-17c0-0.8-0.7-1.5-1.5-1.5z m-32 24h-9c-0.8 0-1.5 0.7-1.5 1.5v17c0 0.8 0.7 1.5 1.5 1.5h9c0.8 0 1.5-0.7 1.5-1.5v-17c0-0.8-0.7-1.5-1.5-1.5z m16 0h-9c-0.8 0-1.5 0.7-1.5 1.5v17c0 0.8 0.7 1.5 1.5 1.5h9c0.8 0 1.5-0.7 1.5-1.5v-17c0-0.8-0.7-1.5-1.5-1.5z m16 0h-9c-0.8 0-1.5 0.7-1.5 1.5v17c0 0.8 0.7 1.5 1.5 1.5h9c0.8 0 1.5-0.7 1.5-1.5v-17c0-0.8-0.7-1.5-1.5-1.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(tile_card_list_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
