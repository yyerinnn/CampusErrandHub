import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrandForm from '../ErrandForm';

const queryClient = new QueryClient();

export default function ErrandFormExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-3xl mx-auto">
        <ErrandForm />
      </div>
    </QueryClientProvider>
  );
}
