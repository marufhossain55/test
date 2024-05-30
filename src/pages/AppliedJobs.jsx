// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import useAuth from '../hooks/useAuth';

// const AppliedJobs = () => {
//   const { user } = useAuth();
//   console.log(user.email);
//   const {
//     isPending,
//     isError,
//     error,
//     data: appliedJobs,
//   } = useQuery({
//     queryKey: ['appliedJobs'],
//     queryFn: async () => {
//       const res = await axios.get(
//         `${import.meta.env.VITE_API_URL}/appliedJobDetails/${user?.email}`
//       );
//       return res.data;
//     },
//   });
//   if (isPending) {
//     <span className='loading loading-ball loading-lg'></span>;
//   }
//   if (isError) {
//     return <p>{error.message}</p>;
//   }
//   console.log(appliedJobs);

//   return (
//     <div>
//       <div className='overflow-x-auto'>
//         <table className='table'>
//           {/* head */}
//           <thead>
//             <tr>
//               <th>Sn</th>
//               <th>Job Category</th>
//               <th>Job Title</th>
//               <th>Job Posting Date</th>
//               <th>Salary</th>
//               <th>Description</th>
//               <th>Applicants Number</th>
//             </tr>
//           </thead>
//         </table>
//       </div>
//       <div>
//         {appliedJobs?.map((appliedJob, idx) => (
//           <div className='overflow-x-auto ' key={appliedJob._id}>
//             <table className='table'>
//               {/* head */}

//               <tbody>
//                 {/* row 1 */}
//                 <tr>
//                   <th>{idx + 1}</th>
//                   <td>{appliedJob.Category}</td>
//                   <td>{appliedJob.Job_Title}</td>
//                   <td>{appliedJob.Job_Posting_Date}</td>
//                   <td>
//                     ${appliedJob.min_salary} to ${appliedJob.max_salary}
//                   </td>
//                   <td>{appliedJob.Description.slice(0, 25)}...</td>
//                   <td>{appliedJob.Job_Applicants_Number}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default AppliedJobs;

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { useState, useEffect } from 'react';

const AppliedJobs = () => {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredJobs, setFilteredJobs] = useState([]);

  const {
    isLoading,
    isError,
    error,
    data: appliedJobs,
  } = useQuery({
    queryKey: ['appliedJobs'],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/appliedJobDetails/${user?.email}`
      );
      return res.data;
    },
  });

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredJobs(appliedJobs);
    } else {
      setFilteredJobs(
        appliedJobs?.filter((job) => job.Category === selectedCategory)
      );
    }
  }, [selectedCategory, appliedJobs]);

  if (isLoading) {
    return <span className='loading loading-ball loading-lg'></span>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  const categories = [...new Set(appliedJobs?.map((job) => job.Category))];

  return (
    <div>
      <div className='mb-4'>
        <label htmlFor='category' className='mr-2'>
          Filter by Category:
        </label>
        <select
          id='category'
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className='select select-bordered w-full max-w-xs'
        >
          <option value='All'>All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className='overflow-x-auto'>
        <table className='table'>
          <thead>
            <tr>
              <th>Sn</th>
              <th>Job Category</th>
              <th>Job Title</th>
              <th>Job Posting Date</th>
              <th>Salary</th>
              <th>Description</th>
              <th>Applicants Number</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs?.map((appliedJob, idx) => (
              <tr key={appliedJob._id}>
                <th>{idx + 1}</th>
                <td>{appliedJob.Category}</td>
                <td>{appliedJob.Job_Title}</td>
                <td>{appliedJob.Job_Posting_Date}</td>
                <td>
                  ${appliedJob.min_salary} to ${appliedJob.max_salary}
                </td>
                <td>{appliedJob.Description.slice(0, 25)}...</td>
                <td>{appliedJob.Job_Applicants_Number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobs;
