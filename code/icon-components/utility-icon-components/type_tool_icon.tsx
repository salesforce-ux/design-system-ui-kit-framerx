
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function type_tool_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" {...props}>
	<path d="m50.4 47.6l-17.7-43.6a2.4 2.4 0 0 0-2.2-1.5h-10.4a2.2 2.2 0 0 0-2 1.5l-16.2 43.6a1.4 1.4 0 0 0 1.3 1.9h6a2.4 2.4 0 0 0 2.1-1.6l4.7-13.1h19.7l5.1 13.1a2.4 2.4 0 0 0 2.1 1.6h6a1.5 1.5 0 0 0 1.5-1.9z m-31.3-21.6l5.7-14.7h1.2l6.3 14.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(type_tool_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  