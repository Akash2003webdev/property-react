import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import api from '@/api';
import ListingFilters from '@/components/ListingFilters';
import ListingList from '@/components/ListingList';
import { Separator, Spinner } from '@/components/ui';

const HomePage = () => {
  const [filteredData, setFilteredData] = useState('');

  async function getStates(states) {
    // const { search, dates, guests } = states;
    // const res = await api.get('/api/listings', { params: states });
    // const data = res.data;
    // setFilteredData(data);
    setFilteredData(states);
  }

  async function getAllListings() {
    const res = await api.get(
      '/api/listings',
      filteredData && { params: filteredData },
    );
    return res.data;
  }

  const {
    data: listings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['listings', filteredData],
    queryFn: getAllListings,
    staleTime: 1500 * 60 * 10,
    cacheTime: 3000 * 60 * 10,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h1>something went wrong...</h1>;
  }
  return (
    <div className='container py-4'>
      <div className='mb-4'>
        <ListingFilters getStates={getStates} />
        <Separator className='my-4' />
      </div>

      {listings && <ListingList listings={listings} />}
    </div>
  );
};

export default HomePage;
{
  /* {filteredData && <ListingList listings={filteredData} />}
      {listings && <ListingList listings={listings} />} */
}
