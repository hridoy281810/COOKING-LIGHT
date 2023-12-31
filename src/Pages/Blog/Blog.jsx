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
              <p><strong>uncontrolled component:</strong> In an uncontrolled component, the handa reaction is instead controlled by itself. The state of the component is not handled by feedback. Data is retrieved from the DOM using ref . Input values ​​are set by the user and any changes to the input are reflected in the DOM.</p>
               <p><strong>controlled component:</strong> In a controlled component, the format data is controlled by the response. The element's state is controlled by feedback, and the input value is passed to the element as a prop. Any changes imported are reflected in the state of the element by updating the value of the input</p>
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
              <h2 className="card-title">Tell us the difference between nodejs and express js ?</h2>
              <p>node.js is a package that allows the server to run any project coded with JavaScript. On the other hand, express.js is a web application that provides features and toolset for building web applications using the language. It can be easily created through this. Express makes that task easier, where node.js allows you to run quotes</p>

            </div>

          </div>
          <div className="card w-1/2 bg-base-100 shadow-xl image-full">
            <div className="card-body">
              <h2 className="card-title">What is a custom hook, and why will you create a custom hook?</h2>
               <p>There are many types of React that are used to create different projects, one of them is a special one, Custom Hook. This is what the user will create and use in his own way, which gives many benefits to our project.</p>
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