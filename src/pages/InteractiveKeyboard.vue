<script setup lang="ts">
const keyboard = [
  {code: "Digit1", text: "1"},
  {code: "Digit2", text: "2"},
  {code: "Digit3", text: "3"},
  {code: "Digit4", text: "4"},
  {code: "Digit5", text: "5"},
  {code: "Digit6", text: "6"},
  {code: "Digit7", text: "7"},
  {code: "Digit8", text: "8"},
  {code: "Digit9", text: "9"},
  {code: "Digit0", text: "0"},
  {code: "Minus", text: "-"},
  {code: "Equal", text: "="},
  {code: "Backspace", text: "Backspace"}
];

window.addEventListener("DOMContentLoaded", () => {
  const interactiveKeyboardElement = document.querySelector(".interactive-keyboard");

  if (interactiveKeyboardElement) {
    const interactiveKeyboardTextareaElement = interactiveKeyboardElement.querySelector(".interactive-keyboard__textarea");

    if (interactiveKeyboardTextareaElement) {
      interactiveKeyboardTextareaElement.addEventListener("keydown", (event) => {
        console.log(event);
      });
    }
  }
});
</script>

<template>
  <main class="main container interactive-keyboard">
    <textarea class="interactive-keyboard__textarea" autofocus value="Принимая во внимание, что признание достоинства"/>
    <div class="interactive-keyboard__keyboard">
      <template v-for="key in keyboard">
        <button class="interactive-keyboard__btn" :id="key.code" type="button">{{ key.text }}</button>
      </template>
    </div>
  </main>
</template>

<style scoped>

</style>