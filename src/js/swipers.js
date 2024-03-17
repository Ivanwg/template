import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules'

export default function swipersStart() {
  new Swiper('.achievements .swiper', {
    modules: [Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 24,

    speed: 800,
    autoplay: {
      delay: 3000,
    },
    freeMode: true,
    keyboard: true
  });
  new Swiper('.pupil .swiper', {
    modules: [Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 24,

    speed: 800,
    autoplay: {
      delay: 3000,
    },
    freeMode: true,
    keyboard: true
  });
  new Swiper('.children .swiper', {
    modules: [Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 24,

    speed: 800,
    autoplay: {
      delay: 3000,
    },
    freeMode: true,
    keyboard: true
  });
}
