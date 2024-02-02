export async function fetchOffers() {
  try {
    const res = await fetch(
      `https://academics.newtonschool.co/api/v1/bookingportals/offers`,
      {
        method: "GET",
        headers: {
          projectID: "afznkxyf8vti",
        },
      }
    );
    const jsonRes = await res.json();
    return jsonRes;
  } catch (error) {
    console.log("could not fetch OFFERs", error);
  }
}
