export async function fetchSortByPrice(location, price) {
  try {
    const res = await fetch(
      `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${location}"}&sort={"avgCostPerNight":${price}}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          projectID: "afznkxyf8vti",
        },
      }
    );
    return await res.json();
  } catch (error) {
    console.log("couldn't fetch hotels by price", error);
  }
}

export async function fetchFilteredHotels(location, filterItems) {
  try {
    const res = await fetch(
      `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${location}"}&filter=${filterItems}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          projectID: "afznkxyf8vti",
        },
      }
    );
    return await res.json();
  } catch (error) {
    console.log("couldn't fetch hotels by price", error);
  }
}
