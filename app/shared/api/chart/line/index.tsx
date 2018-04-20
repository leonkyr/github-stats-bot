import { Line as NLine } from "@nivo/line";
import { DOMElement } from "react";
import * as React from "react";
import { render } from "react-dom";

export interface Interval {
    day: string | Date;
    value: number;
}

export interface Options {
    from?: string | Date;
    to?: string | Date;
    isInteractive?: boolean;
}

export const Line = (props: { data: Interval[]; options?: Options }) => {
    const data = props.data;
    const options = props.options || {};

    return (
        <NLine
            width={600}
            height={300}
            data={data}
            from="2016-01-01"
            to="2016-01-31"
            emptyColor="#eeeeee"
            colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
            margin={{
                top: 100,
                right: 30,
                bottom: 60,
                left: 30
            }}
            yearSpacing={40}
            monthBorderColor="#ffffff"
            monthLegendOffset={10}
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
                {
                    anchor: "bottom-right",
                    direction: "row",
                    translateY: 36,
                    itemCount: 4,
                    itemWidth: 34,
                    itemHeight: 36,
                    itemDirection: "top-to-bottom"
                }
            ]}
            isInteractive={options.isInteractive}
        />
    );
};

export default (
    target: DOMElement<any, any>,
    data: Interval[],
    options: Options = {}
) => {
    render(<Line data={data} options={options} />, target);
};
