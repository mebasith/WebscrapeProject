import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Table from './Table'

export const Movies = () =>{
    const [movies, setMovies] = useState([])
    const [winners, setWinners] = useState([])
    const [display, setDisplay] = useState([])
    const [displayWinners, setDisplayWinner] = useState(false)
    const [isLoading, setLoading] = useState(true)

    //the below function will be run in the useEffect function to retrieve the data and set the initial states
    const getMovies = async () =>{
        const response = await axios.get('http://localhost:5000/movies')
        const results = response['data']['results']
        setMovies(results)
        setDisplay(results)
        sortWinners(results)
        setLoading(false)
    }

    //the below useEffect function will retrieve the data upon the component's initial mount
    useEffect(()=>{
        getMovies()
    }, [])

    //the below function will pull the set of films that won oscars
    const sortWinners = (movies) => {
       const winners = movies.map((films)=>{
           const newFilms = films['films'].filter(film=>{
                return film['Winner'] === true
           })
           return {films: newFilms, year: films['year']}
       })
       setWinners(winners)
    }

    //the below function will handle reversing the chronological order of the films
    const sortByYear = () => {
        const reversed = display.slice('').reverse()
        setDisplay(reversed)
    }

    //the below function handles whether or not to show just the winners
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

    return (
        <div className= "centered">
            {isLoading ? 
                <h3>Scraping in progress...</h3>
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