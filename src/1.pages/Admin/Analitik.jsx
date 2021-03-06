import React, { Component } from 'react';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';

class Analitik extends Component {
    state = {
        data: []
    }
    componentDidMount(){
        Axios.get(urlApi + 'history')
        .then((res)=> {
            this.setState({data:res.data})
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    totalHarga = () => {
        let result = 0
        this.state.data.map((val)=>{
            result += val.TotalPrice
        })
        return result
    }
    jumlahCart = () => {
        let jumlah = this.state.data.length
        return jumlah    
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
                            <p>Total pendapatan popokpedia adalah {this.totalHarga()}</p>
                            <p>Pendapatan dihitung dari {this.jumlahCart()} transaksi yang berhasil</p>
                            </table>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
        );
    }
}

export default Analitik;