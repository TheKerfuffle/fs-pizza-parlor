import axios from "axios";
import {useDispatch} from 'react-redux';
import {useState} from 'react';

function Customer(){

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');

    
    const handleSubmit = event => {
        event.preventDefault();

        console.log('adding customer info for:', {name});

        // let choice = document.getElementsByName('type');
        // for (i=0; i < choice.length; i++) {
        //     if (choice[i].checked) {
        //         setType(choice[i].value);
        //     }
        // }

        // if (document.getElementById('pickup').checked){
        //     setType(document.getElementById('pickup'.value))
        // }
        // else {
        //     setType(document.getElementById('delivery'.value))
        // }

        dispatch({type: 'ADD_CUSTOMER', payload:{
            customer_name: name, 
            street_address: address,
            city: city,
            zip: zip,
            type: type,
        }})
        setName('');
        setAddress('');
        setCity('');
        setZip('');
        setType('');

    //     axios.post('/customer', {
    //         customer_name: name,
    //         street_address: address,
    //         city: city,
    //         zip: zip,

    //     })
    //     .then(response => {
    //         console.log('added book successfully');
    //         //GET the customer from the server again
    //         fetchCustomer();
    //       })
    //       .catch(error => {
    //         alert(`Sorry. things are not working at the moment. Try again later`)
    //         console.log('error adding book', error);
    //       })
    }

    return(
        <>
            <h2>Step 2: Customer Information</h2>
            <form onSubmit={handleSubmit} className="add-customer-form">
                <input placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                />

                <input placeholder="Street Address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                />

                <input placeholder="City"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                />

                <input placeholder="Zip"
                value={zip}
                onChange={(event) => setZip(event.target.value)}
                />
                <br/>
                <input onChange={(event) => setType(event.target.value)} type="radio" id="pickup" name="type" value="pickup" />
                    Pickup
                <br/>
                <input onChange={(event) => setType(event.target.value)} type="radio" id="delivery" name="type" value="delivery" />
                  Delivery
                <br/>
                <button>NEXT</button>


            </form>
        </>
    )
}

export default Customer;