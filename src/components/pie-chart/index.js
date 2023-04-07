import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
    const bindPieChartData = (key) => {
        return data.map((item) => {
            return item[key]
        })
    }

    const pieData = {
        labels: bindPieChartData('label'),
        datasets: [
            {
                label: 'Population',
                data: bindPieChartData('value'),
                backgroundColor: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'indigo', 'violet', 'brown', 'purple', 'pink']
            }
        ]
    };


    return (
        <Pie datasetIdKey='id'
            width={500}
            data={pieData} />
    )
}


export default PieChart