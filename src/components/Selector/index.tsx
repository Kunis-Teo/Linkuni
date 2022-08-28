import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";



interface IOPTION {
    label: string,
    apple : string
    disabled: boolean
}

type TProps = {
    title:string;
    options: { label:string ,value: string ,disabled: boolean};
    selected:string
    setSelected:void;
};

export const DEFAULT_OPTIONS = [
    { label:"#공부", value: "study" },
    { label: "#요리", value: "cooking" },
    { label: "#내기록", value: "my" },
    { label: "#사과", value: "apple" , disabled: true},
];


/**************************************************************
 *  다중요소를 선택하는 컴포넌트
 **************************************************************/
const Selector = ({title,options,selected,setSelected}) => {

    // @ts-ignore
    return (
        <div>
            <div>
                <p>{title}</p>
                {/*<pre>{JSON.stringify(selected)}</pre>*/}
                <MultiSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                />
            </div>
        </div>
    );
};

export default Selector;