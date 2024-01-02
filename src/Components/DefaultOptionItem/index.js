import './index.css'

const DefaultOptionItem = props => {
  const {optionInfo} = props
  const {optionId, isCorrect, text} = optionInfo

  return (
    <li className="default-option-item">
      <button className="default-option-button">{text}</button>
    </li>
  )
}

export default DefaultOptionItem