import SmallNav from "./SmallNav";
import SearchNav from "./SearchNav";
import NavBar from "./NavBar";
import Hoc from "../Auth/Hoc";
import { useAppDispatch, useAppSelector } from "../../ReduxStore/hooks.ts";
import { useToast, Button } from "@chakra-ui/react";
import { Decrement } from "../../ReduxStore/features/CounterSlice.ts";
import { useDeleteItemMutation } from "../../ReduxStore/ApiJunction/apiEndPoints/TestingApiSlice.ts";

function Header() {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [deleteItem, { isLoading }] = useDeleteItemMutation();
  const { value, deleteMsg }: any = useAppSelector(
    (state: any) => state.counter
  );

  const clinkingEvent = async () => {
    try {
      await deleteItem({
        _id: "63905c75454a0ede7d4c1886",
      }).unwrap();
    } catch {
      toast({
        title: "An error occurred",
        description: "We couldn't save your post, try again!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    dispatch(Decrement(10));
  };

  return (
    <>
      <SmallNav />
      <SearchNav />
      <NavBar />
      <Button isLoading={isLoading} onClick={clinkingEvent}>
        Clickme <>{value}</>
      </Button>
      <p>{deleteMsg?.status_Massage}</p>
    </>
  );
}

export default Hoc(Header);
