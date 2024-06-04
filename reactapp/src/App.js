import { useEffect, useState } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Submit from './Submit';
function App() {
  const [users, Setusers] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then(res => res.json())
      .then(data => Setusers(data))
  }, [])


  return (
    <div className="App mb-10 ">
      <div className='d-flex justify-content-center item-center'>
        <div class="card " style={{ width: '18rem' }}>
          {
            users.map((item) => (
              <ul key={item._id} class="list-group list-group-flush">

                <li class="list-group-item text-danger" >{item.username}</li>
                <li class="list-group-item">{item.email}</li>

              </ul>
            ))
          }

        </div>
      </div>
      <div>



      </div>
      <Submit />
      <ToastContainer />
    </div>
  );
}

export default App;
