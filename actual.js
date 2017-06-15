import {testWebpack} from './test';

function test() {
    console.log(testWebpack());

    {
        let testWebpack = () => 'Webpack works wrong';
    }
}

test();