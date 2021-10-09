import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Table from './Table'

export const Movies = () =>{
    const [movies, setMovies] = useState([])
    const [winners, setWinners] = useState([])
    const [display, setDisplay] = useState([])
    const [displayWinners, setDisplayWinner] = useState(false)
    const [isLoading, setLoading] = useState(true)

    const getMovies = async () =>{
        const response = await axios.get('http://localhost:5000/movies')
        const results = response['data']['results']
        setMovies(results)
        setDisplay(results)
        sortWinners(results)
        setLoading(false)
    }

    useEffect(()=>{
        getMovies()
    }, [])

    const sortWinners = (movies) => {
       const winners = movies.map((films)=>{
           const newFilms = films['films'].filter(film=>{
                return film['Winner'] === true
           })
           return {films: newFilms, year: films['year']}
       })
       setWinners(winners)
    }

    const sortByYear = () => {
        const reversed = display.slice('').reverse()
        setDisplay(reversed)
    }

    const showWinners = () => {
        if(!displayWinners){
            setDisplayWinner(true)
            setDisplay(winners)
        }
        else {
            setDisplayWinner(false)
            setDisplay(movies)
        }
    }

    // const displayTable = (display) =>{
    //     return(
    //         <div className="centered container">
    //             <table className="table table-striped table-hover table-bordered">
    //                 <tbody>
    //                 <tr className="table-dark">
    //                     <th>Year&nbsp;&nbsp;
    //                         <button onClick={sortByYear}>▲▼</button>
    //                     </th>
    //                     <th>Film Name</th>
    //                     <th>Win/Lose&nbsp;&nbsp;
    //                     {displayWinners === false ? 
    //                     <button onClick={showWinners}>Show Winners ▼</button> 
    //                     : <button onClick={showWinners}>Show All ▲</button>}
    //                     </th>
    //                     <th>Country</th>
    //                 </tr>
    
    //                     {display.map(films =>(
    //                         films['films'].map(film=>(
    //                             <tr>
    //                                 <td>{films['year']}</td>
    //                                 <td>{film["Film"]}</td>
    //                                 <td>{film["Winner"] ? 'Yes' : 'No'}</td>
    //                                 <td>{film["country"]}</td>
    //                             </tr>
    //                         ))
    //                     ))}
    //                 </tbody>
    //             </table>
    //         </div>
           
    //     )
        
    // }
          

    return (
        <div className= "centered">
            {/* <div>{displayTable(display)}</div> */}
            {isLoading ? 
                <h2>Scraping in progress...</h2>
                :
                <Table 
                display={display} 
                sortByYear={sortByYear}
                showWinners={showWinners}
                displayWinners={displayWinners}
                />
            }
           

        </div>
        
    )
}