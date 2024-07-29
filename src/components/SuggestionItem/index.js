// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsDetails, updateSuggestion} = props
  const {suggestion} = suggestionsDetails

  const onClickSuggestion = () => {
    updateSuggestion(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion">{suggestion}</p>
      <button className="arrow" type="button" onClick={onClickSuggestion}>
        <img
          className="arrow-icon"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
