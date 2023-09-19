
import { BarChart, Bar, LineChart as LChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const LineChart = () => {
    const data = [
        {name: 'p a', uv: 100, pv: 2500, amt: 2400},
        {name: 'p b', uv: 300, pv: 2900, amt: 2400},
        {name: 'p c', uv: 350, pv: 2400, amt: 2400},
        {name: 'p d', uv: 400, pv: 2700, amt: 2400},
        {name: 'p e', uv: 250, pv: 2000, amt: 2400},
        {name: 'p f', uv: 270, pv: 2500, amt: 2400},
        {name: 'P g', uv: 300, pv: 200, amt: 2400},
    ];

    return (
        <div className='grid md:grid-cols-2 mx-12 mt-5'>
           <div>
           <LChart width={300} height={200} data={data}> 
            <Line type="monotone" dataKey="pv" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="uv" stroke="#000000" />
            
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            </LChart>
           </div>

            <div>
            <BarChart width={300} height={200} data={data}><Bar dataKey="uv" fill="#8884d8" />
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
            </BarChart>
            </div>
        </div>
    );
};

export default LineChart;