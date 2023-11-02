import React, { useState } from 'react';
import { Collapse } from 'antd';
import Tinting from './Forms/TintingBanco'; // Import your Tinting component
import ColourantBanco from './Forms/ColourantBanco'; // Import your ColourantBanco component
import './abc.css';

const FillPage = () => {
  const [isDummyButtonPressed, setIsDummyButtonPressed] = useState(false);

  return (
    <>
      <Collapse
      className="custom-collapse"
        defaultActiveKey={isDummyButtonPressed ? [] : ['1']}
        expandIconPosition="right" // Place the expand/collapse icon on the right
        expandIcon={({ isActive }) => (
          <span
            style={{
              
            }}
          >
            {isActive ? '▼' : '▲'}
          </span>
        )
      }>
        <Collapse.Panel
          key="1"
          header={<h2 style={{ margin: "0", color: 'blue' }}>Tinting</h2>}
          forceRender={true}
        >
          <Tinting
            setIsDummyButtonPressed={setIsDummyButtonPressed}
          />
        </Collapse.Panel>
        {isDummyButtonPressed && (
          <Collapse.Panel
            key="2"
            header={<h2 style={{ margin: "0", color: 'blue' }}>Colourant</h2>}
            forceRender={true}
          >
            <ColourantBanco />
          </Collapse.Panel>
        )}
      </Collapse>
    </>
  );
};

export default FillPage;