import React from 'react';
import { Router,Link } from 'react-router-dom';

class Account extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        };
    }
    
    fetchData(){
        fetch('http://127.0.0.1:8000/api/Accounts/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    

    render(){
        const accData=this.state.data;
        console.log(accData)
        const rows=accData.map((acc)=>
            
            <tr key={acc.id}>
                <td>{acc.prenom}</td>
                <td>{acc.solde} Dh </td>
                <td>{acc.rib}</td>
                <td>{acc.adresse}</td>

            </tr>
            
        );
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>prenom</th>
                        <th>solde</th>
                        <th>rib</th>
                        <th>addresse</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
    
}

export default Account;