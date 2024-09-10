import { TraitOwned } from "../lib/trait";

export function setOwnedState(state: TraitOwned) {
  localStorage.setItem("ownedState", JSON.stringify(Array.from(state)));
}

export function getOwnedState(): TraitOwned | null {
  const str = localStorage.getItem("ownedState");
  if (str == null) {
    return null;
  }
  const state: TraitOwned = new Map(JSON.parse(str));
  return state;
}
