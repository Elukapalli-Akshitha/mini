import './index.css'

const QuestionNumberItem = props => {
  const {questionNumberInfo, onQuestionNumClick, isActive} = props
  const {numId, displayText} = questionNumberInfo

  const onClickQuestionNumber = () => {
    onQuestionNumClick(numId)
  }

  return (
    <button
      type="button"
      className={
        isActive ? 'question-number-active-button' : 'question-number-button'
      }
      onClick={onClickQuestionNumber}
    >
      <li className="question-number-item">{displayText}</li>
    </button>
  )
}

export default QuestionNumberItem