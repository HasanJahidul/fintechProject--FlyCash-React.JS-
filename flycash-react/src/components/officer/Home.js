import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component{

    render(){

        return(
            <div ClassName="container">
                <div ClassName="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Fintech FlyCash Online
                                    <Link to={'show-customer'} className="btn btn-primary btn-sm float-end">Customer</Link>
                                    <Link to={'emp-login'} className="btn btn-primary btn-sm float-end">Login</Link>
                                  
                                </h4>
                            </div>

                            <div className="card-body">
                                <h2>Welcome to FlyCash</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;