
import React, { useState, useEffect } from 'react';
import * as AiIcons from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import * as APICallManager from '../../server/ApiCallManager';
import config from '../../config.json';
// import config from '../../../public/config.json';
import SwitchBtn from '../switch';

import './AdminUser.css';

const AdminUser = () => {
  // const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  // const [activePage, setActivePage] = useState('1');
  const [adminUserList, setAdminUserList] = useState([]);
  useEffect(() => {
    const obj = { url: config.baseUrl + config.getUsersListAPI };
    console.log('-----obj', obj);
    APICallManager.getCall(obj, resObj => {
      console.log('-----resObj', resObj);
      if (resObj.data.statusCode === '0000') {
        setAdminUserList(resObj.data.statusResult);
      }
    });
  }, []);

  const handleCreate = () => {
    
  }
  // console.log('-----AdminUserList:>', adminUserList);

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
        {/* {allEndUsersList && allEndUsersList.length > 0 ? */}
           <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">State</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {adminUserList.map((data, i) =>
                <tr key={i}>
                  <th scope="row">{data.name}</th>
                  <td>{data.Mobile}</td>
                  <td>{data.State}</td>
                  <td>{data.State}</td>
                  <td><SwitchBtn checked={data.status} /></td>
                  <td>
                    <button type="button" className="btn btn-success">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              )}
                <tr>
                <th scope="row">2</th>
                <td>Bootstrap Grid 4 Tutorial and Examples</td>
                <td>Cristina</td>
                <td>3.417</td>
                <td><SwitchBtn checked={true} /></td>
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
                <td><SwitchBtn /></td>
                <td>
                  <button type="button" className="btn btn-success">Edit</button>
                  <button type="button" className="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
           {/* : <p>No Users</p>} */}
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
              <input type="text" name="name" id="name" />
            </div>
            <div className="control col-sm-6">
              <label>Email</label><br />
              <input type="email" name="psw" id="psw" />
            </div>
            <div className='control col-sm-6'>
              <label>Mobile</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="control col-sm-6">
              <label>Person</label><br />
              <input type="email" name="psw" id="psw" />
            </div>
            <br />
            <div className='control col-sm-6'>
              <label>
                State <br />
                <select >
                  <option value="grapefruit">Telangan</option>
                  <option value="lime">Up</option>
                  <option value="coconut">Maha</option>
                  <option value="mango">Ap</option>
                </select>
              </label></div>
            <div className="control col-sm-6">
              <label>
                City<br />
                <select >
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
                <input type="file" />
              </label>
            </div>
            <Modal.Footer>
              <Button variant="success" onClick={handleCreate} >Create</Button>
              <Button >Close</Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AdminUser
