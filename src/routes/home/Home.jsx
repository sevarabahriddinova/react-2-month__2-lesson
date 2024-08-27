import { useContext } from 'react'
import ProjectStore from '../../context/store'
import Header from '../../component/Header'

const Home = () => {
  const [state, dispatch] = useContext(ProjectStore)

  console.log(state)

  const login = (data) => {
    dispatch({type: "DELETE", data})
  }



  return (
    <div>
      <Header/>

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
