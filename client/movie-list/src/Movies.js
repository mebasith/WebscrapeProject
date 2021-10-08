import React, {useEffect, useState} from 'react'

export const Movies = () =>{
    const [movies, setMovies] = useState([])
    const [winners, setWinners] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/movies")
        .then(response=> response.json())
        .then(data => setMovies(data["results"]))
    }, [])

    const sortWinners = () => {
       const winners = movies.map((films)=>{
           const newFilms = films['films'].filter(film=>{
                return film['Winner'] === true
           })
           return {films: newFilms, year: films['year']}
       })
        setMovies(winners)
        //setWinners(winners)
    }

    const sortYears = () => {
        const reversed = movies.slice('').reverse()
        setMovies(reversed)
    }

    const displayTable = () =>{
        return(
            <div className="centered">
           <table>
             <tbody>
            <tr>
                <th>Year</th>
                <th>Film Name</th>
                <th>Win/Lose</th>
                <th>Country</th>
            </tr>
                
                {movies.map(films =>(
                    films['films'].map(film=>(
                        <tr>
                            <td>{films['year']}</td>
                            <td>{film["Film"]}</td>
                            <td>{film["Winner"] ? 'Yes' : 'No'}</td>
                            <td>USA</td>
                        </tr>
                    ))
                ))}
            
            
    
            
            </tbody>
          </table>
          </div>
        )
        
    }
          

    return (
        <div>
            <button onClick={sortWinners}>Winners</button>
            <button onClick={sortYears}>Years</button>
            <h1>Testing</h1>
            <div>{displayTable()}</div>
        </div>
        
    )
}