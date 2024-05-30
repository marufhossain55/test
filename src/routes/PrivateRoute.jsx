import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className='flex justify-center'>
        <span className='loading loading-ball loading-xs'></span>
        <span className='loading loading-ball loading-sm'></span>
        <span className='loading loading-ball loading-md'></span>
        <span className='loading loading-ball loading-lg'></span>
      </div>
    );
  }
  if (!user) {
    return (
      <>
        <Navigate to='/login' state={location?.pathname || '/'} />;
        {toast.error('You must login first')}
      </>
    );
  }
  return <div>{children}</div>;
};
export default PrivateRoute;
