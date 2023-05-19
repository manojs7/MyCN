import React, { useEffect, useState } from 'react'

const testingPage = () => {

    const[userData, setUserData]=useState();
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=()=>{
        fetch("/api/RawPaymentAllDetails", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          .then(function (a) {
            return a.json();
          }).then(async function (json) {
            console.log(json)
           setUserData(json.data)
          })
    }
    
    return (
        <div>
            
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Guest Count</th>
                        <th scope="col">CreatedAt</th>
                        <th scope="col">Selected Package</th>
                        <th scope="col">Client Grandtotal</th>
                        <th scope="col">Menu</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {userData ?userData.map((user, index) => (
                    <tr>
                        <th scope="row">1</th>
                        <td>{user.datas.name}</td>
                        <td>{user.datas.email}</td>
                        <td>{user.datas.mobileno}</td>
                        <td>{(user.datas.people)}[{user.datas.veg_c}v+{user.datas.nonveg_c} nv]</td>
                        <td>{(user.createdAt)}</td>
                        <td>{user.datas.packageName? (user.datas.packageName):''}</td>
                        <td>{(user.datas.grandTotal)}</td>
                        <td><select>
                            <option value="">Selected Menu</option>
                            {user.datas.appetizer.map((item,index)=>(
                                <option value={item.name}>{item.name} [<b>{item.quantity} {item.Qtype}</b>]</option>    
                            ))}

                            {user.datas.mainCourse.map((item,index)=>(
                                <option value={item.name}>{item.name} [<b>{item.quantity} {item.Qtype}</b>]</option>    
                            ))}
                            {user.datas.breadRice.map((item,index)=>(
                                <option value={item.name}>{item.name} [<b>{item.quantity} {item.Qtype}</b>]</option>    
                            ))}
                            {user.datas.dessert.map((item,index)=>(
                                <option value={item.name}>{item.name} [<b>{item.quantity} {item.Qtype}</b>]</option>    
                            ))}
                            
                        </select></td>
                    </tr>
                    ))
                :""}
                </tbody>
            </table>
            <button onClick={fetchData} className='btn btn-primary'>Refresh</button>
        </div>
    )
}

export default testingPage