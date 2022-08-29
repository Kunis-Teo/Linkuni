import { useRecoilState } from "recoil";
import { Tag } from "@/types";

import { selectedTagsState } from "./selectedTagsStates";

export function useSelectedTags() {
  const [selectedTags, setSelectedTags] = useRecoilState(selectedTagsState);

  const noSelectedTags = selectedTags.length === 0;

  const hasSelectedTag = (tag: Tag) => {
    return Boolean(selectedTags.find((_tag) => _tag.id === tag.id));
  };

  const unSelectedTag = (tag: Tag) => {
    setSelectedTags((prevTags) =>
      prevTags.filter((_tag) => _tag.id !== tag.id)
    );
  };

  const addSelectedTag = (tag: Tag) => {
    if (hasSelectedTag(tag)) {
      unSelectedTag(tag);
      return;
    }

    setSelectedTags((prevTags) => [...prevTags, tag]);
  };

  return {
    selectedTags,
    noSelectedTags,
    hasSelectedTag,
    unSelectedTag,
    addSelectedTag,
  };
}
