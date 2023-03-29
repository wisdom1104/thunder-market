import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";

const DetailList = () => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const data = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/products`
      );
      return data.data;
    },
  });
  return <></>;
};

export default DetailList;
