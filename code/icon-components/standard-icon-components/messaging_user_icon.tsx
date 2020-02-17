
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function messaging_user_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50 22c16.6 0 30 12.5 30.1 28 0 15.5-13.4 28-30 28-5.8 0-11.2-1.5-15.8-4.2-0.5-0.3-1.1-0.4-1.7-0.2l-8.8 3.1c-1.6 0.5-3.1-0.9-2.6-2.5l2.8-8.9c0.2-0.5 0.1-1.1-0.2-1.6-2.4-4.1-3.8-8.7-3.8-13.7 0-15.5 13.4-28 30-28z m8.8 42c1.9 0 3.4-2.1 3.2-4.1-0.1-3-3.2-5-6.6-6.4-2.3-0.9-2.6-1.8-2.6-2.8 0-1.1 0.6-2 1.4-2.7 1.4-1.2 2.1-3 2.1-5 0-3.8-2.3-7-6.3-7-4 0-6.4 3.2-6.4 7 0 2 0.8 3.8 2.2 5 0.8 0.7 1.4 1.6 1.4 2.7 0 1-0.3 1.9-2.7 2.9-3.3 1.5-6.4 3.3-6.5 6.3 0 2 1.5 4.1 3.4 4.1h17.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(messaging_user_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  