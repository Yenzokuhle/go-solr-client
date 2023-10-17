import { useEffect, useState } from 'react';
import axios from 'axios';

interface Result {
  url: string;
  method: string;
  data: object;
  headers?: object;
}

const useAxios = (configParams: Result) => {
  axios.defaults.baseURL = 'http://localhost:3000/api';
  const [data, setData] = useState<{}>(undefined);
  const [error, setError] = useState<{}>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecommendations(configParams);
  }, []);

  const fetchRecommendations = async (configParams: Result) => {
    setLoading(true);
    await axios
      .request(configParams)
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return [data, error, loading];
};
export default useAxios;
