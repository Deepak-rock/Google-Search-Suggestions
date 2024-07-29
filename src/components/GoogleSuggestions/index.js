// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSuggestion = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <img
          className="google-logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="input-container">
          <div className="search-input-container">
            <img
              className="search-icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
            />
            <input
              type="search"
              className="input"
              value={searchInput}
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
            />
          </div>
          <ul className="Suggestion-list">
            {searchResult.map(eachitem => (
              <SuggestionItem
                key={eachitem.id}
                suggestionsDetails={eachitem}
                updateSuggestion={this.updateSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
