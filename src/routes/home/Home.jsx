import { useContext } from 'react'
import ProjectStore from '../../context/store'

const Home = () => {
  const [state, dispatch] = useContext(ProjectStore)

  console.log(state)

  const login = (data) => {
    dispatch({type: "DELETE", data})
  }



  return (
    <div>
       <div className='h-10 bg-gray-600 p-10'>
         <h2 className='bg-green-500 inline-block p-2 rounded-lg'>LOGIN</h2>
       </div>

        <div className='w-[1200px] m-auto mt-40 flex flex-col gap-9 '>
          {
            state.map(user => 
                <div key={user.age}>
                <div className='border w-[800px] flex flex-col m-auto p-4 bg-amber-200 rounded-xl shadow-md'>
                  <p className='mt-2'>EMAIL : {user.email}</p>
                    <p className='mt-4'>PASWORD : {user.password}</p>
                    <p className='mt-4'>AGE: {user.age}</p>
                    <button onClick={() => login(user.email)} className=' w-[100px] border p-2 mt-4 rounded-lg bg-red-600 text-white'>delete</button>
                </div>
                </div>
              )
          }
         </div>
        <hr /> <br /> <br />
        
      <hr />
    </div>
  )
}

export default Home
