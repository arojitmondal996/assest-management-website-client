import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  ".swiper-pagination-bullet-active": {
    backgroundColor: theme.palette.primary.main,
  },
}));

// import required modules
import { Button, styled } from "@mui/material";
import { Link } from "react-router";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SliderItem from "./SliderItem";

export default function Banner() {
  return (
    <>
      <StyledSwiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper">
        <SwiperSlide>
          <SliderItem image="hr-join.jpg">
            <Link to="/join-as-hr-manager">
              <Button variant="contained" color="primary" sx={{ zIndex: 2 }}>
                Join as HR Manager
              </Button>
            </Link>
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem image="employee-join.jpg">
            <Link to="/join-as-employee">
              <Button variant="contained" color="primary" sx={{ zIndex: 2 }}>
                Join as an Employee
              </Button>
            </Link>
          </SliderItem>
        </SwiperSlide>
      </StyledSwiper>
    </>
  );
}
