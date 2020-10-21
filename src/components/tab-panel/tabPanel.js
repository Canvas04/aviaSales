import React from 'react';
import {Tabs} from 'antd';
import {useDispatch} from 'react-redux';
import classes from './tabPanel.module.scss';
import './tap-panel.scss';
import Tab1 from '../tab1';
import Tab2 from '../tab2';
import {loadData} from '../../action';
const {str} = classes;
const {TabPane} = Tabs;
console.log(loadData);

export default function TabPanel () {
  const dispatch = useDispatch();
  const onChange = () => dispatch(loadData());
    return (
        <Tabs defaultActiveKey="1" type="card" size={'large'}  onChange={onChange}>
        <TabPane tab="Самый быстрый" key="1"  >
        <Tab1 />
        </TabPane>
        <TabPane tab="Caмый дешевый" key="2">
          <Tab2 />
        </TabPane>
        
      </Tabs>
    )
}