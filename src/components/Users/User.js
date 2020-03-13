import React from 'react';
import './User.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEnvelope, faGlobe, faPhoneAlt, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    const { img, name, age, email, phone, website, salary } = props.user;

    return (
        <div className="user mb-5 mx-auto col-md-9">
            <div className="userDetains row d-flex align-items-center text-center text-lg-left">
                <div className="col-md-5 col-lg-4">
                    <img src={img} alt="Profile" />
                </div> {/* User Profile Picture */}

                <div className="userInformation col-md-7 col-lg-8">
                    <h2 className="mb-4 mt-3">{name} <small className="d-block d-sm-inline d-md-block d-lg-inline">({age} years old)</small></h2>

                    <div className="row mb-4">
                        <div className="col-lg-7">
                            <p><FontAwesomeIcon icon={faEnvelope} /> {email}</p>
                            <p><FontAwesomeIcon icon={faGlobe} /> {website}</p>
                        </div>
                        <div className="col-lg-5">
                            <p><FontAwesomeIcon icon={faPhoneAlt} /> {phone}</p>
                            <p><FontAwesomeIcon icon={faDollarSign} /> {salary}</p>
                        </div>
                    </div>

                    <button onClick={() => props.addMember(props.user)} className="btn btn-primary float-lg-right"><FontAwesomeIcon icon={faPlus} /> Add Member</button>
                </div> {/* User Information */}
            </div> {/* User Detains */}
        </div> // Container
    );
};

export default User;