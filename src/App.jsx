import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';

import Devbar from '@/components/Devbar/Devbar';

import HomePage from './pages/HomePage';
const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <div className='fixed bottom-0 left-0 top-0'className='ml-[700px]'>
          <Devbar />
        </div> */}
        <div >
          <Outlet />
        </div>
      </QueryClientProvider>
    </>
  );
};

export default App;
