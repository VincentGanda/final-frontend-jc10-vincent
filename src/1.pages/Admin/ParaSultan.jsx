import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import {connect} from 'react-redux'
class ParaSultan extends Component {
    state = {
        data: []
    
    }
    
    componentDidMount(){
        Axios.get(urlApi + 'history')
        .then((res)=>{
            this.setState({data: res.data})
           
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    fangsienSultan = () => {
        var jsx = this.state.data.map((val)=>{
            return(
               <p>{val.TotalPrice}</p> 
            )
        })
       return jsx
        
    } 
  
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow mt-3">
                            <div className="card-header border-0 pt-5">

                            </div>
                            <div className="card-body">
                                <table className="table table-dark text-white rounded">
                                    <p>Sultan kita adalah dengan pembelajaan tertinggi sebesar {this.fangsienSultan()} </p>
                                </table>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        id: state.user.id,
        items: state.user.id
    }
}

export default connect (mapStateToProps)(ParaSultan);