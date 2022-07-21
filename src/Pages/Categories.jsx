import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/Categories';

function Categories() {
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const statusData = useSelector((state) => state.categories);
  console.log(statusData);
  const handleCheckStatus = () => {
    dispatch(checkStatus());
    setStatus(true);
  };
  return (
    <div>
      <button type="button" onClick={handleCheckStatus}>
        Check Status
      </button>
      <p>{status ? statusData : ''}</p>
    </div>
  );
}

export default Categories;