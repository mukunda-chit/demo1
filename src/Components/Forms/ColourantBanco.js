import React, { useState,useEffect} from "react";
import { Col, Row, Button, Form, Input, DatePicker, InputNumber, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
const ColourantBanco = () => {
  const [Date1, setDate] = useState('');
  const [DispensingMachine, setDispensingMachine] = useState(false);
  const [MFG,setMFG]=useState(false);
  const [Depot,setDepot]=useState('');
  const [Loading,setLoading]=useState(false);
  var CreateBy = 'Kumaran';

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const date = new Date();
  //   let day = date.getDate();
  //   let month = date.getMonth() + 1;
  //   let year = date.getFullYear();
  //   const data = { "Date": Date1, "Colourant": Colorant, "BatchNo": parseInt(BatchNo), "Quantity": parseInt(Quantity), DispensingMachine, day, month, year, CreateBy };
  //   console.log(JSON.stringify(data));
  //   fetch('http://localhost:5147/api/tintingcolourants/post', {
  //     method: 'POST',
  //     headers: { "content-Type": "application/json" },
  //     body: JSON.stringify(data)
  //   }).then(() => {
  //     setDate('');
  //     setColorant('');
  //     setBatchNo('');
  //     setQuantity('');
  //     setDispensingMachine('');
  //     alert("Data Saved")
  //   });
  // };
  const handleSubmit = () =>{
    let formData = FormInsert.getFieldValue();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    formData["day"] = day;
    formData["month"] = month;
    formData["year"] = year;
    axios.post('https://localhost:7206/api/colourants/post',formData)

  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://localhost:7206/api/login/get/12345`)
      .then((response) => {
        setDepot(response.data[0].depot);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        if (Depot === 'Banglore') {
          setDispensingMachine(true);
          setMFG(false);
        }
        else if(Depot==='Chennai'){
          setDispensingMachine(true);
          setMFG(true);
        }
        setLoading(false);
      });
  }, [Depot]);


  const [FormInsert] = useForm();

  return (
    <>
      <h1 className="text-center">Colorant Banco</h1>
      {Loading==false && <div className="container-fluid mt-5">
        <Form
          form={FormInsert}
          className="FormMainClass"
          onFinish={handleSubmit}
          layout="vertical"
        >
          <Row gutter={[16, 24]}>
            <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
              <Form.Item
                label="Date"
                name="Date"
                rules={[
                  {
                    required: true,
                    message: "Please provide a Date",
                  },
                ]}
              >
                <DatePicker format={"YYYY-MM-DD"} style={{ width: "100%" }} placeholder="" />
              </Form.Item>
            </Col>

            <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
              <Form.Item
                label="Colourant"
                name="Colourants"
                rules={[
                  {
                    required: true,
                    message: "Please provide a Colourant",
                  },
                ]}
              >
                <Input style={{ width: "100%" }} maxLength={20} />
              </Form.Item>
            </Col>

            <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
              <Form.Item
                label="BatchNo."
                name="BatchNo"
                rules={[
                  {
                    required: true,
                    message: "Please provide a BatchNo.",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} maxLength={40} />
              </Form.Item>
            </Col>

            <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
              <Form.Item
                label="Quantity"
                name="Quantity"
                rules={[
                  {
                    required: true,
                    message: "Please provide a Quantity",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>

            {DispensingMachine && <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
              <Form.Item
                label="Dispensing Machine"
                name="DispensingMachine"
                rules={[
                  {
                    required: true,
                    message: "Please provide a Dispensing Machine",
                  },
                ]}
              >
                <Select style={{ width: "100%" }}>
                  <Select.Option value="">Select</Select.Option>
                  <Select.Option value="Banco">Banco</Select.Option>
                  <Select.Option value="D180">D180</Select.Option>
                </Select>
              </Form.Item>
            </Col>}

           {MFG && <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
              <Form.Item
                label="MFG"
                name="MFG"
                rules={[
                  {
                    required: true,
                    message: "Please provide the MFG Date",
                  },
                ]}
              >
                <DatePicker format={"YYYY-MM-DD"} style={{ width: "100%" }} placeholder="" />
              </Form.Item>
            </Col>}
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
      </div>}
    </>
  );
};

export default ColourantBanco;