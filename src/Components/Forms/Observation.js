import React, { useState } from 'react';
import { Collapse, Col, Row, Button, Form, Input, InputNumber, Select, DatePicker } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const { Panel } = Collapse;

const Observation = ({ username }) => {
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleSubmit = () => {
    let formData = FormInsert.getFieldValue();
    formData["CreateBy"] = username;
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    formData["day"] = day;
    formData["month"] = month;
    formData["year"] = year;
    axios
      .post("http://localhost:5147/api/tintingbanglore/post", formData)
      .then(
        toast("Data is being saved", {
          position: "top-center",
          autoClose: 50,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      );
  };

  const [FormInsert] = Form.useForm();

  return (
    <>
      <div className="outercontainer">
        
        <div className="container-fluid mt-5">
          <Collapse
            bordered={false}
            activeKey={isFormVisible ? ['formPanel'] : []}
            expandIconPosition="right"
            onChange={() => setIsFormVisible(!isFormVisible)}
            style={{ marginBottom: '10px' }} // Add margin to make it more compact
          >
            <Panel
              header={isFormVisible ? <h1 style={{ fontWeight: 'bold', fontSize: '25px', margin: -5 }}>Observations</h1> : <h1 style={{ fontWeight: 'bold', fontSize: '25px', margin: -5 }}>Observations</h1>}
              key="formPanel"
              style={{ padding: '10px' }} // Add padding to make it more compact
            >
              <Form
                form={FormInsert}
                className="FormMainClass"
                onFinish={handleSubmit}
                layout="vertical"
              >
                <Row gutter={[16, 24]}>
                  <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
                    <Form.Item
                      label="Depot"
                      name="Depot"
                      rules={[
                        {
                          required: true,
                          message: "Please provide a Depot",
                        },
                      ]}
                    >
                      <DatePicker format={"YYYY-MM-DD"} style={{ width: "100%" }} />
                    </Form.Item>
                  </Col>

                  <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
                    <Form.Item
                      label="Base Tinted (Report)"
                      name="BaseTintedAsPerReport"
                      rules={[
                        {
                          required: true,
                          message: "Please provide the Base Tinted",
                        },
                      ]}
                    >
                      <InputNumber style={{ width: "100%" }} maxLength={20} />
                    </Form.Item>
                  </Col>

                  <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item
                  label="Colourant Poured in Cannisters"
                  name="ColourantPouredInCannisters"
                  rules={[
                    {
                      required: true,
                      message: "Please provide the Colourant Poured",
                    },
                  ]}
                >
                  <InputNumber style={{ width: "100%" }} maxLength={20} />
                </Form.Item>
              </Col>

              <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item
                  label="Colourant Consumed (HistoryFile)"
                  name="ColourantConsumedAsPerHistoryFile"
                  rules={[
                    {
                      required: true,
                      message: "Please provide the Colourant Consumed",
                    },
                  ]}
                >
                  <InputNumber style={{ width: "100%" }} maxLength={20} />
                </Form.Item>
              </Col>

              <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item
                  label="Remarks"
                  name="Remarks"
                  rules={[
                    {
                      required: true,
                      message: "Please provide the Remarks",
                    },
                  ]}
                >
                  <Input style={{ width: "100%" }} maxLength={20} />
                </Form.Item>
              </Col>

              <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item
                  label="Branding for Dispensing Machine"
                  name="BrandingforDispensingMachine"
                  rules={[
                    {
                      required: true,
                      message: "Please provide a Branding for Dispensing Machine",
                    },
                  ]}
                >
                  <Select style={{ width: "100%" }}>
                    <Select.Option value="">Select</Select.Option>
                    <Select.Option value="Old">Old</Select.Option>
                    <Select.Option value="New">New</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item
                  label="Branding for GyroShaker Machine"
                  name="BrandingforGyroShakerMachine"
                  rules={[
                    {
                      required: true,
                      message: "Please provide a Branding for GyroShaker Machine",
                    },
                  ]}
                >
                  <Select style={{ width: "100%" }}>
                    <Select.Option value="">Select</Select.Option>
                    <Select.Option value="Old">Old</Select.Option>
                    <Select.Option value="New">New</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
                </Row>

                <Row justify="end">
                  <Col className="gutter-box">
                    <Form.Item className="FormButtonClass">
                      <Button type="primary" danger onClick={() => FormInsert.resetFields()}>
                        Reset
                      </Button>
                      <Button type="primary" htmlType="submit" style={{ marginLeft: "10px" }}>
                        Submit
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Panel>
          </Collapse>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Observation;
