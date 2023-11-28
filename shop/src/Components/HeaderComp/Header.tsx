import SmallNav from './SmallNav'
import SearchNav from './SearchNav'
import NavBar from './NavBar'
import Hoc from '../Auth/Hoc'


 

 function Header(props:any) {
  return (
    <>
    <SmallNav/>
    <SearchNav/>
    <NavBar/>
    </>
  )
}


export default Hoc(Header);