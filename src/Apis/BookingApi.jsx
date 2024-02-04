export async function fetchFlightBookingInfo(flightID) {
  const apiUrl =
    "https://academics.newtonschool.co/api/v1/bookingportals/booking";
  const token = localStorage.getItem("token"); // Replace with your actual access token
  const projectID = "afznkxyf8vti"; // Replace with your actual project ID

  const requestBody = {
    bookingType: "flight",
    bookingDetails: {
      flighId: flightID, // Replace with the actual flight ID
      startDate: "2023-10-09T10:03:53.554+00:00",
      endDate: "2023-10-09T10:03:53.554+00:00",
    },
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: projectID,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();

    // Handle the response data as needed in your application
    return responseData;
  } catch (error) {
    console.error("Error while booking flight:", error);
    // Handle errors in your application
  }
}
