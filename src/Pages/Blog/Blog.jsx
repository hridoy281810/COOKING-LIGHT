import React from 'react';
import html2pdf from 'html2pdf.js';
const Blog = () => {
  const handleDownloadPDF = () => {
    const element = document.getElementById('pdf-container');
    const opt = {
      margin: 0,
      filename: 'myfile.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  }
  return (
    <>
      <div id="pdf-container" className='container'>
        <h1 className='mt-24 mb-10 text-2xl text-center font-bold'>Some essential questions about React JSX and their answers</h1>
        <hr />

        <div className='flex justify-between gap-10 mt-10 mb-10 header-res'>
          <div className="card w-1/2 bg-base-100 shadow-xl image-full">
            <div className="card-body">
              <h2 className="card-title">Tell us the differences between uncontrolled and controlled components?</h2>
              <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.</p>
            </div>
          </div>
          <div className="card w-1/2 bg-base-100 shadow-xl image-full">
            <div className="card-body">
              <h2 className="card-title">How to validate React props using PropTypes?</h2>
              <p>  <strong>Installation: </strong>  npm install --save prop-types</p> <br />
              <p><strong>Importing:</strong> import PropTypes from 'prop-types';</p>
              <p><strong>Usage:</strong> function MyComponent(props) <br />
                {`

MyComponent.propTypes
 = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isMale: PropTypes.bool.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string,
    zipCode: PropTypes.number.isRequired
  })
};`}
              </p>

            </div>

          </div>
        </div>

        <div className='flex justify-between gap-10 mt-10 mb-10 header-res'>
          <div className="card  w-1/2 bg-base-100 shadow-xl image-full">
            <div className="card-body">
              <h2 className="card-title">Tell us the differences between uncontrolled and controlled components?</h2>
              <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.</p>

            </div>

          </div>
          <div className="card w-1/2 bg-base-100 shadow-xl image-full">
            <div className="card-body">
              <h2 className="card-title">How to validate React props using PropTypes?</h2>
              <p>  <strong>Installation: </strong>  npm install --save prop-types</p> <br />
              <p><strong>Importing:</strong> import PropTypes from 'prop-types';</p>
              <p><strong>Usage:</strong> function MyComponent(props) <br />
                {`

MyComponent.propTypes
 = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isMale: PropTypes.bool.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string,
    zipCode: PropTypes.number.isRequired
  })
};`}
              </p>

            </div>

          </div>
        </div>
      </div>
      <div className='flex justify-center mb-24 mt-10 '>
        <button onClick={handleDownloadPDF} className="btn btn-wide btn-primary">download pdf</button>
      </div>
    </>
  );
};

export default Blog;