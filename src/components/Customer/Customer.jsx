

function Customer(){
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