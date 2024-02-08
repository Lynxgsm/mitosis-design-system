import { useStore } from '@builder.io/mitosis';
import './button.module.scss';
import { ButtonProps } from './button.type';

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
