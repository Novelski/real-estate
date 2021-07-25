import './BookingList.css'

import * as AiIcons from 'react-icons/ai';

import React,{useState} from 'react';

import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import SwitchBtn from '../switch';

const BookingList = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='complete'>
            <div className="row">
            <div className="col-sm-6">
                <h3>Booking List</h3>
                </div>
        </div>
        
  <div className="row">
    <div className="col-12">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Order Id</th>
            <th scope="col">Code</th>
            <th scope="col">Username</th>
            <th scope="col">Property Name</th>
            <th scope="col">Date</th>
            <th scope="col">Price</th>
            <th scope="col">Booking Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>1234abc</td>
            <td>Cristina</td>
            <td>new</td>
            <td>2, June,2021</td>
            <td>2 Cr</td>
            <td>
              Completed
         
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>1234abc</td>
            <td>Cristina</td>
            <td>new</td>
            <td>2, June,2021</td>
            <td>2 Cr</td>
            <td>
              
             Cancelled
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>1234abc</td>
            <td>Cristina</td>
            <td>new</td>
            <td>2, June,2021</td>
            <td>2 Cr</td>
            <td>

              in Progress
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

       
      </div>
    )
}

export default BookingList
