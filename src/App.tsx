import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import {Post} from "./components/Post";
import {BiBell} from 'react-icons/bi';

function App() {
  return (
    <div className="App">
        <SHeader>
            <div>Elisabeth Kingdom</div>
            <SBell/>
        </SHeader>
        <SWrap>
            <SScroll>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </SScroll>
        </SWrap>
    </div>
  );
}

export default App;

const SHeader = styled.div`
  display: flex;
  padding: 10px 15px;
  color: #282c34;
  font-weight: bolder;
  font-size: 18px;
  justify-content: space-between;
  border-bottom: 1px solid #d9d9d9;
`;

const SBell = styled(BiBell)`
  font-size: 24px;
`;

const SScroll = styled.div`
  height: 100%;
`;

const SWrap = styled.div`
  height: calc(100vh - 60px);
  overflow: overlay;
`
