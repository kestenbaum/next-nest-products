import { useEffect, useState } from "react";

export const useGetAllItems  = <T,>(
   serviceFn: () => Promise<T[]>
) => {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
      let isMounted = true;
      const fetchAllItems = async () => {
          setLoading(true);
          try {
              const items = await serviceFn();
              if (isMounted) setData(items);
          } catch (e) {
              const error = (e instanceof Error) ? e : null;
              setError(error);
          } finally {
              if(isMounted) setLoading(false);
          }
      }

      fetchAllItems();

      return () => {
          isMounted = false;
      }
    }, []);

    return {data, loading, error};
}