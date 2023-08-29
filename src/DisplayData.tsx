import { Countries, Country } from "./CountryInterface"

interface Props{
  data: Countries
}

const DisplayData = ({ data } :Props) => {

  return (
    <>
      {data?.countries.map((el : Country) =>(
        <div key={el.name}>
          <h2>{el.name}</h2>
          <p>{el.emoji}</p>
          <p>{el.native}</p>
        </div>
      ))}
    </>
  )
}

export default DisplayData