import { useState } from "react"
import DataDetails from "./DataDetails"

const Home = () => {

    const [city, setCity] = useState('')
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const key = "634bbb0418d7c7233fa229870f4a1a1e"

    const handleClick = (e) => {
        e.preventDefault()
        setData(null)
        setIsLoading(true)
        setError(null)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
        .then(response => {
            if (response.ok){
                return response.json()
            }
            else {
                throw Error("could not fetch data from that resource")
            }
        })
        .then(data => {
            setData(data)
            setIsLoading(false)
            setError(null)
        })
        .catch(err => {
            setIsLoading(false)
            setError('Invalid city name. Please try again.')
            setData()
        })
    }

    return (
        <div className="home">
            <form>
                <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Enter city" className="bg-gray-100"></input>
                <button onClick={handleClick}>Submit</button>
            </form>
            { isLoading && <div className="loader-wrapper m-[20px]"><div className="loader"></div></div> }
            { error && <div className="text-center text-white m-[20px]">{ error }</div> }
            { data && <DataDetails data={data}/> }
        </div>
    )
}

export default Home