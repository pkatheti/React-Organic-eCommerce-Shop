import SmallNav from './SmallNav'
import SearchNav from './SearchNav'
import NavBar from './NavBar'
import Hoc from '../Auth/Hoc'
import { useAppDispatch, useAppSelector } from '../ReduxStore/hooks.ts'

import { Increment } from '../ReduxStore/CounterSlice.ts'
 

 function Header() {
  const dispatch = useAppDispatch()
  const value : any = useAppSelector((state:any) => state.counter.value)

  function clinkingEvent() {
    console.log('pradeep');
    
    dispatch(Increment())
  }
  return (
    <>
    <SmallNav/>
    <SearchNav/>
    <NavBar/>
    <button onClick={clinkingEvent}>Clickme <>{value}</></button>
    </>
  )
}


export default Hoc(Header);