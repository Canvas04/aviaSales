import React from 'react';
import {Tabs} from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './tap-panel.scss';
import Tab1 from '../tab1';
import Tab2 from '../tab2';
import select from '../../action';

const {TabPane} = Tabs;

 function TabPanel ({tabs}) {
const {tab1,tab2} = tabs;

   return (
        <Tabs defaultActiveKey="1" type="card" size={'large'}  >
        <TabPane tab={tab1.name} key={tab1.id} >
        <Tab1 />
        </TabPane>
        <TabPane tab={tab2.name} key={tab2.id}>
          <Tab2 />
        </TabPane>
        
      </Tabs>
    )

}

const mapStateToProps = (state) => {
  return {
    tabs: state.tabs
  }
}

export default connect(mapStateToProps)(TabPanel);