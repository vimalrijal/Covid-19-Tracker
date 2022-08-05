import React,{useEffect, useState} from 'react'

const Statewise = () => {

    const [data, setdata] = useState([])

    const getCovidData = async() =>{
        const res = await fetch('https://data.covid19india.org/data.json')
        const actualData = await res.json()
        setdata(actualData.statewise)
        console.log(data);
    }

    useEffect(() => {
     getCovidData()
    }, [])
    

  return (
    <>
        <div className='container-fluid mt-5'>
            <div className='main-heading'>
                <h1 className='mb-5 text-center'>Live COVID-19 Tracker</h1>
            </div>

            <div className='table-responsive'>
            <table className="table">
                <thead className="thead-dark bg-dark text-white">
                    <tr>
                    <th scope="col">State</th>
                    <th scope="col">confirmed</th>
                    <th scope="col">recover</th>
                    <th scope="col">death</th>
                    <th scope="col">active</th>
                    <th scope="col">updated</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        data.map((item, index)=>(
                            <tr key={index}>
                                <th scope="row">{item.state}</th>
                                <th scope="row">{item.confirmed}</th>
                                <th scope="row">{item.recovered}</th>
                                <th scope="row">{item.deaths}</th>
                                <th scope="row">{item.active}</th>
                                <th scope="row">{item.lastupdatedtime}</th>
                            </tr>
                        ))
                    }
                
                </tbody>
            </table>
            </div>
        </div>
        
    </>
  )
}

export default Statewise