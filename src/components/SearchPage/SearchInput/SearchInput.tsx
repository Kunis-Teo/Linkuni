import React, { useCallback, useRef } from 'react';

import { Wrapper, Input, SearchIcon } from './SearchInput.styled';

interface SearchInputProps {
  onSubmit?: (input: string) => void;
}

function SearchInput({ onSubmit }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onEnterKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        if (onSubmit) onSubmit(inputRef.current.value);
      }
    },
    [onSubmit],
  );

  const onIconClick = useCallback(() => {
    if (onSubmit) onSubmit(inputRef.current.value);
  }, [onSubmit]);

  return (
    <Wrapper>
      <Input ref={inputRef} onKeyDown={onEnterKeyDown} />
      <SearchIcon onClick={onIconClick} />
    </Wrapper>
  );
}

export default SearchInput;
