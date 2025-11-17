import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import { Button, DateRangePicker, Input, Stepper } from './ui';

const ListingFilters = ({ getStates }) => {
  const [search, setSearch] = useState('');
  const [dates, setDates] = useState('');
  const [guests, setGuests] = useState(0);

  const handleSubmit = () => {
    getStates({ search, dates, guests });
  };

  return (
    <div className='flex flex-row items-center justify-center gap-2'>
      <Input
        className='w-[400px]'
        placeholder='Search destinations'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <DateRangePicker
        value={dates}
        onChange={setDates}
        minDate={new Date()}
        placeholder='Add dates'
      />
      <Stepper label='guest' value={guests} onChange={setGuests} />
      <Button onClick={handleSubmit}>
        <Search className='h-4 w-4' />
      </Button>
    </div>
  );
};

export default ListingFilters;
