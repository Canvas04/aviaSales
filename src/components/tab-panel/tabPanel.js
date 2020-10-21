import React from 'react';
import {Tabs} from 'antd';
import {useDispatch} from 'react-redux';
import './tap-panel.scss';
import Tab1 from '../tab1';
import Tab2 from '../tab2';
import {loadSearchId } from '../../action';
const {TabPane} = Tabs;

export default function TabPanel () {
  const dispatch = useDispatch();
  const onChange = () => dispatch(loadSearchId ());
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