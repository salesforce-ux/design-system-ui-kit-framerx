
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function color_swatch_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m35.4 9.5l7.1 7.1h0c1.6 1.5 1.6 4.1 0 5.6l0 0-18.5 18.5v-25.4l5.8-5.8c1.5-1.6 4.1-1.6 5.6 0z m14.6 26.5v10c0 2.2-1.8 4-4 4h-25l18-18h7c2.2 0 4 1.8 4 4z m-48 5v-35c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v35c0 5-4 9-9 9s-9-4-9-9z m9 4c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z"/>
</svg>
  );
};

addPropertyControls(color_swatch_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
