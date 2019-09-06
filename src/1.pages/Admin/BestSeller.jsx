import React, { Component } from 'react';
import Axios from 'axios'
import swal from 'sweetalert'
import {urlApi} from '../../3.helpers/database'

class BestSeller extends Component {
    state= {
        productData: ""
    }
    componentDidMount(){
        this.getDataProducts()
    }
    
    getDataProducts = () => {
        Axios.get(urlApi + 'history')
        .then((res)=>{
            var arr = []
            for(var i=0; i< res.data.length; i++){
                for(var x = 0; x < res.data[i].items.length; x++){
                    arr.push(res.data[i].items[x].productId.toString())
                    
                }
            }
            let tempData = {}
            let axiosPromises = []
            for(let i = 0;i < arr.length;i++){
                axiosPromises.push(Axios.get(urlApi + 'products/' + arr[i]))
            }
            Axios.all(axiosPromises).then(res => {
                for(let i = 0;i < res.length;i++){
                    tempData[res[i].data.nama] = 
                    tempData.hasOwnProperty(res[i].data.nama) 
                        ? 
                    tempData[res[i].data.nama] + 1 
                        :
                    1
                }
            Object.keys(tempData).forEach(function(key) {
            
                document.getElementById('tbody').innerHTML += `
                <tr>
                        <td>${key}</td>
                    <td>${tempData[key]}</td>

                    </tr>
                `
              })
            })
        })

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
                                    <thead className="text-center">
                                        <tr>
                                            <th>Nama Item</th>
                                            <th>Jumlah terjual</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbody" className="text-center">
                                            {this.getDataProducts()}
                                            
                                    </tbody>
                                </table>
                                <p>udah keburu dibuat, sayang dihapus</p>
                                <p>ini jumlah dari tiap' barang yang kejual</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default BestSeller;