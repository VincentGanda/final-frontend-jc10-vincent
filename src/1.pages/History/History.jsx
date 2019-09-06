import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import {connect} from 'react-redux'
import './History.css'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'

class History extends Component {
    state = {
        data : null
    }
    
    componentDidMount(){
        Axios.get(urlApi + 'history?userId=' + this.props.id)
        .then((res)=>{
            this.setState({data: res.data})
            console.log(res.data)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    renderHistory = () => {
        var jsx = this.state.data.map((val)=>{
            return(
                <div>
                <table>
                <tr>
                    <th>id</th>
                    <th>waktu</th>
                    <th>totalPrice</th>
                    <th>Penerima</th>
                    <th>Alamat</th>
                    <Link to = {{pathname: '/history-detail/' + val.id ,state: {
                        transactionId: val.id
                    }}}>
                        <th>click untuk detail</th>
                    </Link>
                </tr>
                <tr>
                    <td>{val.id}</td>
                    <td>{val.time}</td>
                    <td>{val.TotalPrice}</td>
                    <td>{val.recipient}</td>
                    <td>{val.address}</td>
                    <td></td>
                </tr>
                </table>
                </div>
            )
        })
        return jsx
    }
    render() {
        console.log(this.props.id)
        if(this.state.data === null){
            return('apapun')
        }else if (this.props.id == 0){
           return( <Redirect to="/" exact /> )
        }
        
        return (
            // { 
            //     this.state.cartData.length > 0
            //     ?
            //     <div className="col-4">
            //        <h3>Total Harga = {this.TotalPrice()}</h3>
            //    </div>
            //     :
            //     <div className="col-4">
            //        <h1>Your cart is empty, <Link to="/">let's go shopping</Link> </h1>
                   
            //    </div>
            //    }
            <div>
                
               {
                   this.state.data !== 0
                   ?
                   <table>
               
                 
                {this.renderHistory()}
                
                </table>
                    :
                    <h1>Your cart is empty, <Link to="/">let's go shopping</Link></h1>
               } 
            </div>
        );
        
    }
}

const mapStateToProps=(state)=>{
    return{
        id: state.user.id
    }
}
export default connect (mapStateToProps)(History);