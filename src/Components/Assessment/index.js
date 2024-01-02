import {Component} from 'react'
import Header from '../Header/index'
import QuestionItem from '../QuestionItem/index'
import QuestionNumberItem from '../QuestionNumberItem/index'
import './index.css'

const questionNumberList = [
  {
    numId: '4c08f8e2-d69a-4cfa-9245-b76bdf3588d1',
    displayText: '1',
  },
  {
    numId: '4b38d184-6c53-4fa8-9176-4bba17f6a639',
    displayText: '2',
  },
  {
    numId: '68c01ea3-0fb2-4c79-bffd-d3dd90ecbf2f',
    displayText: '3',
  },
  {
    numId: 'ed321e23-faa3-451f-a093-9ad826c2e186',
    displayText: '4',
  },
  {
    numId: 'b563e313-05b8-4ba6-a69b-6614bd339f70',
    displayText: '5',
  },
  {
    numId: 'f8f9ed4d-0161-4709-8639-e999321f1488',
    displayText: '6',
  },
  {
    numId: 'f3b5738d-c73e-40b6-8512-af33e1a9cd4d',
    displayText: '7',
  },
  {
    numId: '3c3cc60c-2d4c-4431-978a-fd2cea112f33',
    displayText: '8',
  },
  {
    numId: '02b2e3a5-c997-4fb4-a9b6-54d5636a7a59',
    displayText: '9',
  },
  {
    numId: '6eff9f7d-9d80-4e3d-9dbd-95d063554eba',
    displayText: '10',
  },
]

class Assessment extends Component {
  state = {
    questionData: [],
    activeTab: questionNumberList[0].numId,
  }

  componentDidMount() {
    this.getQuestions()
  }

  getQuestions = async () => {
    const response = await fetch('https://apis.ccbp.in/assess/questions')
    const data = await response.json()
    const updatedData = data.questions.map(eachQuestion => ({
      id: eachQuestion.id,
      optionsType: eachQuestion.options_type,
      options: eachQuestion.options.map(eachOption => ({
        optionId: eachOption.id,
        isCorrect: eachOption.is_correct,
        text: eachOption.text,
      })),
      questionText: eachQuestion.question_text,
    }))
    this.setState({questionData: updatedData})
  }

  onQuestionNumClick = numId => {
    this.setState({activeTab: numId})
  }

  getFilteredData = questionData => {
    const {activeTab} = this.state
    const filteredData = questionData.filter(
      eachData => eachData.id === activeTab,
    )
    return filteredData
  }

  render() {
    const {questionData, activeTab} = this.state
    const filteredData = this.getFilteredData(questionData)
    console.log(questionData)

    return (
      <>
        <Header />
        <div className="assessment-main-container">
          <ul className="question-container">
            {filteredData.map(eachItem => (
              <QuestionItem key={eachItem.id} questionInfo={eachItem} />
            ))}
          </ul>
          <div className="part2">
            <div className="time-container">
              <p className="time-left">Time Left</p>
              <p className="time">00:10:00</p>
            </div>
            <div className="question-count-container">
              <div className="questions-count">
                <div className="answered-questions-container">
                  <div className="answered-questions-count-container">
                    <p className="answered-questions-count">0</p>
                  </div>
                  <p className="answered-questions">Answered Questions</p>
                </div>
                <div className="answered-questions-container">
                  <div className="unanswered-questions-count-container">
                    <p className="unanswered-questions-count">0</p>
                  </div>
                  <p className="answered-questions">Unanswered Questions</p>
                </div>
              </div>
              <hr />
              <ul className="question-number-list">
                {questionNumberList.map(eachNum => (
                  <QuestionNumberItem
                    key={eachNum.numId}
                    questionNumberInfo={eachNum}
                    onQuestionNumClick={this.onQuestionNumClick}
                    isActive={activeTab === eachNum.numId}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Assessment