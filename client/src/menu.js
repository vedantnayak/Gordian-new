import React,{useState} from 'react';
import Axios from 'axios';
import './login.css';
import img from 'C:/Users/VN/Desktop/gordian/client/src/assets/capture.PNG';

export default function Menu(props){
    const [qty1,getqty1]=useState('');
    const [qty2,getqty2]=useState('');
    const [qty3,getqty3]=useState('');
    const [qty4,getqty4]=useState('');
    const [qty5,getqty5]=useState('');
    const [qty6,getqty6]=useState('');
    const [qty7,getqty7]=useState('');
    const [qty8,getqty8]=useState('');
    const [qty9,getqty9]=useState('');
    const [qty10,getqty10]=useState('');
    const submit=()=>{
        Axios.post("http://localhost:3001/menu",{
            qty1: qty1,
            qty2: qty2,
            qty3: qty3,
            qty4: qty4,
            qty5: qty5,
            qty6: qty6,
            qty7: qty7,
            qty8: qty8,
            qty9: qty9,
            qty10: qty10,
        }).then((response)=>{
        if(response.data.message==='correct')
        props.history.push('/');
        })
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
                <td><input type="number" name="qty1" min="0" max="15"  onChange={(e)=>getqty1(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Eggs</td>
                <td>15</td>
                <td><input type="number" name="qty2" min="0" max="15"  onChange={(e)=>getqty2(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Fish</td>
                <td>60</td>
                <td><input type="number" name="qty3" min="0" max="15"  onChange={(e)=>getqty3(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Juice</td>
                <td>20</td>
                <td><input type="number" name="qty4" min="0" max="15"  onChange={(e)=>getqty4(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Naan</td>
                <td>30</td>
                <td><input type="number" name="qty5" min="0" max="15"  onChange={(e)=>getqty5(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Non veg Thali</td>
                <td>100</td>
                <td><input type="number" name="qty6" min="0" max="15"  onChange={(e)=>getqty6(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Paneer Masala</td>
                <td>50</td>
                <td><input type="number" name="qty7" min="0" max="15"  onChange={(e)=>getqty7(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Rice Dal</td>
                <td>40</td>
                <td><input type="number" name="qty8" min="0" max="15"  onChange={(e)=>getqty8(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Roti</td>
                <td>15</td>
                <td><input type="number" name="qty9" min="0" max="15"  onChange={(e)=>getqty9(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Veg Thali</td>
                <td>70</td>
                <td><input type="number" name="qty10" min="0" max="15"  onChange={(e)=>getqty10(e.target.value)}/></td>
            </tr>
        </table>
        <button onClick={submit}>Submit</button>
    </div>
    );
}