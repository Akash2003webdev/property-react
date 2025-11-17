import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

import api from '@/api';
import ListingDetailsCard from '@/components/ListingDetailsCard';

const ListingDetailsPage = () => {
  const { listingId } = useParams();

  async function getListing() {
    const res = await api.get(`/api/listings/${listingId}`);
    console.log(res);
    const data = res.data;
    console.log(data);
    return data;
  }

  const {
    data: listing,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['listing', listingId],
    queryFn: getListing,
    staleTime: 1000 * 60 * 2,
    cacheTime: 3000 * 60 * 2,
  });

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>something went wrong...</h1>;
  }

  return (
    <div>
      <ListingDetailsCard listing={listing} />
    </div>
  );
};

export default ListingDetailsPage;
