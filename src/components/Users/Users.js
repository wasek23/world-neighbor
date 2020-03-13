import React, { useState } from 'react';
import './Users.css';
import User from './User';
import usersData from '../../usersData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faBoxOpen } from '@fortawesome/free-solid-svg-icons';

const Users = () => {
    const usersInfo = usersData;

    // Add Members when "Add Member" btn clicked
    const [member, setMember] = useState([]);

    const addMember = (meb) => {
        const newMember = [...member, meb];
        const removeDuplicate = newMember.filter(function (item, index) {
            return newMember.indexOf(item) === index;
        });
        setMember(removeDuplicate);
    }

    const membersSalary = member.reduce((salary, meb) => salary + meb.salary, 0);

    return (
        <div className="usersContainer" id="usersContainer">
            <div className="row">
                <div className="col-lg-3 memberAddedContainer text-center text-lg-left">
                    <h3 className="text-center">My Members: {member.length}</h3>

                    <div className="myMembers">
                        <div className="boxIcon">
                            <FontAwesomeIcon icon={faBoxOpen} />
                        </div>
                        {
                            member.map(meb =>
                                <div className="d-flex align-items-center row singleMember">
                                    <img className="col-4" src={meb.img} alt="Profile" />
                                    <div className="col-8">
                                        <h6>{meb.name}</h6>
                                        <small>Salary: <FontAwesomeIcon icon={faDollarSign} /> {meb.salary}</small>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <p className="font-weight-bold text-center">Members total salary: <FontAwesomeIcon icon={faDollarSign} /> {membersSalary}</p>
                </div> {/* Member Aded */}

                <div className="col-lg-9">
                    {usersInfo.map(usr => <User user={usr} addMember={addMember}></User>)}
                </div> {/* User */}
            </div> {/* User Added */}
        </div> // Users Container
    );
};

export default Users;