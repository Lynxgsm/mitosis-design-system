import { useStore } from '@builder.io/mitosis';
import { ButtonProps } from 'typings';

export default function Button(props: ButtonProps) {
  const state = useStore({
    name: 'Hello Youth',
  });

  return (
    <div class={`button button-lg`}>
      {props.message || 'Hello'} {state.name}! I can run in React, Vue, Solid or
    </div>
  );
}
