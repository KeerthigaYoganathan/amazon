import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AddressFormModal = ({handleShow, handleClose, show, formData, setFormData, handleSubmit}) => {
  return (
    <>
        {JSON.stringify(formData, null, 1)}
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="adrs-form-sec">
                  {/* <div className="adrs-form-container">
                     <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <div className="form-full-name">
                            <label>Full name</label>
                            <input type="text" name="fullName" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} required/>
                          </div>
                          <div className="form-phone-no">
                              <label>Phone number</label>
                              <input type="text" name="phoneno" value={formData.phoneNo} onChange={(e)=> setFormData({...formData, phoneNo: e.target.value})}/>
                          </div>
                          <div className="form-adrs">
                              <label>Address</label>
                              <input type="text" name="address" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})}/>
                          </div>
                          <div className="form-city">
                              <label>Postal Code</label>
                              <input type="text" name="city" value={formData.postalCode} onChange={(e) => setFormData({...formData, postalCode: e.target.value})}/>
                          </div>
                          <div className="">

                          </div>
                        </div>
                     </form>
                  </div> */}
                <Form>
      <Form.Group className="mb-3">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="text" placeholder="Enter phone number" value={formData.phoneNo} onChange={(e) => setFormData({ ...formData, phoneNo: e.target.value })}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Postal code</Form.Label>
        <Form.Control type="text" placeholder="Enter postal code" value={formData.postalCode} onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}/>
      </Form.Group>
      
      
    </Form>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit} className="rounded-3xl" style={{background:"#FFD814", border:"#FFD814",  padding:"6px", fontSize:"14px", color:"#000", padding:"8px 12px",}}>
            Use this address
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddressFormModal