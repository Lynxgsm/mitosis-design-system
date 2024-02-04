import { useStore } from '@builder.io/mitosis';
import { Color } from 'typings';
import './button.scss';

type Props = {
  message: string;
  backgroundColor: Color;
};

export default function DSEButton(props: Props) {
  const state = useStore({
    name: 'Hello World',
  });

  return (
    <div class={`button`}>
      {props.message || 'Hello'} {state.name}! I can run in React, Vue, Solid or
      Svelte!
    </div>
  );
}
