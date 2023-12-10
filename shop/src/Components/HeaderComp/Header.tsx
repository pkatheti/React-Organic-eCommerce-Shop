import SmallNav from "./SmallNav";
import SearchNav from "./SearchNav";
import NavBar from "./NavBar";
import Hoc from "../Auth/Hoc";
import { useAppDispatch, useAppSelector } from "../ReduxStore/hooks.ts";
import { useToast, Button } from "@chakra-ui/react";


import { Decrement } from "../ReduxStore/CounterSlice.ts";
import {
  // useFetchBreedsQuery,
  // useCreateItemMutation,
  useDeleteItemMutation
} from "../ReduxStore/DemoCounterSlice.tsx";

function Header() {
  const dispatch = useAppDispatch();
  const {value,deleteMsg}: any = useAppSelector((state: any) => state.counter);
  // const { data = [], isFetching } = useFetchBreedsQuery(20);
  const [createItem, { isLoading }] = useDeleteItemMutation();
  const toast = useToast();
  //   const [createItem, mutationResult] = useCreateItemMutation({
  //     productname: "sadafdfad",
  //    price: "400",
  //    productimage: "asdfasdf",
  //    quantity: "4",
  //    usermail: "pradeepkatheti@gmail.com",
  //  });

  const clinkingEvent = async () => {
    
    try {
      await createItem({
      _id : "63905c75454a0ede7d4c1886"
      }).unwrap();
      toast({
        title: "An error occurred",
        description: "We couldn't save your post, try again!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } catch {
     
    }
    // console.log(deleteMsg);
    
    dispatch(Decrement(10));
  };
  return (
    <>
      <SmallNav />
      <SearchNav />
      <NavBar />
      <Button  isLoading={isLoading} onClick={clinkingEvent}>
        Clickme <>{value}</>
      </Button>
      <p>
        {deleteMsg?.status_Massage}
        </p>

      {/* {((data as any)?.resp || []).map((item: any) => (
        <p key={item._id}>{item.title}</p>
      ))} */}
    </>
  );
}

export default Hoc(Header);
