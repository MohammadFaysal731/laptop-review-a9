import { Bar, BarChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';


const DashBoard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className="">
            <BarChart width={500} height={400} data={data}>
                <Bar dataKey={"month"} fill="#8884d8" />
                <XAxis dataKey={'sell'}></XAxis>
                <YAxis dataKey={'revenue'}></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
            <PieChart width={400} height={400}>
                <Pie data={data} dataKey={"revenue"} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data} dataKey={'sell'} cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default DashBoard;