import React from 'react';
import axios from 'axios';

const UserDataContext = React.createContext();

export const UserDataProvider = ({
  initialState = { 
    data: {
      items: [], 
      total: 1000,
    },
    params: {
      offset: 0,
      limit: 10,
      sorting: null,
      filters: [],
    }
  },
  children,  
}) => {
  // console.log(initialState);
  /**
   * User data state
   * data: {
   *   item: User[],
   *   total: number
   * }
   * setData: (data) => data
   */
  const [data, setData] = React.useState(initialState.data);
  const [params, setParams] = React.useState(initialState.params)
  const cleanUp = () => {
    setData(initialState.data);
    setParams(initialState.params);
  };
  const loadData = newParams => setParams({ ...params, ...newParams });
  
  /**
   * Effect for loading user data
   * Depends on: nothing
   */
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get('http://localhost:8080/users', {params});
        setData( data );
      } catch (e) {
        cleanUp();
      }
    }
    fetchData(); 

  }, [params.offset]);

  const value = {
    data,
    params,
    loadData,
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserDataState = () => React.useContext(UserDataContext);