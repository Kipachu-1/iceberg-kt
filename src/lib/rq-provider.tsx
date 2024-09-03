import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

type RQProviderProps = {
  children: React.ReactNode;
};

const RQProvider: React.FC<RQProviderProps> = ({ children }) => {
  const [client] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default RQProvider;
