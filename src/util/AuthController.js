
const Auth = {
  async loginUser(credentials) {
    return await fetch('defective-harbor.railway.internal/api/v1/auth/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   },

   async register(signup) {
    return await fetch('defective-harbor.railway.internal/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signup)
    })
      .then(data => data.json())
   }




    

}

export default Auth;