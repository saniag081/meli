import Header from "../Header";
import Breeadcrumb from "../Breadcrumb";
import './Layout.scss'

function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <Header />
        <Breeadcrumb />
        { children }
      </div>
    </>
  )
}

export default Layout;