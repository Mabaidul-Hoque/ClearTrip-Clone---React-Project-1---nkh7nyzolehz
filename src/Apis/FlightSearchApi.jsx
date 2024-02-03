export async function fetchFlights(source, destination, day, limit, page) {
  try {
    const flightsUrl = `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${source}","destination":"${destination}"}&day=${day}&limit=${limit}&page=${page}`;
    const res = await fetch(flightsUrl, {
      method: "GET",
      headers: {
        projectID: "afznkxyf8vti",
      },
    });
    const jsonRes = await res.json();
    return jsonRes;
  } catch (error) {
    console.log("couldn't fetch api", error);
  }
}

export async function fetchFilteredFlights(
  source,
  destination,
  day,
  limit,
  page,
  filterItems
) {
  const flightsUrl = `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${source}","destination":"${destination}"}&day=${day}&limit=${limit}&page=${page}&filter=${filterItems}`;
  try {
    const res = await fetch(flightsUrl, {
      method: "GET",
      headers: {
        projectID: "afznkxyf8vti",
      },
    });
    return await res.json();
  } catch (error) {
    console.log("clouldn't fetch sort by depart time", error);
  }
}
