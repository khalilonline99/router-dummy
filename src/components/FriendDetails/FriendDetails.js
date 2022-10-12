import React from 'react';
import './FriendDetails.css'
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetails = useLoaderData();
    console.log(friendDetails);
    return (
        <div className='details-container'>
            <h4>All you need to know about.</h4>
            <h3>Name: {friendDetails.name}</h3>
            <h3>Email: {friendDetails.email}</h3>
            <h3>Address: {friendDetails.address.city}, {friendDetails.address.street}, {friendDetails.address.suite}</h3>
            <h3>Company:{friendDetails.company.name}</h3>
            <h3>Website: {friendDetails.website}</h3>
        </div>
    );
};

export default FriendDetails;