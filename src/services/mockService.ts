import https from "./http-common";

const getTopCreators = () => {
  return https().get("/users");
};

const getNFTCatalog = () => {
  return https().get("/photos?_limit=5");
};

const GithubService = {
  getTopCreators,
  getNFTCatalog,
};

export default GithubService;
