
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function kanban_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m56.5 38.3c0-1-0.9-1.9-1.9-1.9h-11.2c-1 0-1.9 0.9-1.9 1.9v33.7c0 1 0.9 1.9 1.9 1.9h11.2c1 0 1.9-0.9 1.9-1.9v-33.7z m-22.5 0c0-1-0.9-1.9-1.9-1.9h-11.2c-1 0-1.9 0.9-1.9 1.9v38.7c0 1 0.9 1.9 1.9 1.9h11.2c1 0 1.9-0.9 1.9-1.9v-38.7z m45 0c0-1-0.9-1.9-1.9-1.9h-11.2c-1 0-1.9 0.9-1.9 1.9v28.7c0 1 0.9 1.9 1.9 1.9h11.2c1 0 1.9-0.9 1.9-1.9v-28.7z m0-17.5c0-1-0.9-1.9-1.9-1.9h-56.2c-1 0-1.9 0.9-1.9 1.9v6.2c0 1 0.9 1.9 1.9 1.9h56.2c1 0 1.9-0.9 1.9-1.9v-6.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(kanban_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
