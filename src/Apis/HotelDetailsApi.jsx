export async function fetchHotels(location) {
  try {
    const res = await fetch(
      `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${location}"}`,
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
    console.log("couln't fetch hotels", error);
  }
}

export async function fetchSingleHotel(hotelID) {
  try {
    const res = await fetch(
      `https://academics.newtonschool.co/api/v1/bookingportals/hotel/${hotelID}`,
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
    console.log("couln't fetch hotels", error);
  }
}
