import { Bar as NBar } from "@nivo/bar";
import * as React from "react";

interface Item {
    date: string;
    created: number;
    merged: number;
}

export type Data = Item[];

const colors = {
    created: "#339922",
    merged: "#ff2233",
};

export interface Options {
    animate?: boolean;
}

interface Node {
    id: "created" | "merged";
}

export default (props: { data: Data; options?: Options }) => {
    const data = props.data;
    const options = props.options || {};

    return (
        <NBar
            width={600}
            height={300}
            data={data}
            keys={["created", "merged"]}
            indexBy="date"
            margin={{
                top: 50,
                right: 130,
                bottom: 50,
                left: 60
            }}
            padding={0.5}
        
            borderRadius={5}
            colors="set3"
            colorBy={(node: Node) => {
                return colors[node.id];
            }}
            groupMode="grouped"
            defs={[
                {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "#38bcb2",
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "#eed312",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            borderColor="inherit:darker(1.6)"
            axisBottom={{
                orient: "bottom",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Date",
                legendPosition: "center",
                legendOffset: 36
            }}
            axisLeft={{
                orient: "left",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Count",
                legendPosition: "center",
                legendOffset: -70
            }}
            enableLabel={false}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor="inherit:darker(1.6)"
            animate={options.animate}
            motionStiffness={90}
            motionDamping={15}
            legends={[
                {
                    dataFrom: "keys",
                    anchor: "bottom-right",
                    direction: "column",
                    translateX: 120,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemsSpacing: 2,
                    symbolSize: 20
                }
            ]}
        />
    );
};
