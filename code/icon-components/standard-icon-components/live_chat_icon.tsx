
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function live_chat_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m49.5 21.9c-16.7 0-30 12.3-30 27.4 0 4.8 1.4 9.3 3.6 13.3 0.4 0.6 0.5 1.4 0.3 2.1l-3.9 10.7c-0.4 1 0.6 1.9 1.6 1.6l10.9-4.1c0.6-0.3 1.4-0.1 2.1 0.3 4.5 2.5 9.9 4 15.7 4 16.4-0.2 29.8-12.3 29.8-27.6-0.1-15.5-13.5-27.7-30.1-27.7z m-15 32.6c-2.8 0-5-2.3-5-5 0-2.8 2.3-5 5-5 2.8 0 5 2.3 5 5s-2.3 5-5 5z m15 0c-2.8 0-5-2.3-5-5 0-2.8 2.3-5 5-5 2.8 0 5 2.3 5 5s-2.2 5-5 5z m15.1 0c-2.8 0-5-2.3-5-5 0-2.8 2.3-5 5-5s5 2.3 5 5-2.3 5-5 5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(live_chat_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
