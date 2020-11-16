import React, { useState } from 'react';
import './Login.css';
import google from '../../Icon/google.png';
import fb from '../../Icon/fb.png';
import { googleSignIn, facebookSignIn, initalizeFirebase,createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';

const Login = () => {
    //Initalize Firebase
    initalizeFirebase();
    
    //User HaveAcoount or NewUser State
    const [haveAccount, setHaveAccount] = useState(true);

    //User State
    const [user,setUser] = useState({
            isSignIn: false,
            name: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            error: '',
            success: false
        });
    
    //Form Validation with javascript
    const handleFiledValidation = (e)=>{
        let isFormValid = true;
        const password = document.getElementById('pass').value;

        //FirstName and LastName Validation function
        function formName(inputValue){
            const nameOfInput = document.getElementById(inputValue +'-err');
                if(e.target.value === ''){
                    nameOfInput.innerHTML = `*** Please write ${inputValue} Name`;
                }
                else if(e.target.value.length < 2 || e.target.value.length >= 20){
                    nameOfInput.innerHTML = `*** Please write ${inputValue} Name between 3 to 20 letters`;
                }
               else  if(!isNaN(e.target.value)){
                nameOfInput.innerHTML = "*** Only letter is allowed";
                }else{
                    isFormValid = e.target.value;
                    nameOfInput.innerHTML = "";
                }
            }

            if(e.target.name === 'firstName'){
                formName(e.target.name)
            }
            if(e.target.name === 'lastName'){
                formName(e.target.name)
            }

        //Email Validation
        if(e.target.name === 'email'){
        const emailValid = /\S+@\S+\.\S+/.test(e.target.value);
        if(!emailValid){
            document.getElementById('errEmail').innerHTML = "*** Please input valid email";
            
        }
        else{
            isFormValid = e.target.value;
            document.getElementById('errEmail').innerHTML ='';
            
        }
        }

        //Password Validation
        if(e.target.name === 'password'){
        
            if(e.target.value === ''){
            document.getElementById('errPASS').innerHTML = "*** Please fill the password filed";
            
            }
            else if(e.target.value.length <= 5 || e.target.value.length >= 20){
            document.getElementById('errPASS').innerHTML = "*** Fill the password filed  btween 6 to 20 letter";
            
            }
            else{
            isFormValid = e.target.value;
            document.getElementById('errPASS').innerHTML = "";
            
            }
        }

        //ConfirmPassword Validation
        if(e.target.name === 'confirmPassword'){
            if(e.target.value !== password){
            document.getElementById('errCON').innerHTML = "*** Password didn't match";
            
            }else{
            document.getElementById('errCON').innerHTML = '';
            
            }
        }
         
        if(isFormValid){
        let newUserIfno = {...user};
        newUserIfno[e.target.name] = e.target.value;
        setUser(newUserIfno)
        }
    }

    //Google Sign In
    const handleGoogleSignIn = ()=>{
       googleSignIn()
       .then( res =>{
           setUser(res)
       })
    }

    //Facebook Sing In
    const handleFbSignIn = ()=>{
        facebookSignIn()
        .then( res => {
            setUser(res)
        })
    }


    const onSubmit = (e)=>{

        //Create New Account
        if(!haveAccount && user.email && user.password ){
            createUserWithEmailAndPassword(user.email,user.password,user.firstName,user.lastName)
            .then(res =>{
                console.log('Create account done');
                setUser(res)
            })
          };

          //SignIn Account
          if(haveAccount && user.email && user.password){
            signInWithEmailAndPassword(user.email,user.password)
            .then(res=>{
                alert('SigIn Done')
                setUser(res)
            })
          }
          e.preventDefault();
    }


    return (
        <div>
          <div className="container"> 
            <form className="form-area" onSubmit={onSubmit}>
                <h3 className="text-left mb-5 pt-4">{ haveAccount ? "Login" : "Create an account"}</h3>

                {!haveAccount && <div className="form-group ">
                    <input name="firstName" type="name" placeholder="First Name" className="form-control" id="fName" onBlur={handleFiledValidation} />
                    <span className="text-danger text-left" id="firstName-err" ></span>
                </div>}

                { !haveAccount && <div className="form-group ">
                    <input name="lastName" type="name" placeholder="Last Name" className="form-control" id="lName" onBlur={handleFiledValidation}/>
                    <span className="text-danger text-left " id="lastName-err"></span>
                </div>}

                <div className="form-group ">
                    <input name="email" type="email" placeholder={ haveAccount ?"Username or Email" : "Email"} className="form-control" id="email" onBlur={handleFiledValidation} />
                    <span className="text-danger text-left" id="errEmail"></span>
                </div>

                <div className="form-group ">
                    <input name="password" type="password" placeholder="Passowrd" className="form-control" id="pass" onBlur={handleFiledValidation}/>
                    <span className="text-danger text-left" id="errPASS"></span>
                </div>

               { !haveAccount && <div className="form-group ">
                    <input name="confirmPassword" type="password" placeholder="Confirm Passowrd" className="form-control" id="conpass" onBlur={handleFiledValidation}/>
                    <span className="text-danger text-left" id="errCON"></span>
                </div>}

               { haveAccount && <div className="password-save mb-3 d-flex align-items-center justify-content-between"> 
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" htmlFor="defaultCheck1">
                    Remember Me
                    </label>
                    </div>
                    <div className="forget-password"> 
                        <p>Forgot Password</p>
                    </div>
                </div>}
                
                 <button className="form-control brand-btn login-btn" type="submit">{haveAccount ? "Login" : "Create an account"}</button>

                 <p className="account-have mt-3 text-center">{ !haveAccount ?"Already have an account?": "Don’t have an account?"}<span onClick={()=> setHaveAccount(!haveAccount)}>{ !haveAccount ? " Login": " Create an account"}</span></p>
            </form>

            <div className="or-area ">
                    <p>Or</p>
            </div>

            <div className="social-section">
                <div onClick={handleGoogleSignIn} className="social google-section"> 
                    <img src={google} alt="" />
                    <span>Login with Google</span>
                </div>
                <div onClick={handleFbSignIn}  className=" social facebokk-section"> 
                    <img src={fb} alt="" />
                    <span>Login with FaceBook</span>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Login;