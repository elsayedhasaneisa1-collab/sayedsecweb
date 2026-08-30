// Defensive UX only: these controls discourage casual saving/dragging.
// They cannot make a browser-delivered image impossible to copy.
document.addEventListener("contextmenu", (e) => {
  if (e.target.closest(".photo-frame")) e.preventDefault();
});
document.addEventListener("dragstart", (e) => {
  if (e.target.closest(".photo-frame")) e.preventDefault();
});
