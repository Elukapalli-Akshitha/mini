import './index.css'

const SingleSelectItem = props => {
  const {optionInfo} = props
  const {optionId, isCorrect, text} = optionInfo

  return <option className="option-item">{text}</option>
}

export default SingleSelectItem