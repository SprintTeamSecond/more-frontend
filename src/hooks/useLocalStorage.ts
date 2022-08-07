import React from 'react';

interface useLocalStorageProps {
  method: 'set' | 'get' | 'del';
  key: string;
  data?: any;
}

export const useLocalStorage = ({method, key, data}: useLocalStorageProps) => {
  const [state, setState] = React.useState<any>(undefined);

  React.useEffect(() => {
    const LocalStorage = window.localStorage;
    if (method === 'get') {
      const _state = LocalStorage.getItem(key);
      setState(_state);
    } else if (method === 'set' && data) {
      LocalStorage.setItem(key, JSON.stringify(data));
    } else if (method === 'del') {
      LocalStorage.removeItem(key);
    }
    if (method === 'get') return state;
  }, []);
};
