export async function fetchFlights(source, destination, day) {
  try {
    const flightsUrl = `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${source}","destination":"${destination}"}&day=${day}`;
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

export async function fetchFlightsFilterByStops(
  source,
  destination,
  day,
  stops
) {
  try {
    const flightsUrl = `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${source}","destination":"${destination}"}&day=${day}&filter={"stops":${stops}}`;
    const res = await fetch(flightsUrl, {
      method: "GET",
      headers: {
        projectID: "afznkxyf8vti",
      },
    });
    const jsonRes = await res.json();
    return jsonRes;
  } catch (error) {
    console.log("couldn't fetch fetchFlightsFilterByStops api", error);
  }
}

export async function fetchFlightsByDepartTime(
  source,
  destination,
  day,
  timeRangeStart,
  timeRangeEnd
) {
  const flightsUrl = `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${source}","destination":"${destination}"}&day=${day}&filter={"departureTime":{"$lte":"${timeRangeEnd}","$gte":"${timeRangeStart}"}}`;
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

export async function fetchFlightsByStopsAndDepartTime(
  source,
  destination,
  day,
  timeRangeStart,
  timeRangeEnd,
  stop
) {
  const flightsUrl = `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${source}","destination":"${destination}"}&day=${day}&filter={"departureTime":{"$lte":"${timeRangeEnd}","$gte":"${timeRangeStart}"},"stops":${stop}}`;
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

// testing

export async function fetchFilteredFlights(
  source,
  destination,
  day,
  filterItems
) {
  const flightsUrl = `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${source}","destination":"${destination}"}&day=${day}&filter=${filterItems}`;
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
