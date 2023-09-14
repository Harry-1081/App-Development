import './Signup.css';

function Signup() {

  return (
    <>
      <div className='signup-page'>
          <div className='signup-box'>

            <div className='signup-div'>
              <span className='signup-text'><b>Sign up</b></span>
            </div>

            <form>

            <div className='username-div'>
              <span className='username-text'>Username</span>
              <input className='username-in' type='text' placeholder='Username' required></input>
            </div>

            <div className='mail2-div'>
              <span className='mail2-text'>Email</span>
              <input className='mail2-in' type='email' placeholder='Email' required></input>
            </div>

            <div className='pw2-div'>

              <span className='pw2-text1'>Password</span>
              <input className='pw2-in1' type='password' placeholder='Password' required></input>

              <span className='pw2-text2'>Confirm Password</span>
              <input className='pw2-in2' type='password' placeholder='Confirm Password' required></input>
            </div>

            <div className='signupbtn-div'>
              <button className='signup-btn' >Sign up</button>
            </div>

                </form>
          </div>
      </div>
    </>
  );
}

export default Signup;