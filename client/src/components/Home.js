import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import moment from "moment"

const Home = () => {
    const [data,setData] = useState([]);
    console.log(data)

    const getUserData = async()=>{
        const res = await axios.get("http://localhost:4004/getdata",{
            headers:{
                "Content-Type":"application/json"
            }
        });

      

        if(res.status == 200){
            setData(res.data)
        }else{
            alert("error")
        }
    }

    useEffect(()=>{
        getUserData()
    },[])
    return (
        <>
            <div className="container mt-2">
                <h1>MERN IMAGE upload</h1>
                <div className="text-end">  
                <Button variant="primary" >
                    <NavLink to="/register" className="text-decoration-none text-light">Add User</NavLink>
                </Button>

                </div>
                <div className="row d-flex justify-content-between align-iteams-center mt-5">
                {
                    data.length > 0 && data.map((element,index)=>{
                        return (
                            <>
                            <Card style={{ width: '22rem',height:"18rem" }} className='mb-3'>
                        <Card.Img variant="top" src={element.imgpath} style={{width:"100px",textAlign:"center",margin:"auto"}}
                        className='mt-2'
                         />
                        <Card.Body>
                            <Card.Title>User Name: {element.name}</Card.Title>
                            <Card.Text>
                                Date Added : {moment(element.date).format("L")}
                            </Card.Text>
                            <Button variant="danger" className='col-lg-6 text-center'>Delete</Button>
                        </Card.Body>
                    </Card>
                            </>
                        )
                    })
                }
                   
                </div>
            </div>
        </>
    )
}

export default Home