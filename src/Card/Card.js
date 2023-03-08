// import { Component } from 'react'
import { format } from 'date-fns'

import './Card.css'

function Card({ title, date, overview, genre, img }) {
    function minify(text, length) {
        const res = `${text.slice(0, text.indexOf(' ', length))}...`
        return res
    }

    return (
        <div className="card">
            <img alt="img" className="cardImg" src={`https://image.tmdb.org/t/p/original${img}`} />
            <div className="cardInfo">
                <h1 className="cardTitle">{title}</h1>
                <p className="cardData">{date ? format(new Date(date), 'MMMM d, yyyy') : ''}</p>
                <div className="cardGenres">
                    <p>{genre[0]}</p>
                    <p>{genre[1]}</p>
                </div>
                <p className="cardDescription">{minify(overview, 150)}</p>
            </div>
        </div>
    )
}

export default Card

// let { id, title, date, overview, genre, img, loading } = this.props
//         overview = minify(overview, 150)
//         const spinner = loading ? <Spinner /> : null
//         const content = !loading ? (
//             <FilmView id={id} title={title} date={date} overview={overview} genre={genre} img={img} />
//         ) : null

//         return (
//             <div className="card">
//                 {spinner}
//                 {content}
//             </div>
//         )
//     }
// }

// const FilmView = ({ id, title, date, overview, genre, img }) => {
//     return (
//         <React.Fragment>
//             <img className="cardImg" src={`https://image.tmdb.org/t/p/original${img}`}></img>
//             <div className="cardInfo">
//                 <h1 className="cardTitle">{title}</h1>
//                 <p className="cardData">{date ? format(new Date(date), 'MMMM d, yyyy') : ''}</p>
//                 <div className="cardGenres">
//                     <p>{genre[0]}</p>
//                     <p>{genre[1]}</p>
//                 </div>
//                 <p className="cardDescription">{overview}</p>
//             </div>
//         </React.Fragment>
//     )
// }
