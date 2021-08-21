export default function setBoxCoordsAndScrollOffset(target) {
  const selectedBoxCoords = target.getBoundingClientRect();
  const scrollOffset = window.scrollY;

  return [selectedBoxCoords, scrollOffset];
}
