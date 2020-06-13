
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function campaign_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m26 0.8c-13.9 0-25.2 11.3-25.2 25.2s11.3 25.2 25.2 25.2 25.2-11.3 25.2-25.2-11.3-25.2-25.2-25.2z m0 45.4c-11.1 0-20.2-9.1-20.2-20.2s9.1-20.2 20.2-20.2 20.2 9.1 20.2 20.2-9.1 20.2-20.2 20.2z m0-35.3c-8.3 0-15.1 6.8-15.1 15.1s6.8 15.1 15.1 15.1 15.1-6.8 15.1-15.1-6.8-15.1-15.1-15.1z m0 25.2c-5.5 0-10.1-4.5-10.1-10.1s4.6-10.1 10.1-10.1 10.1 4.6 10.1 10.1-4.6 10.1-10.1 10.1z m0-15.1c-2.8 0-5 2.3-5 5s2.3 5 5 5 5-2.3 5-5-2.2-5-5-5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(campaign_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
