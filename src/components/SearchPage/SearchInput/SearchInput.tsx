import React, { useCallback, useRef } from "react";

import { Wrapper, Input, SearchIcon } from "./SearchInput.styled";

interface SearchInputProps {
  onSubmit?: (input: string) => void;
}

function SearchInput({ onSubmit }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onEnterKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        alert("검색 기능은 아직 제공되지 않습니다 :(");
        if (onSubmit) onSubmit(inputRef.current.value);
      }
    },
    [onSubmit]
  );

  const onIconClick = useCallback(() => {
    if (onSubmit) onSubmit(inputRef.current.value);
  }, [onSubmit]);

  return (
    <Wrapper>
      <Input
        placeholder="저장한 링크를 검색해주세요!"
        ref={inputRef}
        onKeyDown={onEnterKeyDown}
      />
      <SearchIcon onClick={onIconClick} />
    </Wrapper>
  );
}

export default SearchInput;
