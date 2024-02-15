import React from 'react'
import { useSelector } from 'react-redux'

function Account() {
   let data =   useSelector(
        (state)=>{
            return state;

        }
    )
  return (
    <>
     <div className='container'>
     <h1 className='text-primary'>Account Details</h1> 
     <table className='table table-bordered w-55'>
        <thead>
            <tr>
                <th>Balance</th>
                <th>UserName</th>
                <th>MobileNo</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>{data.balance}</td>
                <td>{data.fullName}</td>
                <td>{data.mobile}</td>
            </tr>
        </tbody>
     </table>
     </div>
    </>
  )
}

export default Account
