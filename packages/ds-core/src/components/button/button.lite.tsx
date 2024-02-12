import { useStore } from '@builder.io/mitosis';
import { ButtonProps } from 'typings';
import 'styles/dist/button.css';

export default function Button(props: ButtonProps) {
  const state = useStore({
    name: 'Hello Youth',
  });

  return (
    <button
      class={`ds-button button-${props.size ?? 'md'} button-${props.backgroundColor ?? 'black'} ${props.className ?? ''}`}
    >
      {props.message || 'Hello'} {state.name}! I can run in React, Vue, Solid or
    </button>
  );
}
