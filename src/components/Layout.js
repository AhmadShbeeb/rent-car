import { Header1, Header2, Footer } from '.'

const Layout = ({ children }) => {
  return (
    <div>
      <Header1 />
      <Header2 />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
