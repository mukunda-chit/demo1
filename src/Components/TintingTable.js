import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './Table.css';
import { Link } from 'react-router-dom';

const TintingTable = () => {
  const [searchText, setSearchText] = useState('');

  const columns = [
    {
      title: 'Name of the Project',
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: 'Name of Shade Card',
      dataIndex: 'shadecard',
      key: 'shadecard',
    },
    {
      title: 'Shade Code',
      dataIndex: 'shadecode',
      key: 'shadecode',
    },
    {
      title: 'Shade Name',
      dataIndex: 'shadename',
      key: 'shadename',
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
  ];

  const dataSource = [
    // Your data here
    {
        key:'1',
        project:"D S MAX SOVEREIGN",
        shadecard:"AP Fandeck",
        shadecode:"0765",
        shadename:"Morning Glory",
        product:"Maxx shogun"
    },
    {
        key:'2',
        project:"KUMAR BLILDCON",
        shadecard:"AP Fandeck",
        shadecode:"2387",
        shadename:"ENGLISHELMS",
        product:"Maxx shogun"
    },
    {
        key:'3',
        project:"adarsh enterprises",
        shadecard:"manual",
        shadecode:"0630",
        shadename:"manual",
        product:"bodelac enamel"
    },
    {
        key:'4',
        project:"sreekanth constcuctions",
        shadecard:"AP Fandeck",
        shadecode:"L139",
        shadename:"Blush",
        product:"MAXX MATEX"
    },
    {
        key:'5',
        project:"sreekanth constcuctions",
        shadecard:"manual",
        shadecode:"7887",
        shadename:"manual",
        product:"Matex gold"
    },
    {
        key:'6',
        project:"vishwastha building",
        shadecard:"AP Fandeck",
        shadecode:"L123",
        shadename:"ANGEL CLOUD",
        product:"MAXX MATEX"
    },
    {
        key:'7',
        project:"aptodco yemmiganur",
        shadecard:"AP Fandeck",
        shadecode:"L135",
        shadename:"Sahara dream",
        product:"Neva Distemper"
    },
    {
        key:'8',
        project:"classic paints",
        shadecard:"AP Fandeck",
        shadecode:"8532",
        shadename:"easter lily",
        product:"Maxx Breeze"
    },
    {
        key:'9',
        project:"hinduja lakefront",
        shadecard:"COLOUR CREATIONS PALETTE",
        shadecode:"1519 A",
        shadename:"tremont blue",
        product:"Sumo Xtra"
    },
    {
        key:'10',
        project:"hinduja lakefront",
        shadecard:"COLOUR CREATIONS PALETTE",
        shadecode:"2869 P",
        shadename:"ICY WATERS",
        product:"Sumo Xtra"
    },
    {
        key:'11',
        project:"D S MAX SOVEREIGN",
        shadecard:"AP Fandeck",
        shadecode:"0765",
        shadename:"Morning Glory",
        product:"Maxx shogun"
    },
    {
        key:'12',
        project:"KUMAR BLILDCON",
        shadecard:"AP Fandeck",
        shadecode:"2387",
        shadename:"ENGLISHELMS",
        product:"Maxx shogun"
    },
    {
        key:'13',
        project:"adarsh enterprises",
        shadecard:"manual",
        shadecode:"0630",
        shadename:"manual",
        product:"bodelac enamel"
    },
    {
        key:'14',
        project:"sreekanth constcuctions",
        shadecard:"AP Fandeck",
        shadecode:"L139",
        shadename:"Blush",
        product:"MAXX MATEX"
    },
    {
        key:'15',
        project:"sreekanth constcuctions",
        shadecard:"manual",
        shadecode:"7887",
        shadename:"manual",
        product:"Matex gold"
    },
    {
        key:'16',
        project:"vishwastha building",
        shadecard:"AP Fandeck",
        shadecode:"L123",
        shadename:"ANGEL CLOUD",
        product:"MAXX MATEX"
    },
    {
        key:'17',
        project:"aptodco yemmiganur",
        shadecard:"AP Fandeck",
        shadecode:"L135",
        shadename:"Sahara dream",
        product:"Neva Distemper"
    },
    {
        key:'18',
        project:"classic paints",
        shadecard:"AP Fandeck",
        shadecode:"8532",
        shadename:"easter lily",
        product:"Maxx Breeze"
    },
    {
        key:'19',
        project:"hinduja lakefront",
        shadecard:"COLOUR CREATIONS PALETTE",
        shadecode:"1519 A",
        shadename:"tremont blue",
        product:"Sumo Xtra"
    },
    {
        key:'20',
        project:"hinduja lakefront",
        shadecard:"COLOUR CREATIONS PALETTE",
        shadecode:"2869 P",
        shadename:"ICY WATERS",
        product:"Sumo Xtra"
    },
  ];

  const handleSearch = value => {
    setSearchText(value);
  };

  const filteredDataSource = dataSource.filter(
    record =>
      record.project.toLowerCase().includes(searchText.toLowerCase()) ||
      record.shadecard.toLowerCase().includes(searchText.toLowerCase()) ||
      record.shadecode.toLowerCase().includes(searchText.toLowerCase()) ||
      record.shadename.toLowerCase().includes(searchText.toLowerCase()) ||
      record.product.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className='tableheader'>
        <h2 style={{ textAlign: 'center', width: 'auto' }}>TINTING</h2>
        <div className='tablebtn'>
          
          <Input
            placeholder='Search'
            value={searchText}
            onChange={e => handleSearch(e.target.value)}
            style={{ marginRight: '8px', width: '200px' }}
            prefix={<SearchOutlined />}
          />
          <Button type='primary' style={{ width: '100px' }}>
            <Link to='/tinting'>New</Link>
          </Button>
        </div>
      </div>
      <div className='tablecontainer'>
        <Table
          columns={columns}
          dataSource={filteredDataSource}
          pagination={{
            style: {
              display: 'flex',
              justifyContent: 'center',
            },
            pageSize: 5,
          }}
        />
      </div>
    </>
  );
};

export default TintingTable;