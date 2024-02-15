import React, { useEffect } from "react";
import "./HotelCheckoutPage.css";
import FlightBookingNavbar from "../../../../FlightsPage/FlightResultsPage/flight-booking-page/flight-booking-navbar/FlightBookingNavbar";
import { Box, Stack, Typography } from "@mui/material";
import HotelPriceCards from "./HotelPriceCards";
import { useParams } from "react-router-dom";
import { useHotelContext } from "../../../../../UseContext/HotelDetailsProvider";
import { fetchSingleHotel } from "../../../../../Apis/HotelDetailsApi";

const HotelCheckoutPage = () => {
  const { hotelID } = useParams();
  const { hotelDetails, checkInOutDetails } = useHotelContext();
  const { singleHotel, setSingleHotel } = hotelDetails;
  const { checkInDay, checkOutDay } = checkInOutDetails;

  // console.log({
  //   checkInDay,
  //   checkOutDay,
  //   roomid: localStorage.getItem("roomID"),
  // });

  useEffect(() => {
    fetchSingleHotel(hotelID).then((response) => {
      setSingleHotel(response.data);
    });
  }, [hotelID]);

  return (
    <div>
      <FlightBookingNavbar />
      <Box mt={2} mb={4} sx={{ borderBottom: "1px solid #E6E6E6" }}></Box>
      <main id="h-booking-main">
        {/* hotel booikng details content */}
        <div id="h-booking-content">
          {/* header */}
          <Stack
            mb={4}
            mt={{
              xs: -3,
              sm: 0,
            }}
            flexDirection={"row"}
            alignItems={"center"}
            gap={2}
            width={{
              xs: "90vw",
              md: "60vw",
            }}
          >
            <div className="number-circle">
              <span>1</span>
            </div>
            <Typography
              fontSize={{
                xs: "24px",
              }}
              fontWeight={600}
            >
              Review your itinerary
            </Typography>
          </Stack>

          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            modi qui laudantium numquam, adipisci perspiciatis exercitationem
            accusantium sint et ipsa aliquam alias quos dolor vel animi at,
            velit repudiandae. Reprehenderit odit quidem recusandae est
            molestias eveniet distinctio. Animi natus dolore architecto amet. Id
            fugiat voluptatibus excepturi aperiam expedita quibusdam earum
            delectus eos aut quia eligendi itaque nisi dolores minus porro
            reprehenderit, dolor nihil ipsam nobis. Voluptatibus atque deserunt
            deleniti harum repellat dolorum tenetur dolorem iusto eligendi
            soluta? Sed modi excepturi corrupti adipisci tempore atque soluta
            recusandae perferendis. Accusantium doloremque iusto tenetur ducimus
            accusamus quod hic adipisci blanditiis quasi perspiciatis eveniet
            quam ea quos molestiae vitae explicabo voluptates quia omnis, error
            assumenda autem alias! Unde repellat ab, cumque aliquam dolores
            numquam nesciunt labore modi minus placeat obcaecati optio
            laudantium assumenda, dicta, illo odio. Delectus quod aspernatur
            veritatis rem vel illo molestias reprehenderit porro corrupti
            expedita sequi velit blanditiis perferendis, nulla ut vitae incidunt
            nam perspiciatis, animi quidem? Saepe enim soluta quasi sunt
            nesciunt sit possimus, rerum asperiores quidem nisi quia non vel
            eveniet! Vero adipisci nihil quaerat, eum autem corrupti eius unde,
            quasi itaque possimus nemo suscipit voluptates aut! Eos dolores
            alias eum voluptatum minus. Quisquam nobis velit odit sunt accusamus
            vero quo placeat, voluptas libero corrupti, amet tempore itaque illo
            officia rem aliquid, fugiat quod! Veritatis illo expedita assumenda.
            Fugit, eligendi nihil! Omnis, autem. Velit, neque quae, magnam quia
            alias vel perspiciatis dicta adipisci repellendus tempora, fuga
            consequuntur veritatis distinctio id labore consectetur illum
            eveniet? Veritatis eaque mollitia, temporibus quae quia aliquid
            asperiores exercitationem aut? Minima necessitatibus quisquam et
            consequuntur illo earum corrupti molestiae reprehenderit iusto
            voluptates, vel ducimus sit sed iste deleniti aperiam ab explicabo
            deserunt dolorem nobis fugit nostrum fuga quidem debitis. Sit,
            itaque quas eius facilis voluptatum cumque quo reprehenderit
            blanditiis eum enim accusantium rerum minus velit nulla molestiae
            fuga doloremque omnis nostrum reiciendis laboriosam a illum ullam
            adipisci. Doloremque mollitia nesciunt sapiente temporibus iste,
            suscipit veniam quod eius repudiandae rerum animi dolorem quae quas,
            voluptatem culpa non dignissimos numquam nostrum omnis voluptate eum
            ea! Atque excepturi repellat porro facere sint molestiae quae,
            magnam quis optio totam iusto explicabo libero quaerat voluptas,
            culpa itaque? Perspiciatis voluptatibus, porro culpa temporibus
            cumque esse, quis similique, nam ut excepturi deserunt molestiae
            repellendus tenetur enim vitae corrupti aperiam officiis sunt
            nostrum accusantium placeat. Atque, sapiente iusto necessitatibus et
            veritatis quis eaque rem vel eum qui laborum iure quod laboriosam
            exercitationem consequatur corrupti maxime accusamus voluptatum id
            eius unde earum? At qui aut, quibusdam porro, aliquam, repellat quae
            animi consectetur maiores quod eius temporibus beatae modi neque
            doloremque reprehenderit excepturi? Officia est iste aperiam culpa
            delectus qui excepturi omnis soluta non, laboriosam at temporibus
            debitis itaque adipisci nostrum, eum et, reprehenderit natus
            repellendus tempora obcaecati nihil error dolore. Quos pariatur
            nobis magni? Asperiores autem similique fuga sit numquam vitae odit
            non, doloremque officia atque laudantium dolore, impedit magni
            corporis consectetur aut quae repudiandae tempore ipsum vero
            tenetur! Doloribus libero quaerat quidem, unde quia nobis cum
            inventore dolorem recusandae beatae minus blanditiis corporis!
          </div>
        </div>
        {/* hotel booking price card */}
        <div id="h-booking-price-card">
          <HotelPriceCards singleHotel={singleHotel} />
        </div>
      </main>
    </div>
  );
};

export default HotelCheckoutPage;
