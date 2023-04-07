
import { useEffect, useState } from "react"
import Button from "./components/button"
import Dropdwon from "./components/dropdown"
import Search from "./components/search"
import PopulationTable from "./components/table"
import { COUNTRY_URL, POPULATION_FILTER_OPTIONS, POPULATION_TABLE_ATTRIBUTES } from "./utils/constants"
import axios from 'axios'
import "./App.css"
import PieChart from "./components/pie-chart"

function App() {

  const [searchValue, setSearchedValue] = useState("")
  const [countryList, setCountryList] = useState([])
  const [filteredList, setFiltered] = useState([])
  const [isLoading, setIsloading] = useState(false)

  const handleShowAllContries = () => {
    setIsloading(true)
    getCountriesList()
  }

  const getCountriesList = () => {
    axios.get(COUNTRY_URL).then((data) => {
      if (data?.status === 200) {
        setCountryList(data.data)
        setFiltered(data.data)

      } else {
        // Handle Error
      }
      setIsloading(false)
    }).catch((err) => {
      setIsloading(false)
      // Handle Error
    })
  }

  const handlePopulationFilter = (e: any) => {
    if (e.target.value) {
      const sortedList = countryList.filter((x: any) => parseInt(x.population) < parseInt(e.target.value))
      setFiltered(sortedList)
    } else {
      setFiltered(countryList)
    }
  }

  useEffect(() => {
    if (searchValue) {
      handleSearch()
    } else {
      setFiltered(countryList)
    }
  }, [searchValue])

  const handleSearch = () => {
    const filteredList = countryList.filter((x: any) => (x.name.toLowerCase()).indexOf(searchValue.toLowerCase()) >= 0)
    setFiltered(filteredList)
  }

  const getTop10PopulatedCountry = () => {
    const validCountryList = countryList.filter((x: any) => x.population)
    let sortedList = validCountryList.sort((x: any, y: any) => {
      return parseInt(y.population) > parseInt(x.population) ? 1 : -1
    })

    if (sortedList.length > 10) {
      sortedList = sortedList.slice(0, 10)
      return sortedList.map((item: any) => {
        return {
          value: item.population,
          label: item.name
        }
      })
    }
    return sortedList
  }

  return (
    <div className="app">
      <Button label="Show All Countries" handleClick={() => handleShowAllContries()} />
      <div className="app-inner">
        <Search searchValue={searchValue} handleChange={(e: any) => setSearchedValue(e.target.value)} />
        <Dropdwon disabled={!filteredList?.length || isLoading} placeholder="Population" options={POPULATION_FILTER_OPTIONS} handleSelect={(e: any) => handlePopulationFilter(e)} />
      </div>
      <div className="app-chartinner">
        <div><PopulationTable isLoading={isLoading} data={filteredList} attributes={POPULATION_TABLE_ATTRIBUTES} /></div>
        <div><PieChart data={getTop10PopulatedCountry()} /></div>
      </div>
    </div>
  )
}

export default App
