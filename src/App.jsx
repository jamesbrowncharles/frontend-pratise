import { useState, useEffect } from 'react'

function App() {
 
  const [data, setData] = useState([])

 
  const fetchData = async () => {
    
    try {
      const response = await fetch('https://myapi5.onrender.com')
      const req = await response.json()
      console.log()
    
      setData(req)
    } catch (error) {
     
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  
  return (
  <>
  <h1>{data.message}</h1>
  <h1>data.message</h1>
  </>
   
   
 
    

  )

}

export default App

