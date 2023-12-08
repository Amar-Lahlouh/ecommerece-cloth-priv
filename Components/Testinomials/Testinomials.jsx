/* eslint-disable no-unused-vars */
import "./Testinomials.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import TestinomialCard from "../../Components/TestinomialCard/TestinomialCard";
import TestinomialsData from "../../Data/TestinomialsData/TestinomialsData";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper/modules";
import TestinomailsData from "../../Data/TestinomialsData/TestinomialsData";
function Testinomials() {
  return (
    <div>
      <div className="testinomials-title">
        <h2>What Our Customers Say..</h2>
        <p>Our customers never miss a bit on providing feedback</p>
      </div>
      <div className="testinomial-body">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          spaceBetween={20}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {TestinomailsData.map((item) => {
            return (
              <div key={item.id}>
                <SwiperSlide>
                  <TestinomialCard image={item.image} data={item.data} />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Testinomials;
