import React from "react";
import { MultiSelect } from 'react-multi-select-component';
/* eslint-disable */
import './Selector.css';

export const DEFAULT_OPTIONS = [
  { label: '#공부', value: 'study' },
  { label: '#요리', value: 'cooking' },
  { label: '#내기록', value: 'my' },
  { label: '#사과', value: 'apple', disabled: true },
];

const LOCALIZAION = {
  allItemsAreSelected: '모두 선택',
  clearSearch: 'Clear Search',
  clearSelected: 'Clear Selected',
  noOptions: 'No options',
  search: '검색',
  selectAll: '모두 선택',
  selectAllFiltered: '모두 선택',
  selectSomeItems: '선택...',
  create: 'Create',
};

/** ************************************************************
 *  다중요소를 선택하는 컴포넌트
 ************************************************************* */
function Selector({ title, options, selected, setSelected,selectAll,singleSelect }) {
  return (
    <div>
      <div>
        <p>{title}</p>
        {/* <pre>{JSON.stringify(selected)}</pre> */}
        <MultiSelect
          options={options}
          value={singleSelect?selected[0]?selected.slice(-1):selected:selected}
          onChange={setSelected}
          labelledBy="Select"
          overrideStrings={LOCALIZAION}
          hasSelectAll={selectAll}
        />
      </div>
    </div>
  );
}

export default Selector;
