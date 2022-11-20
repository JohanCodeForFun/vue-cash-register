<template>
<button :style="{background: color}">
{{ text }}
</button>
</template>

<script>
export default {
  name: 'ButtonTemplate',
  props: {
    text: String,
    color: String,
  },
};
</script>

<style>
button {
  padding: .3rem .8rem;
  border-radius: .3rem;
  border-style: none;
  font-weight: 500;
  border: 1px solid #000;
  color: white;
}
</style>
