import React, { useState, useEffect } from 'react';
import { useForm } from 'antd/es/form/Form';
import { Col, Row, Button, Form, Input, DatePicker, Select } from 'antd';
import axios from 'axios';
 
const Tinting = ({ username, setIsDummyButtonPressed }) => {
  const [Depot, setDepot] = useState('');
  const [DispensingMachine, setDispensingMachine] = useState(false);
  const [nameOfSalesPerson, setNameOfSalesPerson] = useState(true);
  const [colorShade, setColorShade] = useState(false);
  const [tintingInvoice, setTintingInvoice] = useState(false);
  const [otherObservations, setOtherObservations] = useState(true);
  const [originalInvoice, setOriginalInvoice] = useState(false);
  const [projectRetail, setProjectRetail] = useState(false);
  const [smproject, setSMProject] = useState(true);
 
  var CreateBy = 'Kumaran';
 
  const handleSubmit = () => {
    let formData = FormInsert.getFieldValue();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    formData['day'] = day;
    formData['month'] = month;
    formData['year'] = year;
    axios.post('https://localhost:7206/api/tinting/post', formData);
  };
 
  useEffect(() => {
    axios
      .get('https://localhost:7206/api/login/get/12345')
      .then((response) => {
        setDepot(response.data[0].depot);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
 
  const [FormInsert] = useForm();
 
  return (
<div className="TintingContainer">
<Form form={FormInsert} className="FormMainClass" onFinish={handleSubmit} layout="vertical">
<Row gutter={16}>
<Col xs={24} sm={12} md={8} lg={6}>
<Form.Item
              label="Date"
              name="Date"
              rules={[
                {
                  required: true,
                  message: 'Please provide a date',
                },
              ]}
>
<DatePicker format="YYYY-MM-DD" style={{ width: '100%' }} />
</Form.Item>
</Col>
<Col xs={24} sm={12} md={8} lg={6}>
<Form.Item
              label="Name Of Project"
              name="NameOfTheProject"
              rules={[
                {
                  required: true,
                  message: 'Please provide a name',
                },
              ]}
>
<Input style={{ width: '100%' }} maxLength={20} />
</Form.Item>
</Col>
          {nameOfSalesPerson && (
<Col xs={24} sm={12} md={8} lg={6}>
<Form.Item
                label="Name Of Sales Person"
                name="NameOfSalesPerson"
                rules={[
                  {
                    required: true,
                    message: 'Please provide the name of the salesperson',
                  },
                ]}
>
<Input style={{ width: '100%' }} maxLength={20} />
</Form.Item>
</Col>
          )}
<Col xs={24} sm={12} md={8} lg={6}>
<Form.Item
              label="Fandeck"
              name="Fandeck"
              rules={[
                {
                  required: true,
                  message: 'Please provide a Fandeck',
                },
              ]}
>
<Input style={{ width: '100%' }} maxLength={40} />
</Form.Item>
</Col>
<Col xs={24} sm={12} md={8} lg={6}>
<Form.Item
              label="Shade Code"
              name="ShadeCode"
              rules={[
                {
                  required: true,
                  message: 'Please provide a Shade Code',
                },
              ]}
>
<Input style={{ width: '100%' }} maxLength={40} />
</Form.Item>
</Col>
          {colorShade && (
<Col xs={24} sm={12} md={8} lg={6}>
<Form.Item
                label="Colour Shade"
                name="ColourShade"
                rules={[
                  {
                    required: true,
                    message: 'Please provide a Colour Shade',
                  },
                ]}
>
<Input style={{ width: '100%' }} maxLength={20} />
</Form.Item>
</Col>
          )}
<Col xs={24} sm={12} md={8} lg={6}>
<Form.Item
              label="Shade Name"
              name="ShadeName"
              rules={[
                {
                  required: true,
                  message: 'Please provide a Shade Name',
                },
              ]}
>
<Input style={{ width: '100%' }} maxLength={20} />
</Form.Item>
</Col>
<Col xs={24} sm={12} md={8} lg={6}>
<Form.Item
              label="Product"
              name="Product"
              rules={[
                {
                  required: true,
                  message: 'Please provide a Product',
                },
              ]}
>
<Input style={{ width: '100%' }} maxLength={20} />
</Form.Item>
</Col>
<Col xs={24} sm={12} md={8} lg={6}>
<Form.Item
              label="Base"
              name="Base"
              rules={[
                {
                  required: true,
                  message: 'Please provide a Base',
                },
              ]}
>
<Input style={{ width: '100%' }} maxLength={20} />
</Form.Item>
</Col>
          {DispensingMachine && (
<Col xs={24} sm={12} md={8} lg={6}>
<Form.Item
                label="Dispensing Machine"
                name="DispensingMachine"
                rules={[
                  {
                    required: true,
                    message: 'Please select an option',
                  },
                ]}
>
<Select style={{ width: '100%' }}>
<Select.Option value="Yes">Yes</Select.Option>
<Select.Option value="No">No</Select.Option>
</Select>
</Form.Item>
</Col>
          )}
          {tintingInvoice && (
<Col xs={24} sm={12} md={8} lg={6}>
<Form.Item
                label="Tinting Invoice"
                name="TintingInvoice"
                rules={[
                  {
                    required: true,
                    message: 'Please select an option',
                  },
                ]}
>
<Select style={{ width: '100%' }}>
<Select.Option value="Yes">Yes</Select.Option>
<Select.Option value="No">No</Select.Option>
</Select>
</Form.Item>
</Col>
          )}
          {originalInvoice && (
<Col xs={24} sm={12} md={8} lg={6}>
<Form.Item
                label="Original Invoice"
                name="OriginalInvoice"
                rules={[
                  {
                    required: true,
                    message: 'Please select an option',
                  },
                ]}
>
<Select style={{ width: '100%' }}>
<Select.Option value="Yes">Yes</Select.Option>
<Select.Option value="No">No</Select.Option>
</Select>
</Form.Item>
</Col>
          )}
          {projectRetail && (
<Col xs={24} sm={12} md={8} lg={6}>
<Form.Item
                label="Project Retail"
                name="ProjectRetail"
                rules={[
                  {
                    required: true,
                    message: 'Please select an option',
                  },
                ]}
>
<Select style={{ width: '100%' }}>
<Select.Option value="Yes">Yes</Select.Option>
<Select.Option value="No">No</Select.Option>
</Select>
</Form.Item>
</Col>
          )}
          {smproject && (
<Col xs={24} sm={12} md={8} lg={6}>
<Form.Item
                label="SM Project"
                name="SMProject"
                rules={[
                  {
                    required: true,
                    message: 'Please select an option',
                  },
                ]}
>
<Select style={{ width: '100%' }}>
<Select.Option value="Yes">Yes</Select.Option>
<Select.Option value="No">No</Select.Option>
</Select>
</Form.Item>
</Col>
          )}
<Col xs={24} sm={12} md={8} lg={6}>
<Form.Item
              label="Machine Code"
              name="MachineCode"
              rules={[
                {
                  required: true,
                  message: 'Please provide a Machine Code',
                },
              ]}
>
<Input style={{ width: '100%' }} maxLength={10} />
</Form.Item>
</Col>

<Col xs={24} sm={12} md={8} lg={6}>
<Form.Item
              label="Sample Analysis"
              name="SampleAnalysis"
              rules={[
                {
                  required: true,
                  message: 'Please provide a Sample Analysis',
                },
              ]}
>
<Input style={{ width: '100%' }} rows={4} />
</Form.Item>
</Col>
<Col xs={24} sm={12} md={8} lg={6}>
<Form.Item label="Remarks" name="Remarks">
<Input style={{ width: '100%' }} rows={4} />
</Form.Item>
</Col>
<Col xs={24} sm={12} md={8} lg={6}>
<Form.Item
              label="Other Observations"
              name="OtherObservations"
              rules={[
                {
                  required: true,
                  message: 'Please provide other observations',
                },
              ]}
>
<Input style={{ width: '100%' }} rows={4} />
</Form.Item>
</Col>
</Row>
<Form.Item>
<Button type="primary" htmlType="submit">
            Submit
</Button>
</Form.Item>
</Form>
</div>
  );
};
 
export default Tinting;