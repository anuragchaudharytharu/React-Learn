// React Context
// Its an object which is separate from the component level itself and holds information that can be accessible from any component as long as the componet is inside that context
// It helps to avoid nested props

import { createContext } from 'react';

export const UserContext = createContext({
  id: 0,
  username: '',
  email: '',
  name: '',
  setUserData: () => {},
});

// .Provider method of react context
// Any component inside <.Provider>...</.Provider> can access the data of the said React Context
