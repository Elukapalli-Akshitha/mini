import DefaultOptionItem from '../DefaultOptionItem/index'
import ImageOptionItem from '../ImageOptionItem/index'
import SingleSelectItem from '../SingleSelectItem/index'
import './index.css'

const QuestionItem = props => {
  const {questionInfo} = props
  const {optionsType, options, questionText} = questionInfo

  const optionTypeConst = {
    default: 'DEFAULT',
    singleSelect: 'SINGLE_SELECT',
    image: 'IMAGE',
  }

  const renderDefault = () => (
    <li className="question-item">
      <div>
        <h1 className="question-text">{questionText}</h1>
        <hr className="line" />
        <ul className="default-options-list">
          {options.map(eachOption => (
            <DefaultOptionItem
              key={eachOption.optionId}
              optionInfo={eachOption}
            />
          ))}
        </ul>
      </div>
    </li>
  )

  const renderSingleSelect = () => (
    <li className="question-item">
      <div>
        <h1 className="question-text">{questionText}</h1>
        <hr className="line" />
        <select className="single-select-option">
          {options.map(eachOption => (
            <SingleSelectItem
              key={eachOption.optionId}
              optionInfo={eachOption}
            />
          ))}
        </select>
      </div>
    </li>
  )

  const renderImage = () => (
    <li className="question-item">
      <div>
        <h1 className="question-text">{questionText}</h1>
        <hr className="line" />
        <ul className="image-option-list">
          {options.map(eachOption => (
            <ImageOptionItem
              key={eachOption.optionId}
              optionInfo={eachOption}
            />
          ))}
        </ul>
      </div>
    </li>
  )

  switch (optionsType) {
    case optionTypeConst.default:
      return renderDefault()
    case optionTypeConst.image:
      return renderImage()
    case optionTypeConst.singleSelect:
      return renderSingleSelect()
    default:
      return null
  }
}

export default QuestionItem