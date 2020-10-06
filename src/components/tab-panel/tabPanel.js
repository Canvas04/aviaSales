import React from 'react';
import {Tabs} from 'antd';
import classes from './tabPanel.module.scss';
import './tap-panel.scss';
const {str} = classes;
const {TabPane} = Tabs;

export default function TabPanel () {
    return (
        <Tabs defaultActiveKey="1" type="card" size={'large'}  >
        <TabPane tab="Самый быстрый" key="1"  >
          Content of card tab 1
        </TabPane>
        <TabPane tab="Caмый дешевый" key="2">
          Content of card tab 2
        </TabPane>
        
      </Tabs>
    )
}