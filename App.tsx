import React from 'react';
import AppNavigation from './src/navigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />;
    </QueryClientProvider>
  );
}

export default App;
