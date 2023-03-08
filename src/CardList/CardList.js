// import { Component } from 'react'
import Card from '../Card/Card'

import './CardList.css'

function CardList({ elems }) {
    const elements = elems.map((el) => (
        <Card
            id={el.id}
            key={el.id}
            title={el.original_title}
            overview={el.overview}
            date={el.release_date}
            genre={el.genre_ids}
            img={el.backdrop_path}
        />
    ))

    return <ul className="cards-list">{elements}</ul>
}

export default CardList

// let {
//     id ,
//     original_title,
//     overview ,
//     release_date ,
//     genre_ids,
//     backdrop_path ,
// } = el

//     return (

// })
