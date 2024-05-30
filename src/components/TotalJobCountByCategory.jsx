import { useQuery } from '@tanstack/react-query';
import React from 'react'
import axios from 'axios';
import SectionTitle from './SectionTitle';
 import jobImg1 from '../assets/remote.png'
 import jobImg2 from '../assets/hybrid.png'
 import jobImg3 from '../assets/partTime.png'
 import jobImg4 from '../assets/onSite.png'

const TotalJobCountByCategory = () => {
    const {
        isPending,
        isError,
        error,
        data: allJobs,
      } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
          const res = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`);
          return res.data;
        },
      });
      if (isPending) {
        <span className='loading loading-ball loading-lg'></span>;
      }
      if (isError) {
        return <p>{error.message}</p>;
      }
console.log(allJobs)
const filterByRemote=allJobs?.filter(job => job.Category === 'Remote').length;
const filterByHybrid=allJobs?.filter(job => job.Category === 'Hybrid').length;
const filterByPartTime=allJobs?.filter(job => job.Category === 'Part-Time').length;
const filterByOnSite=allJobs?.filter(job => job.Category === 'On-Site').length;
console.log(filterByRemote)
  return (
    <div>
        <SectionTitle title={'Available Jobs'} subTitle={'Jobs that You can apply now!'}/>
       <div className='lg:flex gap-20 justify-center'>
       <div>
        <h1 className='text-center font-bold text-5xl mb-5'>Remote</h1>
            <div className='flex justify-center items-center gap-10'>
                <img src={jobImg1}  alt="" className='h-auto w-[120px]'/>
                <div className='font-bold text-9xl'>{filterByRemote}</div>
                </div>
        </div>
       <div>
        <h1 className='text-center font-bold text-5xl mb-5'>Hybrid</h1>
            <div className='flex justify-center items-center gap-10'>
                <img src={jobImg3}  alt="" className='h-auto w-[120px]'/>
                <div className='font-bold text-9xl'>{filterByHybrid}</div>
                </div>
        </div>
       <div>
        <h1 className='text-center font-bold text-5xl mb-5'>Part-Time</h1>
            <div className='flex justify-center items-center gap-10'>
                <img src={jobImg2}  alt="" className='h-auto w-[120px]'/>
                <div className='font-bold text-9xl'>{filterByPartTime}</div>
                </div>
        </div>
       <div>
        <h1 className='text-center font-bold text-5xl mb-5'>On Site</h1>
            <div className='flex justify-center items-center gap-10'>
                <img src={jobImg4}  alt="" className='h-auto w-[120px]'/>
                <div className='font-bold text-9xl'>{filterByOnSite}</div>
                </div>
        </div>
       </div>
    </div>
  )
}

export default TotalJobCountByCategory