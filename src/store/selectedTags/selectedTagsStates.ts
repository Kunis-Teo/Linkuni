import { atom } from "recoil";
import { Tag } from "@/types";

export const selectedTagsState = atom<Tag[]>({
  key: "selectedTagsStates",
  default: [],
});
