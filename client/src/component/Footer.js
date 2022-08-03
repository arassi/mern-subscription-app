import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';

const Footer = () => {

  return (
    <div>
        <MDBFooter className='bg-light text-center text-white'>

            <div className='container p-4 pb-0'>
                <section className='mb-4'>
                <a
                    className='btn btn-primary btn-floating m-1'
                    style={{ backgroundColor: '#3b5998' }}
                    href='#!'
                    role='button'
                >
                    <MDBIcon fab icon="facebook-f" />
                </a>

                <a
                    className='btn btn-primary btn-floating m-1'
                    style={{ backgroundColor: '#55acee' }}
                    href='#!'
                    role='button'
                >

                </a>

                <a
                    className='btn btn-primary btn-floating m-1'
                    style={{ backgroundColor: '#dd4b39' }}
                    href='#!'
                    role='button'
                >
                    <MDBIcon icon='google' size='fa-lg'/>
                </a>
                <a
                    className='btn btn-primary btn-floating m-1'
                    style={{ backgroundColor: '#ac2bac' }}
                    href='#!'
                    role='button'
                >
                    <MDBIcon icon='instagram' size='fa-lg'/>
                </a>

                <a
                    className='btn btn-primary btn-floating m-1'
                    style={{ backgroundColor: '#0082ca' }}
                    href='#!'
                    role='button'
                >
                    <MDBIcon icon='linkedin-in' size='fa-lg'/>
                </a>

                <a
                    className='btn btn-primary btn-floating m-1'
                    style={{ backgroundColor: '#333333' }}
                    href='#!'
                    role='button'
                >
                    <MDBIcon icon='github' size='fa-lg'/>
                </a>
                </section>
            </div> 

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' , marginBottom: '0vh'}}>
                Anthony Rassi © 2022 Copyright
            </div>

        </MDBFooter>
    </div>
  );
}

export default Footer;