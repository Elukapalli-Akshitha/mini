import './index.css'

const NotFound = () => (
  <div className="not-found-route">
    <div className="cont">
      <img
        src="https://png.pngtree.com/png-vector/20210827/ourmid/pngtree-error-404-page-not-found-png-image_3832696.jpg"
        className="not-found-image"
        alt="Not Found"
      />
      <h1 className="not-found-head">Page Not Found</h1>
      <p className="not-found-para">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </div>
)

export default NotFound