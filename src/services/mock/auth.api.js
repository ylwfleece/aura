// MOCK server data
const mockUser = {
    email: "test@antra.com",
    passWord: "test",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJ0ZXN0QGFudHJhLmNvbSIsIm5hbWUiOiJ0ZXN0IiwidXNlcklkIjoiMTIzMjEzMTIiLCJpYXQiOjE1MTYyMzkwMjJ9.XxBVHmaT7wGOlb9zGR7CSdQ7ZAvDx4Rqlt1trv9rmTU"
  };
  
  const ErrorMessage = {
    1: "Passwords do not match",
    2: "Email ID does not exist",
    3: "inValidErrorCode"
  };
  
  const checkValidEmail = (user) => {
    return user.email === mockUser.userName;
  };
  
  const checkValidPassword = (user) => {
    return user.email === mockUser.email && user.passWord === mockUser.passWord;
  };
  
  // Mock Client API call
  // sucess   {errorCode:0, result:{jwt:XXXX }}
  //  fail    {errorCode:1, result:null}
  export const login = (user) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        /// api call server logic
        if (checkValidEmail(user)) {
          if (checkValidPassword(user)) {
            const response = {
              errorCode: 0,
              result: { jwt: mockUser.jwt }
            };
            res(response);
          } else {
            const response = {
              errorCode: 1,
              result: null
            };
            res(response);
          }
        } else {
          const response = {
            errorCode: 2,
            result: null
          };
          res(response);
        }
      }, 2000);
    });
  };
  
  // success {errorCode:0, result:ErrorMessage}
  // fail {errorCode:3, result:null}
  export const getErrorMessage = (errorCode) => {
    return new Promise((res, rej) => {
      /// api call server logic
      if (ErrorMessage[errorCode]) {
        const response = {
          errorCode: 0,
          result: ErrorMessage[errorCode]
        };
        res(response);
      } else {
        const response = {
          errorCode: 3,
          result: null
        };
        res(response);
      }
    }, 2000);
  };
  