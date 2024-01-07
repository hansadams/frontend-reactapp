const token = localStorage.getItem("token")


const Plan = {
     async getPlans() {
      return await fetch('https://ffapi-production.up.railway.app/api/v1/plans')
        .then(response => response.json())
        
        
     },

     async getPlan(Id) {
      return await fetch(`https://ffapi-production.up.railway.app/api/v1/plans/${Id}`, 
      {headers: 
         {
           Authorization: `Bearer ${token}`
         }
       })
        .then(response => response.json())
        
     },

     async updatePlan(Id, data) {
      return await fetch(`https://ffapi-production.up.railway.app/api/v1/plans/${Id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      })
        .then(data => data.json())
    },

    async deletePlan(Id) {
      return await fetch(`https://ffapi-production.up.railway.app/api/v1/plans/${Id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
        .then(data => data.json())
    },

    async createPlan(data) {
      return await fetch(`https://ffapi-production.up.railway.app/api/v1/plans`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      })
        .then(data => data.json())
    }




     

     
  
  }
  
  export default Plan;