import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onLogOut = () => {
    Cookies.remove('assess_jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="nav-element">
      <div className="logo-cont">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="77"
          height="40"
          viewBox="0 0 77 40"
          className="logo"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M47.4578 3.51605C54.5165 5.28741 60.5929 6.83668 60.9605 6.95895C61.3518 7.08901 59.6432 8.42211 56.844 10.1697C52.1947 13.0731 51.8073 13.2192 43.225 15.3129L34.3915 17.4681L22.1581 14.522C15.4297 12.9018 9.51403 11.4794 9.01182 11.3613C8.14831 11.1584 8.11296 11.4075 8.36528 15.9101C8.51251 18.5301 8.78323 21.0341 8.96726 21.4752C9.23266 22.1113 9.04766 22.2766 8.06986 22.2766C6.91384 22.2766 6.85669 22.1703 7.14775 20.5592C7.31823 19.6149 7.46788 17.0903 7.48047 14.9493L7.50323 11.0567L3.74992 10.1555C1.68584 9.6595 -0.00193553 9.1443 1.66593e-06 9.01058C0.00339175 8.79442 32.9289 0.425328 34.1396 0.332363C34.406 0.312213 40.3992 1.74469 47.4578 3.51605ZM75.5471 3.25456C75.5471 3.37088 74.1853 4.33304 72.5202 5.39229C68.0003 8.26869 58.695 14.8275 55.8662 17.1305C54.4981 18.2452 48.8511 23.6775 43.3176 29.2022C37.7845 34.7274 33.0872 39.1902 32.8795 39.1201C32.3526 38.941 12.1733 22.0742 12.3152 21.9313C12.3787 21.8672 16.5344 23.9678 21.5508 26.5983L30.6706 31.3816L32.647 30.0045C33.7343 29.2471 39.9115 24.7596 46.3744 20.0326C58.218 11.37 65.1967 7.04275 71.4306 4.49516C74.8967 3.07871 75.5471 2.8827 75.5471 3.25456ZM22.3043 6.28163C14.635 8.21924 13.8064 8.46837 14.1032 8.74909C14.3691 9.00097 29.8628 5.17842 30.3166 4.74978C30.9084 4.1897 29.5761 4.44478 22.3043 6.28163ZM21.5537 8.6607C19.4262 9.18277 17.965 9.69842 18.3069 9.80604C19.0368 10.0364 25.2106 8.57049 25.8823 8.00767C26.5076 7.48377 26.0964 7.54558 21.5537 8.6607ZM26.7502 9.11591C23.7514 9.88527 21.3992 10.6111 21.5237 10.7284C21.8932 11.0782 32.4446 8.46882 32.4446 8.02781C32.4446 7.80433 32.3899 7.64313 32.3235 7.66923C32.2572 7.69534 29.749 8.34609 26.7502 9.11591ZM33.6553 9.63935C30.459 10.46 27.2185 11.2797 26.4548 11.4602C25.691 11.6406 25.1772 11.8939 25.3138 12.0225C25.5487 12.2446 41.1799 8.63231 41.606 8.2577C42.209 7.72693 38.7811 8.32273 33.6553 9.63935ZM33.4732 11.9937C29.502 13.0571 28.2075 13.581 29.579 13.57C30.4764 13.5622 38.7976 11.3846 39.1298 11.07C39.6553 10.5731 37.4072 10.9404 33.4732 11.9937ZM77 12.6596C77 13.4491 76.7423 14.0371 76.3946 14.0417C75.0541 14.0604 67.3242 17.3939 63.1176 19.7674C57.6475 22.8541 50.2387 28.0298 44.6324 32.6804C41.3203 35.4276 40.9459 35.6561 42.857 33.763C48.4947 28.1773 59.2839 19.9864 65.8955 16.2719C68.4555 14.8339 76.1985 11.3228 76.8789 11.2912C76.9453 11.288 77 11.9039 77 12.6596ZM27.1173 17.0005L34.6239 18.7288L42.101 16.9048C50.7699 14.7904 51.1651 14.043 38.8857 22.9786C34.5706 26.1188 30.8159 28.6879 30.5418 28.6879C30.2677 28.6879 27.4234 27.3086 24.2217 25.6228L18.3999 22.5573V18.7045C18.3999 15.8153 18.5515 14.904 19.0053 15.0615C19.3385 15.1769 22.9887 16.0498 27.1173 17.0005ZM20.095 29.8438C23.456 32.8301 22.4337 32.1817 15.8491 27.1515C13.2596 25.1731 11.2657 23.3638 11.4183 23.1302C11.6943 22.708 14.5575 24.9235 20.095 29.8438ZM68.7669 25.2157C68.7669 26.2099 67.964 26.8561 66.7285 26.8561C63.5525 26.8561 54.1377 30.4652 46.9735 34.4284C45.5201 35.2325 45.1976 35.3228 46.0049 34.7004C47.6825 33.4062 55.8057 29.1102 59.3551 27.6397C63.229 26.0345 68.7669 24.6085 68.7669 25.2157ZM15.9479 28.7346C18.6285 30.5234 20.8214 32.0923 20.8214 32.2219C20.8214 32.3511 20.2984 32.1327 19.6591 31.737C19.0198 31.3408 16.7315 29.9569 14.574 28.6614C12.4164 27.3663 10.6512 26.1211 10.6512 25.8944C10.6512 25.2263 10.8531 25.3343 15.9479 28.7346Z"
          />
        </svg>
        <h1 className="nxt">
          NXT <span className="assess">Assess</span>
        </h1>
      </div>
      <button type="button" className="logout-button" onClick={onLogOut}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)