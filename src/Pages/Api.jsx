import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Api() {

    const [record , setRecord] = useState ([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            setRecord(res.data);
        }).catch((err) => {
            console.log(err);
        })
    },[])

    
  return (
   <center>
        <h1>API CALL</h1>

        <table border={1}>
            <thead>
                <tr>
                    <th>SrNo</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {
                    record.map((val) => {
                        return(
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.title}</td>
                                <td>{val.body}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
   </center>
  )
}

export default Api