import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "@/types";

export const useProducts = (limit?: number) => {
  return useQuery({
    queryKey: ["products", limit],
    queryFn: async () => {
      const url = limit
        ? `https://fakestoreapi.com/products?limit=${limit}`
        : "https://fakestoreapi.com/products";
      const { data } = await axios.get<Product[]>(url);
      return data;
    },
  });
};
