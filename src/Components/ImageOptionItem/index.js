import './index.css'

const ImageOptionItem = props => {
  const {optionInfo} = props
  const {optionId, isCorrect, text} = optionInfo

  const renderFlexStart = () => (
    <li className="image-list-item">
      <button type="button" className="image-list-start-button">
        .
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6i9UnoZz-Ser-qMMoAKzkcxRIfSehb8MDVSM1R0HzjdkgfcqX"
          className="image-option"
        />
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSi8Mcrif0cZZePl-G5M_5iorc3peVq4LL0K7WOdaclNYsLl5Kl"
          className="image-option"
        />
      </button>
    </li>
  )

  const renderSpaceBetween = () => (
    <li className="image-list-item">
      <button type="button" className="image-list-end-button">
        .
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6i9UnoZz-Ser-qMMoAKzkcxRIfSehb8MDVSM1R0HzjdkgfcqX"
          className="image-option"
        />
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSi8Mcrif0cZZePl-G5M_5iorc3peVq4LL0K7WOdaclNYsLl5Kl"
          className="image-option"
        />
      </button>
    </li>
  )

  const renderFlexEnd = () => (
    <li className="image-list-item">
      <button type="button" className="image-list-between-button">
        .
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6i9UnoZz-Ser-qMMoAKzkcxRIfSehb8MDVSM1R0HzjdkgfcqX"
          className="image-option"
        />
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSi8Mcrif0cZZePl-G5M_5iorc3peVq4LL0K7WOdaclNYsLl5Kl"
          className="image-option"
        />
      </button>
    </li>
  )

  const renderCenter = () => (
    <li className="image-list-item">
      <button type="button" className="image-list-center-button">
        .
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6i9UnoZz-Ser-qMMoAKzkcxRIfSehb8MDVSM1R0HzjdkgfcqX"
          className="image-option"
        />
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSi8Mcrif0cZZePl-G5M_5iorc3peVq4LL0K7WOdaclNYsLl5Kl"
          className="image-option"
        />
      </button>
    </li>
  )

  const renderBorderSolid = () => (
    <li className="image-list-item">
      <button type="button" className="image-list-center-button">
        .
        <img
          src="https://i.pinimg.com/originals/70/76/a5/7076a58c3b88e3073dbd0cac068a2958.jpg"
          className="image-option"
        />
      </button>
    </li>
  )

  const renderBorderDashed = () => (
    <li className="image-list-item">
      <button type="button" className="image-list-center-button">
        .
        <img
          src="https://e7.pngegg.com/pngimages/946/365/png-clipart-square-black-line-illustration-paper-br-page-teacher-educationalist-dotted-line-frame-border-angle.png"
          className="image-option"
        />
      </button>
    </li>
  )

  const renderBorderNone = () => (
    <li className="image-list-item">
      <button type="button" className="image-list-center-button">
        .
        <img
          src="https://t4.ftcdn.net/jpg/02/48/31/07/360_F_248310783_2Aaa9CfiwkiEH49hqIddC6R9cVdOk9Hd.jpg"
          className="image-option"
        />
      </button>
    </li>
  )

  const renderBorderDotted = () => (
    <li className="image-list-item">
      <button type="button" className="image-list-center-button">
        .
        <img
          src="https://clipart-library.com/img1/1413197.png"
          className="image-option"
        />
      </button>
    </li>
  )

  switch (text) {
    case 'flex start':
      return renderFlexStart()
    case 'flex end':
      return renderFlexEnd()
    case 'space between':
      return renderSpaceBetween()
    case 'flex center':
      return renderCenter()
    case 'border solid':
      return renderBorderSolid()
    case 'border dashed':
      return renderBorderDashed()
    case 'border none':
      return renderBorderNone()
    case 'border dotted':
      return renderBorderDotted()
    default:
      return null
  }
}

export default ImageOptionItem