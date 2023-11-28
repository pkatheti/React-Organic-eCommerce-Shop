import { Spinner } from "@chakra-ui/react";

export default function LoadingComp() {
  return (
    <div className="flex flex-col h-[400px] justify-center items-center">
      <Spinner
        thickness="10px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.500"
        size="xl"
      />
    </div>
  );
}
