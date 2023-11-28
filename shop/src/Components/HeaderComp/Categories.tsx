import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  useDisclosure,
} from "@chakra-ui/react";

export default function Categories() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu isOpen={isOpen} closeOnSelect={false}>
      <MenuButton onMouseOver={onOpen}>
        <div className="w-[218px] h-14 px-6 py-4 bg-green-600 justify-center items-center gap-2 inline-flex">
          <div className=" flex flex-row justify-center items-center gap-2 ">
            <div className="w-6 h-6">
              <img src="src/assets/imges/Menu.png" className="w-[18px] h-3.5" />
            </div>
            <div className="w-28  text-zinc-100  font-primary text-sm font-medium  leading-[21px]">
              All Categories
            </div>
            <img
              src="src/assets/imges/Group.png"
              className=" px-[3.75px]  justify-center items-center flex"
            />
          </div>
        </div>
      </MenuButton>
      <MenuList className="w-[60vw]" onMouseLeave={onClose}>
        <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
          <MenuItemOption value="asc">Ascending</MenuItemOption>
          <MenuItemOption value="desc">Descending</MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup type="checkbox" style={{ display: "flex" }}>
          <MenuItemOption w="20%" value="email">
            Email
          </MenuItemOption>
          <MenuItemOption w="20%" value="phone">
            Phone
          </MenuItemOption>
          <MenuItemOption w="20%" value="country">
            Country
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}
