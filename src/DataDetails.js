const DataDetails = ({ data }) => {

    var sunrise_sec = data.sys.sunrise;
    var sunrise_date = new Date(sunrise_sec * 1000);
    var sunrise_time = sunrise_date.toLocaleTimeString()

    var sunset_sec = data.sys.sunset;
    var sunset_date = new Date(sunset_sec * 1000);
    var sunset_time = sunset_date.toLocaleTimeString();

    console.log(sunrise_date)

    return(
        <div className="details">
            <div className="details-main">
                <h1><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;{ data.name }, { data.sys.country }</h1>
                <div className="main">
                    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} className="-ml-7"></img>
                    <h2 className="main-descr">{ data.weather[0].main }</h2>
                    <h2 className="text-6xl font-bold">{ ~~data.main.temp }°C</h2>
                </div>
            </div>
            <div className="details-secondary">
                <div className="h-1/4 flex justify-between uppercase">
                    <div>
                        <p style={{fontSize: '14px'}}>Feels like</p>
                        <p className="text-2xl text-center font-bold">{~~data.main.feels_like}°C</p>
                    </div>
                    <div>
                        <p style={{fontSize: '14px'}}>Min Temp</p>
                        <p className="text-2xl text-center font-bold">{~~data.main.temp_min}°C</p>
                    </div>
                    <div>
                        <p style={{fontSize: '14px'}}>Max Temp</p>
                        <p className="text-2xl text-center font-bold">{~~data.main.temp_max}°C</p>
                    </div>
                </div>
                <div className="h-1/2 grid grid-cols-2">
                    <div className="flex justify-start items-center">
                        <i className="fa-solid fa-droplet text-3xl m-2"></i>
                        <div>
                            <p className="uppercase font-bold text-sm">Precipitation</p>
                            <p>0 %</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center">
                        <i className="fa-solid fa-droplet text-3xl m-2"></i>
                        <div>
                            <p className="uppercase font-bold text-sm">Humidity</p>
                            <p>{ data.main.humidity } %</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center">
                        <i className="fa-solid fa-wind text-3xl m-2"></i>
                        <div>
                            <p className="uppercase font-bold text-sm">Wind</p>
                            <p>{ data.wind.speed } m/s</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center">
                        <i className="fa-solid fa-wind text-3xl m-2"></i>
                        <div>
                            <p className="uppercase font-bold text-sm">Pressure</p>
                            <p cl>{ data.main.pressure } hPa</p>
                        </div>
                    </div>
                </div>
                <div className="h-1/4 flex flex-col justify-end">
                    <div>
                        <div className="flex justify-between items-center">
                            <p className="uppercase text-sm">Sunrise</p>
                            <p className="text-lg font-bold">{ sunrise_time }</p>
                        </div>
                    </div>
                    <d>
                        <div className="flex justify-between items-center">
                            <p className="uppercase text-sm">Sunset</p>
                            <p className="text-lg font-bold">{ sunset_time }</p>
                        </div>
                    </d>
                </div>
            </div>
        </div>
    )
}

export default DataDetails