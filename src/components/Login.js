import React, { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Pastikan Bootstrap diimport

const Login = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const [message, setMessage] = useState(''); 
  const navigate = useNavigate(); 

  const handleEmailChange = (e) => setEmail(e.target.value); 
  const handlePasswordChange = (e) => setPassword(e.target.value); 
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible); 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    if (email === 'user@example.com' && password === 'userexample') { 
      setMessage('Login Berhasil GG BRO!'); 
      navigate('/Home'); 
    } else { 
      setMessage('Login Gagal! sana cari password lu!'); 
    } 
  };

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center vh-100 bg-light'>
      <Row className="justify-content-center w-100">
        <Col md={6} lg={4} className="bg-white p-4 rounded shadow">
          <h2 className='text-center mb-4'>LOGIN !</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor='email' className='form-label'>Email :</label>
              <input
                type="email"
                id="email"
                placeholder="user@example.com"
                className='form-control'
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <div className="input-group">
                <input 
                  type={passwordVisible ? "text" : "password"} 
                  id="password" 
                  placeholder="userexample"
                  className="form-control" 
                  value={password} 
                  onChange={handlePasswordChange}
                  required
                />
                <button 
                  type="button" 
                  className="btn btn-outline-secondary" 
                  onClick={togglePasswordVisibility}
                > 
                  {passwordVisible ? "Hide" : "Show"} 
                </button>
              </div>
            </div>
            <button type="submit" className='btn btn-primary w-100'>LOG IN</button>
          </form>
          <p className="text-center mt-3">
             Don't have an account? <Link to="/Register">Register here</Link> </p>
          {message && <div className="alert alert-danger mt-3 text-center ">{message}</div>}
        </Col>
      </Row>
    </div>
  );
};

export default Login;
