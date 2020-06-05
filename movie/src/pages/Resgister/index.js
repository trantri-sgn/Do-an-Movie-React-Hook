import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userServices } from "../../Sevices";
import { registerSchema } from "../../Sevices/user";

class Register extends Component {
  _handleSubmit = (values) => {
    userServices
      .Register(values)
      .then((res) => {
        window.location.href = "/";
      })
      .catch((err) => {
        alert(err);
      });
  };
  render() {
    return (
      <div>
        <div className="register w-50 mx-auto">
          <h1 className="display-6 text-center">ĐĂNG KÝ</h1>
          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
              hoTen: "",
              email: "",
              soDT: "",
              maNhom: "GP01",
            }}
            validationSchema={registerSchema}
            onSubmit={this._handleSubmit}
            render={(formikProps) => (
              <Form>
                <div className="row">
                  <div className="col-6 left">
                    <div className="form-group">
                      <label>Tài Khoản:</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="taiKhoan"
                        // placeholder="Vui Lòng Nhập Tài Khoản"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="taiKhoan">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label>Mật Khẩu:</label>
                      <Field
                        type="password"
                        className="form-control"
                        name="matKhau"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="matKhau">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label>Họ Tên:</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="hoTen"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="hoTen">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="col-6 right">
                    <div className="form-group">
                      <label>Email:</label>
                      <Field
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="email">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label>Số Điện Thoại:</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="soDT"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="soDT">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label>Mã Nhóm:</label>
                      <Field
                        component="select"
                        className="form-control"
                        name="maNhom"
                        onChange={formikProps.handleChange}
                      >
                        <option>GP01</option>
                        <option>GP02</option>
                        <option>GP03</option>
                        <option>GP04</option>
                        <option>GP05</option>
                        <option>GP06</option>
                        <option>GP07</option>
                        <option>GP08</option>
                        <option>GP09</option>
                        <option>GP10</option>
                      </Field>
                      <ErrorMessage name="maNhom">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button className="form-button">Đăng Ký</button>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    );
  }
}
export default Register;
