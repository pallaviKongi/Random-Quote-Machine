const getQuote = () => {
  const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
  return fetch(url, {
    method: "GET",
    headers: new Headers({
      Accept: "application/json",
    }),
  }).then((response) => response.json());
};
export default getQuote;
