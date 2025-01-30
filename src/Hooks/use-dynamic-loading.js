import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../Store/Action/loading/loading-action';

const useDynamicLoading = () => {
  const dispatch = useDispatch();
  const loadingState = useSelector(state => state.LoadingReducer);

  const setDynamicLoading = (keys) => {
    dispatch(setLoading(keys));
  };


  return {
    loadingState,
    setDynamicLoading,
  };
};

export default useDynamicLoading;
