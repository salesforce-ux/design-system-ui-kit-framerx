
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function voicemail_drop_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m39 14.8c-6.1 0-11.2 5-11.2 11.2 0 2.2 0.7 4.3 1.8 6.1h-7.2c1.2-1.8 1.8-3.8 1.8-6.1 0-6.1-5-11.2-11.2-11.2-6.1 0-11.2 5-11.2 11.2 0 6.1 5 11.2 11.2 11.2h25.9c6.1 0 11.2-5 11.2-11.2 0.1-6.2-4.9-11.2-11.1-11.2z m-31.8 11.1c0-3.3 2.7-6 5.9-6 3.3 0 5.9 2.7 5.9 6s-2.7 6-5.9 6-5.9-2.6-5.9-6z m31.8 6.1c-3.3 0-5.9-2.7-5.9-6s2.7-6 5.9-6c3.3 0 5.9 2.7 5.9 6 0.1 3.3-2.6 6-5.9 6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(voicemail_drop_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
