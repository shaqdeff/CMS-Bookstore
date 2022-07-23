import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../Redux/Categories/Categories';
import './Categories.css';

function Categories() {
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const statusData = useSelector((state) => state.categories);
  const handleCheckStatus = () => {
    dispatch(checkStatus());
    setStatus(true);
  };
  return (
    <div className="container">
      <button className="status-btn" type="button" onClick={handleCheckStatus}>
        Check Status
      </button>
      <p>{status ? statusData : ''}</p>
    </div>
  );
}

export default Categories;
