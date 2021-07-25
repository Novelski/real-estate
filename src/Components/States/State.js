import * as AiIcons from 'react-icons/ai';

import SwitchBtn from '../switch';
import React,{useState} from 'react';

import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const State = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='complete'>
            <div className="row">
            <div className="col-sm-6">
                <h3>State List</h3>
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
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">State</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Bootstrap 4 CDN and Starter Template</td>
            <td>Cristina</td>
            <td>2.846</td>
            <td><SwitchBtn/></td>
            <td>
              
              <button type="button" className="btn btn-success">Edit</button>
            <button type="button" className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Bootstrap Grid 4 Tutorial and Examples</td>
            <td>Cristina</td>
            <td>3.417</td>
            <td><SwitchBtn/></td>
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
            <td><SwitchBtn/></td>
            <td>
            <button type="button" className="btn btn-success">Edit</button>
            <button type="button" className="btn btn-danger">Delete</button>
            </td>
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
            Create  State
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

export default State
