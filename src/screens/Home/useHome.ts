import {useCallback, useState, useEffect} from 'react';
import {TCharacter, THomeData} from '../../types';
import networkService from '../../services/network';

const defaultCurrentIndexSection = 1;
const limit = 10;

const useHomeScreen = () => {
  const [currentIndexSection, setCurrentIndexSection] = useState(
    defaultCurrentIndexSection,
  );
  const [data, setData] = useState<TCharacter[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getData = async (page: number) => {
    const value = await networkService.get<THomeData>(
      `https://rickandmortyapi.com/api/character?page=${page}&limit=${limit}`,
    );
    setData(prev => {
      return [...(prev ?? []), ...(value.data.results ?? [])];
    });
  };
  useEffect(() => {
    getData(currentPage);
  }, []);

  const onEndReach = useCallback(() => {
    const nextPage = currentPage + 1;
    getData(nextPage);
    setCurrentPage(prev => prev + 1);
  }, []);

  const handleTabSectionItem = useCallback((id: number) => {
    setCurrentIndexSection(id);
  }, []);
  return {
    handleTabSectionItem,
    currentIndexSection,
    setCurrentIndexSection,
    onEndReach,
    data,
    setData,
  };
};

export default useHomeScreen;
