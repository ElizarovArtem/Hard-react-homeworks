import React, {ChangeEvent} from "react";
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number , number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    let onChangeCallback = (e: ChangeEvent<{}>, val: number | number []) => {

        // @ts-ignore
        onChangeRange([...val])
    }

    return (
        <>
            DoubleRange

            <div style={{width: "300px", margin: "0 auto"}}>
                <Slider
                    value={value}
                    onChange={onChangeCallback}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                />
            </div>
        </>
    );
}

export default SuperDoubleRange;
