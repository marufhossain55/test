import Banner from '../components/Banner';
import JobByCategories from '../components/JobByCategories';
import NewsLetter from '../components/NewsLetter';
import { Review } from '../components/Review';
import TotalJobCountByCategory from '../components/TotalJobCountByCategory';

const Home = () => {
  return (
    <div>
      <Banner />
      <TotalJobCountByCategory/>
      <JobByCategories></JobByCategories>
      <div className='flex justify-center'>
        <Review></Review>
      </div>
      <NewsLetter></NewsLetter>
    </div>
  );
};
export default Home;
