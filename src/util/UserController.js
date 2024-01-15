const token = localStorage.getItem("token")


const Member = {
     async getMembers() {
      return await fetch('https://ffapi.up.railway.app/api/v1/users/all',)
        .then(response => response.json())
        
        
     }




     

     
  
  }
  
  export default Member;