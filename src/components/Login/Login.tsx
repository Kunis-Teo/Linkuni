import React, { useCallback } from "react";
import "./Login.css";
import axios from "axios";
/* eslint no-restricted-globals: ["off"] */

function App() {
  // const handleAddButtonClick = useCallback(() => {
  //   console.log("click");
  // }, []);

  const enterkey = useCallback(() => {
    //@ts-ignore
    if (window.event.keyCode === 13) {
      postSignup();
    }
  }, []);

  const postSignup = useCallback(() => {
    //@ts-ignore
    const signupId = document.querySelector("#logemail2").value;
    //@ts-ignore
    const signupPassword = document.querySelector("#logpass2").value;
    if (signupId.length === 0) {
      alert("ID를 입력해주세요");
    } else if (signupPassword.length === 0) {
      alert("Password를 입력해주세요");
    } else {
      axios
        .post(
          "http://3.38.1.118:8080/auth/signup",
          {
            name: signupId,
            password: signupPassword,
          },
          {
            withCredentials: true, // 쿠키 cors 통신 설정
          }
        )
        .then(function (response) {
          alert("회원가입이 완료되었습니다");
          location.reload(); //여기에 로그인페이지로 이동
          //@ts-ignore
          document.querySelector("#logemail2").value = "";
          //@ts-ignore
          document.querySelector("#logpass2").value = "";
          console.log(response);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);

  const postLogin = useCallback(() => {
    //@ts-ignore
    const loginId = document.querySelector("#logemail1").value;
    //console.log(loginId);
    //@ts-ignore
    const loginPassword = document.querySelector("#logpass1").value;
    //console.log(loginPassword);
    axios
      .post(
        "http://3.38.1.118:8080/auth/signin",
        {
          name: loginId,
          password: loginPassword,
        },
        {
          withCredentials: true, // 쿠키 cors 통신 설정
        }
      )
      .then(function (response) {
        alert("메인페이지로 이동");
        //console.log(response);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Log In </span>
                <span>Sign Up</span>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
              />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <div className="form-group">
                          <input
                            type="email"
                            name="logemail"
                            className="form-style"
                            placeholder="Your id"
                            id="logemail1"
                          />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            name="logpass"
                            className="form-style"
                            placeholder="Your Password"
                            id="logpass1"
                          />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <button onClick={postLogin} className="btn mt-4">
                          submit
                        </button>
                        <p className="mb-0 mt-4 text-center"></p>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Sign Up</h4>
                        <div className="form-group mt-2">
                          <input
                            type="email"
                            name="logemail"
                            className="form-style"
                            placeholder="Enter your id"
                            id="logemail2"
                          />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            name="logpass"
                            className="form-style"
                            placeholder="Enter your Password"
                            id="logpass2"
                            onKeyUp={enterkey}
                          />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <button onClick={postSignup} className="btn mt-4">
                          submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
