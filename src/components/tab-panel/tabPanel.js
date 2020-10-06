import React from 'react';
import {Tabs} from 'antd';
import classes from './tabPanel.module.scss';
import './tap-panel.scss';
import Tab1 from '../tab1';
const {str} = classes;
const {TabPane} = Tabs;

export default function TabPanel () {
    return (
        <Tabs defaultActiveKey="1" type="card" size={'large'}  >
        <TabPane tab="Самый быстрый" key="1"  >
        <Tab1 />
        </TabPane>
        <TabPane tab="Caмый дешевый" key="2">
          Content of card tab 2
        </TabPane>
        
      </Tabs>
    )
}