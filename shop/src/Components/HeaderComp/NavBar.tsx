import {
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  Link,
  MenuOptionGroup,
  Tab,
  TabList,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import Categories from "./Categories";
import Hoc from "../Auth/Hoc";

 function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="w-[100%] h-14 px-[50px] bg-zinc-100 justify-between font-primary  inline-flex">
        <Tabs variant="unstyled" height={"56px"}>
          <TabList>
            <Categories />
            <Menu isOpen={isOpen} closeOnSelect={false}>
              <MenuButton onMouseOver={onOpen} onMouseLeave={onClose}>
                <Tab
                  className="text-zinc-500  font-primary text-sm font-medium  leading-[21px] "
                  _selected={{ color: "green", h: "56px" }}
                >
                  Home
                  <img
                    src="src/assets/imges/GroupDefault.png"
                    className=" px-[3.75px]  justify-center items-center flex"
                  />
                </Tab>
              </MenuButton>
              <MenuList
                className="w-[100px]"
                onMouseOver={onOpen}
                onMouseLeave={onClose}
              >
                <MenuOptionGroup type="checkbox" style={{ display: "flex" }}>
                  <MenuItemOption value="email">Email</MenuItemOption>
                  <MenuItemOption value="phone">Phone</MenuItemOption>
                  <MenuItemOption value="country">Country</MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>

            <Tab
              className="text-zinc-500  font-primary text-sm font-medium  leading-[21px] "
              _hover={{ color: "green", h: "56px" }}
              _selected={{ color: "green", h: "56px" }}
            >
              {" "}
              <Link className="flex justify-center items-center" href="/about">
                Shop{" "}
                <img
                  src="src/assets/imges/GroupDefault.png"
                  className=" px-[3.75px]  justify-center items-center flex"
                />
              </Link>
            </Tab>
            <Tab
              className="text-zinc-500  font-primary text-sm font-medium  leading-[21px] "
              _hover={{ color: "green", h: "56px" }}
              _selected={{ color: "green", h: "56px" }}
            >
              <Link className="flex justify-center items-center" href="/home">
                Blog{" "}
                <img
                  src="src/assets/imges/GroupDefault.png"
                  className=" px-[3.75px]  justify-center items-center flex"
                />
              </Link>
            </Tab>
            <Tab
              className="text-zinc-500  font-primary text-sm font-medium  leading-[21px] "
              _hover={{ color: "green", h: "56px" }}
              _selected={{ color: "green", h: "56px" }}
            >
              {" "}
              Pages{" "}
              <img
                src="src/assets/imges/GroupDefault.png"
                className=" px-[3.75px]  justify-center items-center flex"
              />
            </Tab>
            <Tab
              className="text-zinc-500  font-primary text-sm font-medium  leading-[21px] "
              _hover={{ color: "green", h: "56px" }}
              _selected={{ color: "green", h: "56px" }}
            >
              {" "}
              About Us
            </Tab>
            <Tab
              className="text-zinc-500  font-primary text-sm font-medium  leading-[21px] "
              _hover={{ color: "green", h: "56px" }}
              _selected={{ color: "green", h: "56px" }}
            >
              {" "}
              Contact Us{" "}
            </Tab>
          </TabList>
        </Tabs>

        <div className="justify-start items-center gap-2 flex">
          <img
            src="src/assets/imges/PhoneCall.png"
            className="px-[3.75px]  justify-center items-center flex"
          />
          <div className="text-zinc-900 text-sm font-medium font-primary leading-[21px]">
            (219) 555-0114
          </div>
        </div>
      </div>
    </>
  );
}


export default NavBar;