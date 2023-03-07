import React,{Fragment} from 'react';
import{Button,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {Link,useNavigate } from 'react-router-dom';



function Home(){
    let history=useNavigate();

    const handleEdit=(id,name,age)=>{
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Id',id);


    }

    const handleDelete=(id)=>{
        var index=Employees.map(function(e){
            return e.id
        }).indexOf(id);
        Employees.splice(index,1);
        history('/');
    }
    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length >0
                            ?
                            Employees.map((item)=>{
                                return(
                                    <tr>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Age}
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                            <Button onClick={()=>handleEdit(item.id,item.Name,item.Age)}>Edit</Button>
                                            </Link>
                                            &nbsp;
                                            <Button onClick={()=>handleDelete(item.id)}>DELETE</Button>

                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link className='d-grid gap-2' to='/create'>
                    <Button size="lg">Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;