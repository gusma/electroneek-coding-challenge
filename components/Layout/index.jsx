import Header from '../Header'
import Footer from '../footer'

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto bg-blue-500">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
