import React from 'react';
import logo from './logo.svg';
import './App.css';
var data = require('./data.json');

function App() {
  console.log("data: " + data);
  console.log("data JSON: " + JSON.stringify(data));
  // fetch("./data.json")
  // .then(response => response.json())
  // .then(data => {
  //   console.log("Got the data!");
  //   console.log(data);
    // TODO: Call a function to do something with this data.

    // let num = 0;
    // for (var key in data.rates) {
    //   if(num++ < 10){
    //     let percentageTextElement = document.querySelectorAll("span")[num-1];
    //     let infoElement = document.getElementsByClassName("item" + (num))[0];
    //     let barHeightElement = document.getElementsByClassName("height" + (num))[0];
    //     let percentage = (data.rates[key] / 400) * 100;
    //     console.log("percentage: "+ percentage);
    //     // let currencyValue = data.rates[key];
    //     // console.log("currencyValue: " + currencyValue);
    //     // let elementWidth = currencyValue / 2;
    //     // console.log("elementWidth: " + elementWidth);
        
    //     barHeightElement.style.height = percentage + "%";
    //     infoElement.innerHTML = key;
    //     percentageTextElement.innerHTML = percentage.toFixed(2) + "%";
    //   }
    // }
  // });

  return (

    <div className="App">
        
        <h1 className="page_header">Currency Graph</h1> 
        <div className="verticalChart">
          <div className="singleBar">
            <div className="bar">
              <div className="value height1" style={{height: '37%'}} >
                <span style={{color: 'rgb(45, 137, 239)', display: 'inline'}}>37%</span>
              </div>
            </div>
            <div className="title item1">US</div>
          </div>
          <div className="singleBar">
            <div className="bar">
              <div className="value height2" style={{height: '16%'}}>
                <span style={{color: 'rgb(45, 137, 239)', display: 'inline'}}>16%</span>
              </div>
            </div>
            <div className="title item2">PL</div>
          </div>
          <div className="singleBar">
            <div className="bar">
              <div className="value height3" style={{height: '12%'}}>
                <span style={{color: 'rgb(45, 137, 239)', display: 'inline'}}>12%</span>
              </div>
            </div>
            <div className="title item3">GB</div>
          </div>
          <div className="singleBar">
            <div className="bar">
              <div className="value height4" style={{height: '9%'}}>
                <span style={{color: 'rgb(45, 137, 239)', display: 'inline'}}>9%</span>
              </div>
            </div>
            <div className="title item4">DE</div>
          </div>
          <div className="singleBar">
            <div className="bar">
              <div className="value height5" style={{height: '7%'}}>
                <span style={{color: 'rgb(45, 137, 239)', display: 'inline'}}>7%</span>
              </div>
            </div>
            <div className="title item5">NL</div>
          </div>
          <div className="singleBar">
            <div className="bar">
              <div className="value height6" style={{height: '6%'}}>
                <span style={{color: 'rgb(45, 137, 239)', display: 'inline'}}>6%</span>
              </div>
            </div>
            <div className="title item6">CA</div>
          </div>
          <div className="singleBar">
            <div className="bar">
              <div className="value height7" style={{height: '5%'}}>
                <span style={{color: 'rgb(45, 137, 239)', display: 'inline'}}>5%</span>
              </div>
            </div>
            <div className="title item7">FI</div>
          </div>
          <div className="singleBar">
            <div className="bar">
              <div className="value height8" style={{height: '4%'}}>
                <span style={{color: 'rgb(45, 137, 239)', display: 'inline'}}>4%</span>
              </div>
            </div>
            <div className="title item8">RU</div>
          </div>
          <div className="singleBar">
            <div className="bar">
              <div className="value height9" style={{height: '3%'}}>
                <span style={{color: 'rgb(45, 137, 239)', display: 'inline'}}>3%</span>
              </div>
            </div>
            <div className="title item9">AU</div>
          </div>
          <div className="singleBar">
            <div className="bar">
              <div className="value height10" style={{height: '1%'}}>
                <span style={{color: 'rgb(45, 137, 239)', display: 'inline'}}>1%</span>
              </div>
            </div>
            <div className="title item10">N/A</div>
          </div>	
          <div className="clearfix" />
        </div>
        </div>

      );
}

export default App;
