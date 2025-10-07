import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdvertiserSection from '../AdvertiserSection';

const queryClient = new QueryClient();

export default function AdvertiserSectionExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <AdvertiserSection />
    </QueryClientProvider>
  );
}
