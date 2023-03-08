import { Component } from 'react'
import { Offline, Online } from 'react-detect-offline'
import CardList from '../CardList'
import MoviesAppService from '../services/MoviesAppService'
import Spinner from '../Spinner'
import AlertMess from '../Alert'

import './App.css'

export default class App extends Component {
    moviesAppService = new MoviesAppService()

    state = {
        loading: true,
        error: false,
        elems: [],
    }

    componentDidMount() {
        this.getAllFilms()
    }

    getAllFilms = () => {
        this.moviesAppService
            .getResults()
            .then((body) => {
                this.setState({
                    loading: false,
                    elems: body,
                })
            })
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false,
        })
    }

    render() {
        const { elems, loading, error } = this.state

        const errorMessage = error ? <AlertMess /> : null
        const spinner = loading ? <Spinner /> : null
        const content = !loading ? <CardList elems={elems} loading={loading} /> : null
        return (
            <section className="films">
                <Online>
                    {errorMessage}
                    {spinner}
                    {content}
                </Online>
                <Offline>Ooops! Internet contention was interrupted :( </Offline>
            </section>
        )
    }
}
