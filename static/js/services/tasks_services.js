export const getTasks = () => {
  return fetch("/getTasks", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: {},
  }).then((response) => response.json())
  .then(data => {
      console.log(data);
  })
  .catch(error => console.log('error: ', error));
};
