import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useProjectNavigation(href: string) {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    router.prefetch(href);
  }, [router, href]);

  const handleClick = () => {
    setIsClicked(true);
    router.push(href);
  };

  return {
    isClicked,
    handleClick
  };
}