import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { authenticate } = useAuth();
  const onSubmit = (payload) => {
    const isLogin = authenticate(payload);
    if (isLogin) {
      return navigate("/");
    }
    return alert(`Usuario incorreto`);
  };

  return (
    <>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
                  <p className=" mb-5">Entre com seu login e senha</p>
                  <div className="mb-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">Email</Form.Label>
                        <Form.Control
                          {...register("email", { required: true })}
                          type="email"
                          placeholder="Enter email"
                        />
                      </Form.Group>
                      {errors.email?.type === "required" ? (
                        <p role="alert">Email Requerido</p>
                      ) : (
                        <></>
                      )}

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          {...register("password", {
                            required: "Password é obrigatório",
                          })}
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Group>
                      {errors.password?.type === "required" ? (
                        <p role="alert">Password Requerido</p>
                      ) : (
                        <></>
                      )}
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Entrar
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default LoginPage;
