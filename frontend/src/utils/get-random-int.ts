export function getRandomInt(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function getRandomSide() {
  return Math.random() > 0.5 ? "left" : "right";
}
