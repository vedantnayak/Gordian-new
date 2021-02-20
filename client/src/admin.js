import React,{useState} from 'react';
import Axios from 'axios';
import './login.css';
import img from 'C:/Users/VN/Desktop/gordian/client/src/assets/capture.PNG';

export default function Menu(props){

    const [qty,qtyGet]=useState([]);

    const reset=()=>{
        Axios.post("http://localhost:3001/admin",{
            qty1: 0,
            qty2: 0,
            qty3: 0,
            qty4: 0,
            qty5: 0,
            qty6: 0,
            qty7: 0,
            qty8: 0,
            qty9: 0,
            qty10: 0,
        }).then((response)=>{
        if(response.data.message==='correct')
        props.history.push('/');
        })
    };
    const total=()=>{
        Axios.get("http://localhost:3001/admin").then((response)=>{
            qtyGet(response.data.map(e=>e.quantity));
            console.log(response.data);
            //console.log(response.data.map(e=>e.quantity));
            //console.log(qty[i]);
        });
    };
    return(
    <div className="menu">
        <img src={img} alt='logo'/>
        <br></br>
        <h1 id="a">MENU</h1>
        <table id="t1">
            <tr>
                <th>Dish</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
            <tr>
                <td>Chicken Masala</td>
                <td>70</td>
                <td><input type="text" name="qty1" onChange={event => qtyGet(event.target.value)} value={qty[0]}/></td>
            </tr>
            <tr>
                <td>Eggs</td>
                <td>15</td>
                <td><input type="text" name="qty2" onChange={event => qtyGet(event.target.value)} value={qty[1]}/></td>
            </tr>
            <tr>
                <td>Fish</td>
                <td>60</td>
                <td><input type="text" name="qty3" onChange={event => qtyGet(event.target.value)} value={qty[2]}/></td>
            </tr>
            <tr>
                <td>Juice</td>
                <td>20</td>
                <td><input type="text" name="qty4" onChange={event => qtyGet(event.target.value)} value={qty[3]}/></td>
            </tr>
            <tr>
                <td>Naan</td>
                <td>30</td>
                <td><input type="text" name="qty5" onChange={event => qtyGet(event.target.value)} value={qty[4]}/></td>
            </tr>
            <tr>
                <td>Non veg Thali</td>
                <td>100</td>
                <td><input type="text" name="qty6" onChange={event => qtyGet(event.target.value)} value={qty[5]}/></td>
            </tr>
            <tr>
                <td>Paneer Masala</td>
                <td>50</td>
                <td><input type="text" name="qty7" onChange={event => qtyGet(event.target.value)} value={qty[6]}/></td>
            </tr>
            <tr>
                <td>Rice Dal</td>
                <td>40</td>
                <td><input type="text" name="qty8" onChange={event => qtyGet(event.target.value)} value={qty[7]}/></td>
            </tr>
            <tr>
                <td>Roti</td>
                <td>15</td>
                <td><input type="text" name="qty9" onChange={event => qtyGet(event.target.value)} value={qty[8]}/></td>
            </tr>
            <tr>
                <td>Veg Thali</td>
                <td>70</td>
                <td><input type="text" name="qty10" onChange={event => qtyGet(event.target.value)} value={qty[9]}/></td>
            </tr>
        </table>
        <button onClick={total}>Total</button>
        <button onClick={reset}>Reset</button>
    </div>
    );
}