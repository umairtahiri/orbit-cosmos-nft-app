import { useQuery } from "react-query";
import MockService from "../services/mockService";
import { APIHookProps } from "./types";

export function useTopCreatorsQuery(props: APIHookProps) {
  const { onError } = props;
  const fetchTopCreators = async () => {
    const response = await MockService.getTopCreators();
    return response?.data;
  };
  return useQuery("top-creatores", fetchTopCreators, {
    onError,
  });
}

export function useNFTCatalogsQuery(props: APIHookProps) {
  const { onError } = props;
  const fetchNFTS = async () => {
    const response = await MockService.getNFTCatalog();
    return response?.data;
  };
  return useQuery("nfts", fetchNFTS, {
    onError,
  });
}
