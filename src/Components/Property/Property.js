import * as AiIcons from 'react-icons/ai';


import React,{useState} from 'react';

import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const Property = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='complete'>
            <div className="row">
            <div className="col-sm-6">
                <h3>Property List</h3>
                </div>
                <div className="col-sm-6">
        <Button variant="primary" className="control1" onClick={() => setShow(true)}>
          <span><AiIcons.AiOutlinePlus size={25} style={{paddingRight:'5px'}}/>Create</span>
        </Button></div>
        </div>
        
  <div className="row">
    <div className="col-12">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Code</th>
            <th scope="col">Property Type</th>
            <th scope="col">Property Facing</th>
            <th scope="col">State</th>
            <th scope="col">City</th>
            <th scope="col">Zone</th>
            <th scope="col">Franchise</th>
            <th scope="col">Pincode</th>
            <th scope="col">Location</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >prop</td>
            <td>123as</td>
            <td>Residential</td>
            <td>North</td>
            <td>Telangana</td>
            <td>Hyderabad</td>
            <td>South </td>
            <td>Secunderabad</td>
            <td>500082</td>
            <td>Hyderabad</td>
            <td> </td>
            <td>2 Cr </td>
          </tr>
          <tr>
          <td >prop</td>
            <td>123as</td>
            <td>Residential</td>
            <td>North</td>
            <td>Telangana</td>
            <td>Hyderabad</td>
            <td>South </td>
            <td>Secunderabad</td>
            <td>500082</td>
            <td>Hyderabad</td>
            <td> </td>
            <td>2 Cr </td>
          </tr>
          <tr>
          <td >prop</td>
            <td>123as</td>
            <td>Residential</td>
            <td>North</td>
            <td>Telangana</td>
            <td>Hyderabad</td>
            <td>South </td>
            <td>Secunderabad</td>
            <td>500082</td>
            <td>Hyderabad</td>
            <td> </td>
            <td>2 Cr </td>
          </tr>
        </tbody>
      </table>
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
            Create Property
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form className="row">
            <div className='control col-sm-6'>
            <label>First name</label>
             <input type="text" name="name" id="name"/>
            </div>
            <div className="control col-sm-6">
                     <label>Email</label><br/>
                     <input type="email" name="psw" id="psw"/>
                 </div>
                 <div className='control col-sm-6'>
            <label>Mobile</label>
             <input type="text" name="name" id="name"/>
            </div>
            <div className="control col-sm-6">
                     <label>Person</label><br/>
                     <input type="email" name="psw" id="psw"/>
                 </div>
                 <br/>
                 <div className='control col-sm-6'>
                 <label>
          State <br/>
          <select >
            <option value="grapefruit">Telangan</option>
            <option value="lime">Up</option>
            <option value="coconut">Maha</option>
            <option value="mango">Ap</option>
          </select>
        </label></div>
            <div className="control col-sm-6">
            <label>
          City<br/>
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
          <input type="file"  />
        </label>
        </div>
        <Modal.Footer>
        <Button variant="success">Create</Button>
        <Button >Close</Button>
      </Modal.Footer>
          </form>
          </Modal.Body>
        </Modal>
      </div>
    )
}

export default Property
