<template>
  <div :class="`button`">
    {{ message || "Hello" }} {{ name }}! I can run in React, Vue, Solid or
    Svelte!
  </div>
</template>

<script>
import { defineComponent } from "vue";

import "./button.scss";

export default defineComponent({
  name: "dse-button",

  props: ["message"],

  data() {
    return { name: "Hello World" };
  },
});
</script>