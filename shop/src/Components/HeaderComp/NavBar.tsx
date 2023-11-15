
import {  Tab, TabList,   Tabs } from "@chakra-ui/react";
import Categories from "./Categories";
export default function NavBar() {
  return (
    <>
    <div className="w-[100%] h-14 px-[50px] bg-zinc-100 justify-between font-primary  inline-flex">
    <Tabs variant='unstyled'  height={'56px'} >
  <TabList>
  <Categories/>
 
    <Tab className="text-zinc-500  font-primary text-sm font-medium  leading-[21px] " _selected={{ color: 'green' ,h:'56px' }}>Home<img src='src/assets/imges/GroupDefault.png'  className=" px-[3.75px]  justify-center items-center flex"/></Tab>
    <Tab className="text-zinc-500  font-primary text-sm font-medium  leading-[21px] " _selected={{ color: 'green' , h:'56px'}}>Shop <img src='src/assets/imges/GroupDefault.png'  className=" px-[3.75px]  justify-center items-center flex"/></Tab>
    <Tab className="text-zinc-500  font-primary text-sm font-medium  leading-[21px] " _selected={{ color: 'green' ,h:'56px' }}>Blog <img src='src/assets/imges/GroupDefault.png'  className=" px-[3.75px]  justify-center items-center flex"/></Tab>
    <Tab className="text-zinc-500  font-primary text-sm font-medium  leading-[21px] " _selected={{ color: 'green' , h:'56px'}}> Pages <img src='src/assets/imges/GroupDefault.png'  className=" px-[3.75px]  justify-center items-center flex"/></Tab>
    <Tab className="text-zinc-500  font-primary text-sm font-medium  leading-[21px] " _selected={{ color: 'green' ,h:'56px' }}> About Us</Tab>
    <Tab className="text-zinc-500  font-primary text-sm font-medium  leading-[21px] " _selected={{ color: 'green' ,h:'56px' }}> Contact Us </Tab>
 
  </TabList>
 
</Tabs>

    
    <div className="justify-start items-center gap-2 flex">
        <img src='src/assets/imges/PhoneCall.png'  className="px-[3.75px]  justify-center items-center flex"/>
        <div className="text-zinc-900 text-sm font-medium font-primary leading-[21px]">(219) 555-0114</div>
    </div>
</div>
   
    </>

  )
}
