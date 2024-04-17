import React from 'react';
import { SlotMachine } from '@lucky-canvas/react';
import { item as products } from './product';

export default class SlotDemo extends React.Component {
  constructor() {
    super();
    this.myLucky = React.createRef();

    const prizes = products.map((item, index) => ({  
      index,
      title: item.name,
      x: 0, 
      y: index, 
      imgs: [{ src: item.picture, width: '100%', top: '0%' }]
    }));

    this.state = {
      blocks: [
        { padding: '10px', background: '#ffc27a' },
      ],
      slots: [
        { speed: 8, direction: 1 }, 
        { speed: 10, direction: -1 },
      ],
      prizes,
      defaultStyle: {
        borderRadius: 15,
        fontColor: '#DF424B',
        fontSize: '14px',
        textAlign: 'center',
        background: '#fff',
        shadow: '0 5 1 #ebf1f4'
      }
    };
  }

  playGame = () => {
    this.myLucky.current.play();

    // 随机选择一种结果
    const resultIndex = Math.floor(Math.random() * this.state.prizes.length);

    // 停止抽奖
    this.myLucky.current.stop(resultIndex);
  };

  render() {
    return (
      <div>
        <SlotMachine
          ref={this.myLucky}
          width="30vw"
          height="30vw"
          blocks={this.state.blocks}
          prizes={this.state.prizes}
          slots={this.state.slots}
          defaultStyle={this.state.defaultStyle}
          onStart={this.playGame}
          onEnd={(prize) => { 
            clearTimeout(this.stopTimeout); // 清除定时器
            console.log('抽到的产品名称:', prize?.title, prize?.index);
          }}
        ></SlotMachine>
        <button onClick={this.playGame}>Play</button>
      </div>
    );
  }
}