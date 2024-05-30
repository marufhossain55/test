import img1 from '../assets/bImg1.jpg';
// import img2 from '../assets/img2.jpg';
// import img3 from '../assets/img3.jpg';

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
// const Banner = () => {
//   return (
//     <div className='container mx-auto mt-16'>
//       <div className='lg:w-[136vh] mx-auto md:w-[50vh] md:mt-20 w-[38vh]'>
//         <Swiper
//           spaceBetween={30}
//           effect={'fade'}
//           navigation={true}
//           pagination={{
//             clickable: true,
//           }}
//           loop={true}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//           }}
//           modules={[EffectFade, Navigation, Pagination, Autoplay]}
//           className='mySwiper'
//         >
//           <SwiperSlide>
//             <div
//               className='rounded-2xl border-red-500'
//               style={{
//                 background: `
//                 linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
//                 url(${img1})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 width: '67vw',
//                 height: '55vh',
//                 color: 'white',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}
//             >
//               <h1 className='font-bold text-4xl text-center w-1/2 mb-4'>
//                 Your Gateway to Global Adventures
//               </h1>
//               <p className='text-center w-1/2 mb-4 lg:block md:block hidden'>
//                 Dive into a world of endless possibilities with our travel site.
//                 From vibrant city escapes to tranquil beach retreats and
//                 adrenaline-pumping outdoor adventures, our platform offers
//                 curated experiences tailored to every traveler's desires. Start
//                 planning your next unforgettable journey today!
//               </p>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div
//               className='flex flex-col justify-center items-center w-[67vw] h-[55vh] rounded-2xl'
//               style={{
//                 background: `
//                 linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
//                 url(${img2})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 color: 'white',
//               }}
//             >
//               <h1 className='font-bold text-4xl text-center w-1/2 mb-4'>
//                 Unlock the Secrets of Travel
//               </h1>
//               <p className='text-center w-1/2 mb-4 lg:block md:block hidden'>
//                 Embark on a journey of discovery with our comprehensive travel
//                 site. Delve into hidden gems, uncover local secrets, and immerse
//                 yourself in diverse cultures around the globe. With a wealth of
//                 destination guides, travel tips, and exclusive deals, we empower
//                 you to create memories that last a lifetime.
//               </p>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div
//               className='flex flex-col justify-center items-center w-[67vw] h-[55vh] rounded-2xl'
//               style={{
//                 background: `
//                 linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
//                 url(${img3})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 color: 'white',
//               }}
//             >
//               <h1 className='font-bold text-4xl text-center w-1/2 mb-4'>
//                 Your One-Stop Travel Companion
//               </h1>
//               <p className='text-center w-1/2 mb-4 lg:block md:block hidden'>
//                 Let our travel site be your ultimate companion on the road to
//                 adventure. From booking flights and accommodations to
//                 discovering must-visit attractions and insider tips, we've got
//                 you covered every step of the way. Whether you're a seasoned
//                 globetrotter or a first-time explorer, embark on your next
//                 escapade with confidence and ease.
//               </p>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// };
// export default Banner;

const Banner = () => {
  return (
    <section
      className={`bg-[#12132D] bg-cover bg-[${img1}] rounded-3xl h-[900px] lg:h-[500px] bg-bottom bg-no-repeat flex justify-center items-center mt-14`}
      style={{
        // background: 'linear-gradient(62deg, #E0F9ED 0%, #DCEEF7 100%)',
        background: `URL(${img1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='flex lg:flex-row flex-col gap-20'>
        <div className='space-y-10'>
          <h1 className='text-6xl font-bold text-white text-center lg:text-start '>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#2ae672] to-[#069974]'>
              JobZen
            </span>{' '}
            <br />
            <span className='text-4xl'>Connecting Talent with Opportunity</span>
          </h1>
          <p className='text-xl font-medium text-center lg:text-start text-[#FFFFFFCC]'>
            Launch your career or find your next challenge. <br />
            JobZen connects you with exciting opportunities.
          </p>
          <input
            id='input-value'
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs ml-5 lg:ml-0'
          />
          <button
            id='searchBtn'
            className='btn bg-[#797DFC] border-none ml-32 lg:ml-0'
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};
export default Banner;
