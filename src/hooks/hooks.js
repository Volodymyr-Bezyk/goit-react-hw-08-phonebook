import {useState, useEffect} from 'react'


export const useLocalStorage = key => {
  const [contacts, setContacts] = useState(() =>
    window.localStorage.getItem(key)
      ? JSON.parse(window.localStorage.getItem(key))
      : []
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(contacts));
    } catch {
      throw new Error();
    }
  }, [contacts, key]);

  return [contacts, setContacts];
};


export const useFilter = contacts => {
  const [filter, setFilter] = useState('');
  const changeFilter = e => setFilter(e.target.value);
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return [filter, changeFilter, filteredContacts];
};