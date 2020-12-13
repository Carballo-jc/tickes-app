export const getLastTickets = async () => {
  const resp = await fetch("http://localhost:8080/ultimos");

  const data = await resp.json();
  console.log(data.ultimos);
  return data.ultimos;
};
