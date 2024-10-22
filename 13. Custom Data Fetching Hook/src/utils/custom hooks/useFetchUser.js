import { useEffect, useState } from 'react';

const userApiUrl = 'https://jsonplaceholder.typicode.com/users';

export function useFetchuser(userId) {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false); //to check api is still fetching or successfully resolved or rejected
  const [error, setError] = useState(); // to track error if occured

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch(`${userApiUrl}/${userId}`, { signal: controller.signal })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setError(undefined);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });

    return () => {
      controller.abort();
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
  }, [userId]);

  return { user: userData, loading, error };
}

// There is two-time render and mounting phase(i.e mount and unmount).onloading 1sttime=> mount-render-unmount. 2ndtime=>mount-render So,as per useEfftect hook default behaviour, first-time when useEffet unmounts, it aborts the fetching making it cancelled. Then fetch is success on the second-time mounts as it doesnt get unmounted
