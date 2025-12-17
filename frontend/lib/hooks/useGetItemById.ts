import { useEffect, useState } from "react";

export const useGetItemById = <T,>(
    id: string,
    serviceFn: (id: string) => Promise<T>,
) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!id) {
            setData(null);
            return;
        }

        const fetchItem = async () => {
            try {
                const item = await serviceFn(id);
                setData(item);
            } catch (e) {
                const error = ( e instanceof Error ) ? e : null;
                setError(error)
            } finally {
                setLoading(false);
            }
        }
        fetchItem();
    }, [id, serviceFn]);

    return { data, loading, error };
}