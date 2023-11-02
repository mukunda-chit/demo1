import React, { useState } from 'react';
import { Table, Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const ObservationTable = () => {
  const [searchText, setSearchText] = useState('');

  const columns = [
    {
      title: 'Name of the Project',
      dataIndex: 'project',
    },
    {
      title: 'Name of Shade Card',
      dataIndex: 'shadecard',
    },
    {
      title: 'Shade Code',
      dataIndex: 'shadecode',
    },
    {
      title: 'Shade Name',
      dataIndex: 'shadename',
    },
    {
      title: 'Product',
      dataIndex: 'product',
    },
  ];

  const dataSource = [
    // Your data here
    // (same data as in your original code)
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
    }
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
        <div className='tablebtn'>
          <Button type='primary' style={{ width: '100px' }}>
          
            <Link to='/observation'>New</Link>
          </Button>
        </div>
        <h2 style={{ textAlign: 'center' }}>OBSERVATIONS</h2>
        <div className='tablebtn'>
          <Input
            placeholder='Search'
            value={searchText}
            onChange={e => handleSearch(e.target.value)}
            style={{ marginRight: '8px', width: '200px' }}
            prefix={<SearchOutlined />}
          />
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

export default ObservationTable;
