
import React, { useState, useEffect } from 'react';
import * as AiIcons from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

// import * as APICallManager from '../../server/ApiCallManager';
// import config from '../../config.json';
// // import config from '../../../public/config.json';
// import SwitchBtn from '../switch';

import './AdminUser.css';

const AdminUser = () => {
  // const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  // const [activePage, setActivePage] = useState('1');
  const [adminUserList, setAdminUserList] = useState([]);
  const [url, setUrl] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [state, setState] = React.useState({
    level: "master"
  });

  useEffect(() => {
    // const obj = { url: 'https://localhost:44361/api/users' };
    // const obj = { url: config.baseUrl + config.getUsersListAPI };
    // console.log('-----obj', obj);
    // APICallManager.getCall(obj, resObj => {
    //   console.log('-----resObj', resObj);
    //   if (resObj.data.statusCode === '0000') {
    //     setAdminUserList(resObj.data.statusResult);
    //   }
    // });

    fetch("https://localhost:44361/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          // console.log('-----result', result);
          if (result.length > 0) {
            setAdminUserList(result);
          }
        });
  }, []);
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  const handleImage = event => {
    let fileType = event.target.files[0].type.replace(/\/.+/g, "$'");
    const file = event.target.files[0];
    setUrl(URL.createObjectURL(file));
    if (fileType == 'image') {
      setImageFile( file );
    }
  };
  const handleCreate = async (event) => {
    let euData = {
      "Name": state.name,
      "DateOfBirth": "2000-01-06T17:16:40",
      "DisplayName": "MS",
      "FirstName": "m",
      "LastName": "S",
      "Gender": "M",
      "UserType": "EU",
      "Email": state.email,
      "Password": "12345asdfg",
      "Otp": 1234,
      "Mobile": state.mobile,
      "Address": "1212 jksa",
      "State": state.countryState,
      "City": "1",
      "Zone": "1",
      "Pincode": "1",
      "Loction": 17.56,
      "ImagePath": imageFile.name,
      "IsDeleted": false,
      "CreateDate": '2021-01-06T17:16:40',
      "CreatedBy": 1,
      "UpdatedDate": '2021-01-06T17:16:40',
      "UpdatedBy": 1
      };
      console.log('---euData', euData);
    var data = new FormData();
    data.append('euData', JSON.stringify(euData));
    let result = await fetch('http://localhost:44361/api/users', {
      method: 'POST',
      body: data,
      headers: {
        "content_type": "application/json",
      }
    }).then(response => {
      response.json().then(responseJson => {
        if (responseJson.statusCode == '0000') {
          alert('user Created Successfully');
        } else {
          alert('user Created Successfully');
        }
      });
    }).catch(error => {
      console.log('error', error);
    });
    event.preventDefault();
  };
  // console.log(new Date().getFullYear()-18, '\n-----newDate:>', new Date());
  // console.log('-----imageFile:>', state);
  // console.log('-----AdminUserList:>', adminUserList); 
  // subYears(new Date(), 18)

  return (
    <div className='complete'>
      <div className="row">
        <div className="col-sm-6">
          <h3>Admin User List</h3>
        </div>
        <div className="col-sm-6">
          <Button variant="primary" className="control1" onClick={() => setShow(true)}>
            <span><AiIcons.AiOutlinePlus size={25} style={{ paddingRight: '5px' }} />Create</span>
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {adminUserList && adminUserList.length > 0 ?
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">State</th>
                {/* <th scope="col">Status</th> */}
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {adminUserList.map((data, i) =>
                <tr key={i}>
                  <th scope="row">{data.name}</th>
                  <td>{data.email}</td>
                  <td>{data.mobile}</td>
                  <td>{data.state == '2' ? 'Telangan' : 'Andhra Pradesh'}</td>
                  {/* <td><SwitchBtn checked={!data.isDeleted} /></td> */}
                  <td>
                    <button type="button" className="btn btn-success pr-5">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              )}
              <tr>
                <th scope="row">2</th>
                <td>Bootstrap Grid 4 Tutorial and Examples</td>
                <td>Cristina</td>
                <td>3.417</td>
                {/* <td><SwitchBtn checked={true} /></td> */}
                <td>
                  <button type="button" className="btn btn-success">Edit</button>
                  <button type="button" className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Bootstrap Flexbox Tutorial and Examples</td>
                <td>Cristina</td>
                <td>1.234</td>
                {/* <td><SwitchBtn /></td> */}
                <td>
                  <button type="button" className="btn btn-success">Edit</button>
                  <button type="button" className="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
         : <p>No Users</p>}
        </div>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Create Admin User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row">
            <div className='control col-sm-6'>
              <label>First name</label>
              <input type="text" name="name" onChange={handleChange} />
            </div>
            <div className="control col-sm-6">
              <label>Email</label><br />
              <input type="email" name="email" onChange={handleChange} />
            </div>
            <div className='control col-sm-6'>
              <label>Mobile</label>
              <input type="text" name="mobile" maxLength='10' onChange={handleChange} />
            </div>
            <div className="control col-sm-6">
              <label>Person</label><br />
              <input type="text" name="person" onChange={handleChange} />
            </div>
            <br />
            <div className='control col-sm-6'>
              <label>
                State <br />
                <select name="countryState" onChange={handleChange} >
                  <option value="0">select</option>
                  <option value="1">Andhra Pradesh</option>
                  <option value="2">Telangan</option>
                </select>
              </label></div>
            <div className="control col-sm-6">
              <label>
                City<br />
                <select >
                  {/* <option value="0">select</option> */}
                  <option value="grapefruit">Hyderabad</option>
                  <option value="lime">Varanasi</option>
                  <option value="coconut">Mumbai</option>
                  <option value="mango">Vizak</option>
                </select>
              </label>
            </div>
            <div className='control col-sm-6'>
              <label>
                Upload fImage:
                <input type="file" onChange={handleImage} />
              </label>
            </div>
            <Modal.Footer>
              <Button variant="success" onClick={handleCreate} >Create</Button>
              <Button onClick={() => setShow(false)} >close</Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AdminUser
