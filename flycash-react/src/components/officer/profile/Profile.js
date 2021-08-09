import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class ProfileEdit extends Component{

    state = {
        profiles: [],
        loding: true,
    }

    async componentDidMount() {

        const res = await axios.get('http://localhost:8000/api/view-profile');

        console.log(res);

        if(res.data.status === 200 ){
            
            this.setState({
                profiles: res.data.profiles,
                loding: false,    
            });
        }
    }

//======================================================================


    render(){

        var officer_table = "";

        if(this.state.loding){
            officer_table = <tr><td colSpan="11"><h2>loding...</h2></td></tr>
        }else{
            officer_table = 
                this.state.profiles.map( (item)=> {
                    return (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.nid}</td>
                            <td>{item.dob}</td>
                            <td>{item.type}</td>

                            <td>
                                <Link to={`view-officer/${item.id}`} className="btn btn-success btn-sm">View</Link>
                            </td>
                            <td>
                                <Link to={`edit-profile/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                            </td>
                        </tr>
                    );
                });
        }

        return(
            <div ClassName="container">
                <div ClassName="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Officer View Page
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                                </h4>
                            </div>

                            <div className="card-body">

                                <h2>Officer Data</h2>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>NID</th>
                                            <th>DOB</th>
                                            <th>Type</th>
                                            <th>View</th>
                                            <th>Edit</th>
                                        </tr>
                                    </thead>
            
                                    <tbody>
                                        {officer_table}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileEdit;