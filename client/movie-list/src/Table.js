import React from 'react'

const Table = ({display, sortByYear, showWinners, displayWinners}) =>{
    return(
        <div className="centered container">
            <table className="table table-striped table-hover table-bordered">
                <tbody>
                <tr className="table-dark">
                    <th>Year&nbsp;&nbsp;
                        <button onClick={sortByYear}>▲▼</button>
                    </th>
                    <th>Film Name</th>
                    <th>Win/Lose&nbsp;&nbsp;
                    {displayWinners === false ? 
                    <button onClick={showWinners}>Show Winners ▼</button> 
                    : <button onClick={showWinners}>Show All ▲</button>}
                    </th>
                    <th>Country</th>
                </tr>

                    {display.map((films) =>(
                        films['films'].map((film, idx)=>(
                            <tr key={idx}>
                                <td>{films['year']}</td>
                                <td>{film["Film"]}</td>
                                <td>{film["Winner"] ? 'Yes' : 'No'}</td>
                                <td>{film["country"]}</td>
                            </tr>
                        ))
                    ))}
                </tbody>
            </table>
        </div>
       
    )
    
}

export default Table