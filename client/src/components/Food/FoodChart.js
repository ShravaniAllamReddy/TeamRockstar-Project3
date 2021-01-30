import React from 'react';
import { VictoryBar } from 'victory';
import { VictoryChart } from 'victory';
import { VictoryAxis} from 'victory';
import {VictoryTheme} from 'victory';

const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
];

class FoodChart extends React.Component {
    render() {
        return (
            <VictoryChart
                // adding the material theme provided with Victory
                theme={VictoryTheme.material}
                domainPadding={20}
            >
                <VictoryAxis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`$${x / 1000}k`)}
                />
                <VictoryBar
                    data={data}
                    x="quarter"
                    y="earnings"
                />
            </VictoryChart>
        );
    }
}

export default FoodChart;