type LoginResponse = {
    token: string;
    user: {
      id: string;
      name: string;
    };
  };
  
export const login = async (credentials: { email: string; password: string }): Promise<LoginResponse> => {
    // const response = await fetch('/sessions', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(credentials),
    // });
    // if (!response.ok) {
    //     throw new Error('Failed to login');
    // }
    // return response.json();

    return {
        token: "qwedasasdsd",
        user: {
          id: "1",
          name: "michael",
        }
    }
};
  

export default login