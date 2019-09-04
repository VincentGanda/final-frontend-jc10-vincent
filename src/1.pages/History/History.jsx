import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import {connect} from 'react-redux'

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
                    <td>id</td>
                    <td>waktu</td>
                    <td>totalPrice</td>
                    <td>Penerima</td>
                    <td>Alamat</td>
                </tr>
                <tr>
                    <td>{val.id}</td>
                    <td>{val.time}</td>
                    <td>{val.TotalPrice}</td>
                    <td>{val.recipient}</td>
                    <td>{val.address}</td>
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
        }
        return (
            <div>
                {this.renderHistory()}
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