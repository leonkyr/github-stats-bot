import { Line } from "@/shared/api/chart/line"
import { storiesOf } from "@storybook/react"
import * as React from "react"
import data from "./calendar.data"

storiesOf("heatmap calendar", module).add("default", () => {
    return <Line data={data} />
})
