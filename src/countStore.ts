import { atom } from "nanostores";

const count = atom(0);

function addOne() {
  count.set(count.get() + 1);
}

function subtractOne() {
  count.set(count.get() - 1);
}

export { count, addOne, subtractOne };
