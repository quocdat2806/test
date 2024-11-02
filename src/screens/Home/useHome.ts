import {useCallback, useState} from 'react';
import useApi from '../../hooks/useApi';
import {THomeData} from '../../types';

const defaultCurrentIndexSection = 1;
const limit = 10;
const page = 1;
const useHomeScreen = () => {
  const [currentIndexSection, setCurrentIndexSection] = useState(
    defaultCurrentIndexSection,
  );

  const {response, loading, error} = useApi<THomeData>({
    url: `https://rickandmortyapi.com/api/character?page=${page}&limit=${limit}`,
    method: 'get',
  });

  const handleTabSectionItem = useCallback((id: number) => {
    setCurrentIndexSection(id);
  }, []);

  return {
    handleTabSectionItem,
    currentIndexSection,
    setCurrentIndexSection,
    response,
    loading,
    error,
  };
};
export default useHomeScreen;
