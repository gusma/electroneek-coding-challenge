import Header from '../Header'
import Footer from '../footer'

const Layout = ({ children }) => {
  return (
    <div className="scroll overflow-x-hidden bg-blue-900 bgimage">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
