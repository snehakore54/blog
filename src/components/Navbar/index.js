import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom';


import Cookies from 'js-cookie'
import CartContext from '../../context/CartContext'

import './index.css'

const Navbar = withRouter((props) => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const cartCountFunction = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const lengthCart = cartList.length
        return (
          <>
            {cartList.length > 0 ? (
              <span className="cart">{lengthCart}</span>
            ) : null}
          </>
        )
      }}
    </CartContext.Consumer>
  )

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://th.bing.com/th/id/R.a23a5414565a9ebbf95857b505c4a34d?rik=%2fLFHi%2fCu208UfQ&riu=http%3a%2f%2fblog.gogym.pt%2fwp-content%2fuploads%2f2018%2f09%2fgogym-blog-logo.jpg&ehk=Dqre46cRqXW0Ck7Ky%2bQIj7gL6bIHXVKGDWTqn2UxRzQ%3d&risl=&pid=ImgRaw&r=0"
              alt="website logo"
            />
          </Link>

          <button type="button" className="nav-mobile-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-image"
              onClick={onClickLogout}
            />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://th.bing.com/th/id/R.a23a5414565a9ebbf95857b505c4a34d?rik=%2fLFHi%2fCu208UfQ&riu=http%3a%2f%2fblog.gogym.pt%2fwp-content%2fuploads%2f2018%2f09%2fgogym-blog-logo.jpg&ehk=Dqre46cRqXW0Ck7Ky%2bQIj7gL6bIHXVKGDWTqn2UxRzQ%3d&risl=&pid=ImgRaw&r=0"
              alt="logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/products" className="nav-link">
                Contact
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                About Us {cartCountFunction()}
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-image"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/products" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-image"
              />
              <span>{cartCountFunction()}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
})

export default Navbar