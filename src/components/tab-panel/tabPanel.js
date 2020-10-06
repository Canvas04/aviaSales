import React from 'react';
import {Tabs} from 'antd';
import classes from './tabPanel.module.scss';
import './tap-panel.scss';
import Tab1 from '../tab1';
import Tab2 from '../tab2';
const {str} = classes;
const {TabPane} = Tabs;

export default function TabPanel () {
    return (
        <Tabs defaultActiveKey="1" type="card" size={'large'}  >
        <TabPane tab="Самый быстрый" key="1"  >
        <Tab1 />
        </TabPane>
        <TabPane tab="Caмый дешевый" key="2">
          <Tab2 />
        </TabPane>
        
      </Tabs>
    )
}