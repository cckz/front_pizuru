import React, { Component } from 'react';
import { Tabs } from 'antd';

const {TabPane: TabItem} = Tabs;

class SlidingTabs extends Component {
  state = {
      mode: 'left',
  };

  render() {
    const { mode } = this.state;
    return (
      <div>
        <Tabs
          defaultActiveKey="1"
          tabPosition={mode}
          style={{ height: 420 }}
        >
          <TabItem
              tab="Аккаунт"
              key="profile"
          >
              Content of tab 1
          </TabItem>
          <TabItem tab="Сайт" key="site">Content of tab 2</TabItem>
          <TabItem tab="Персонал" key="workers">Content of tab 3</TabItem>
          <TabItem tab="Оповещения" key="notifications">Content of tab 4</TabItem>
          <TabItem tab="Поддержка" key="support">Content of tab 5</TabItem>
        </Tabs>
      </div>
    );
  }
}

export default SlidingTabs;