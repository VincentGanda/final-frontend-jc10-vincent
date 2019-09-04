import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';

class ParaSultan extends Component {
    state = {
        data : null,
        username: null
    }
    componentDidMount(){
        Axios.get(urlApi + 'history')
        .then((res)=>{
            this.setState({data: res.data})
            console.log(res.data)
            Axios.get(urlApi + 'users')
            .then((res)=>{
                this.setState({username: res.data})
                console.log(res.username)
            })
            .catch((err)=>{
                console.log(err)
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    renderParaSultan = () => {
        var jsx = this.state.data
    }
    // componentDidMount=()=>{
    //     Axios.get(urlApi + 'cart?productId=1')
    //     .then((res)=>{
    //         console.log(res)
    //         this.setState({isiCart: res.data})
            
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }
    // componentDidMount=()=>{
    //     Axios.get(urlApi + 'cart?productId=1')
    //     .then((res)=>{
    //         console.log(res)
    //         this.setState({data: res.data})
            
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }
    // renderJumlahQty = () => {
    //     let totalQty = 0
    //     this.state.data.map(val => {
    //         totalQty += parseInt(val.quantity)
    //     })
    //     return totalQty
    // }
    // renderProductName = () => {
    //     let product = ''
    //     this.state.data.map(val => {
    //         product += (val.productName)
    //     })
    //     return product
    // }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow mt-3">
                            <div className="card-header border-0 pt-5">
                                {/* <h3>Admin Dashboard</h3> */}
                            </div>
                            <div className="card-body">
                                <ul>
                               {/* <li> {this.renderJumlahQty()} </li> */}
                               
                                </ul>
                            </div>
                            <div className="card-footer align-items-center">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{

    }
}

export default ParaSultan;