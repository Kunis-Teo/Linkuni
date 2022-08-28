import React, {
  useMemo,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

import { Wrapper, Selector, Option } from "./SearchType.styled";

interface SearchTypeProps {
  selections: string[];
}

const SearchType = forwardRef<string, SearchTypeProps>(
  ({ selections }: SearchTypeProps, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const totalLength = selections.length;

    useImperativeHandle(ref, () => selections[selectedIndex]);

    const Options = useMemo(() => {
      return selections.map((selection, i) => (
        <Option
          isSelected={selectedIndex === i}
          onClick={() => setSelectedIndex(i)}
        >
          {selection}
        </Option>
      ));
    }, [selectedIndex, selections]);

    return (
      <Wrapper>
        {Options}
        <Selector selectedIndex={selectedIndex} totalLength={totalLength} />
      </Wrapper>
    );
  }
);

export default SearchType;
