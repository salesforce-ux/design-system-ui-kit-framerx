
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function cart_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m20.1 26h23.9c0.7 0 1.4-0.5 1.5-1.2l4.4-15.4c0.3-1.1-0.5-2-1.5-2h-36.9l-0.6-2.3c-0.3-1.1-1.3-1.8-2.3-1.8h-4c-1.3 0-2.5 1-2.6 2.3-0.1 1.4 1.1 2.6 2.4 2.6h2.3l7.6 25.7c0.3 1.1 1.2 1.8 2.3 1.8h28.2c1.3 0 2.5-1 2.6-2.3 0.1-1.4-1.1-2.6-2.4-2.6h-24.8c-1.1 0-2-0.7-2.3-1.7v-0.1c-0.5-1.5 0.7-3 2.2-3z"/>
		<circle cx="20.6" cy="44.6" r="4"/>
		<circle cx="40.1" cy="44.6" r="4"/>
	</g>
</svg>
  );
};

addPropertyControls(cart_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
