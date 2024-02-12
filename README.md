# My Design system

## Goal

- Using mitosis to create a shadcn/ui like components (where you can own the component) with its CLI

- create project -> init ds -> select component to install -> install components

- For each props added, generate classes

## Thoughts

- With the CLI, we only copy the selected components like in shadcn/ui with all the typings and styles needed.
- People should be able to update the components styles when needed
- add utilities like in tailwindcss: flex, flex-col, ...

## Steps for component

- Write props, create component inside core
- With created props, generate style according to it
