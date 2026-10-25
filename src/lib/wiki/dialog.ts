/** Close a native modal on backdrop interaction, including browsers without closedby. */
export function dismissOutside(dialog: HTMLDialogElement, close: () => void) {
  function pointerdown(event: PointerEvent) {
    if (!dialog.open || event.button !== 0) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      // Prevent the backdrop's default focus action from overriding focus return.
      event.preventDefault();
      close();
    }
  }
  document.addEventListener('pointerdown', pointerdown, true);
  return { destroy() { document.removeEventListener('pointerdown', pointerdown, true); } };
}
