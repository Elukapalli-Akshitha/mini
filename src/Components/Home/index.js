import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'
import Header from '../Header/index'
import './index.css'

const Home = () => {
  const token = Cookies.get('assess_jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="home-route">
        <div className="assessment-start-container">
          <h1 className="ass-start-head">Instructions</h1>
          <div className="rules">
            <p className="rule-name">
              <span className="rule-number">1.</span>
              Total Questions: <span className="rule-p2">10</span>.
            </p>
            <p className="rule-name">
              <span className="rule-number">2.</span>
              Types of Questions: <span className="rule-p2">MCQs</span>
            </p>
            <p className="rule-name">
              <span className="rule-number">3.</span>
              Duration: <span className="rule-p2">10 Mins</span>
            </p>
            <p className="rule-name">
              <span className="rule-number">4.</span>
              Marking Scheme:{' '}
              <span className="rule-p2">
                Every Correct response, get 1 mark
              </span>
            </p>
            <p className="rule-p2">
              <span className="rule-number">5.</span>
              All the progress will be lost, if you reload during the assessment
            </p>
          </div>
          <Link to="/assessment">
            <button type="button" className="start-assessment-button">
              Start Assessment
            </button>
          </Link>
        </div>
        <div className="image-container">
          <img
            src="https://png.pngtree.com/png-vector/20221127/ourmid/pngtree-online-tests-png-image_6481433.png"
            className="home-image"
            alt="assessment"
          />
        </div>
      </div>
    </>
  )
}

export default Home