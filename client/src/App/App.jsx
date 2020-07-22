import { hot } from 'react-hot-loader/root';
import React from 'react';
import GlobalStyle from '../theme';
import { Application } from './styles';
import Console from '../components/Console';
// import { ReactComponent as Rocket } from '../assets/rocket.svg';

const App = () => (
    <>
        <Application>
            {/* <Rocket />
            <span>"Space isn't remote at all. It's only an hour's drive away, if your car could go straight upwards."</span> */}
            <Console></Console>
        </Application>
        <GlobalStyle />
    </>
);

export default hot(App);