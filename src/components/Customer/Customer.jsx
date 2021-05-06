import axios from "axios";
import {useDispatch} from 'react-redux';

function Customer(){

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        console.log('adding customer info for:', {name});

        dispatch({type: 'ADD_CUSTOMER', payload:{
            customer_name: name, 
            street_address: address,
            city: city,
            zip: zip,
            type: 
        }})
        setName('');
        setAddress('');
        setCity('');
        setZip('');

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



                <button>NEXT</button>


            </form>
        </>
    )
}

export default Customer;