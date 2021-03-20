import React from 'react'
import './App.css';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      poster: '',
      comment: '',
    }
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm(e) {
    e.preventDefault()
    axios.post("https://post-a-form.herokuapp.com/api/movies/", this.state)
      .then(()=> alert('film enregistré'))
      .catch(err=> alert(`error: ${err}`))
  }

  render() {
    return (
      <div className="FormMovie">
        <h1>Enregistrez vos films preferés</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Nom de film</legend>
            <div className="form-data">
              <label htmlFor="title">Nom</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Url</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Commentaire</label>
              <input
                type="text-area"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default App;
