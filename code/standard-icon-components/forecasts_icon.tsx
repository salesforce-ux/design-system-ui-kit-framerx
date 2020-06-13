
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function forecasts_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m77.7 29.2s-3.5-7.2-11.3-7.2-11.5 7.4-11.5 7.4c-5.2-2.5-9.9 0-9.9 0s-3.6-7.4-11.4-7.4-11.3 7.2-11.3 7.2-7.3 16.3-7.5 30.9c-0.2 14.4 9.5 17.9 14.1 17.9 5 0 16.8-2.1 16.2-18.5 0 0 1.2-2.8 4.5-2.7 4 0 5.4 2.7 5.4 2.7-0.6 16.4 11.2 18.5 16.1 18.5 4.5 0 14.3-3.5 14.1-17.9-0.2-14.6-7.5-30.9-7.5-30.9z m-47.9 42.4c-4.8 0-8.7-3.9-8.7-8.7s3.9-8.7 8.7-8.7 8.7 3.9 8.7 8.7-3.9 8.7-8.7 8.7z m40.4 0c-4.8 0-8.7-3.9-8.7-8.7s3.9-8.7 8.7-8.7 8.7 3.9 8.7 8.7-3.9 8.7-8.7 8.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(forecasts_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
