function testWebpack() {
    return 'Webpack works well';
}

function test() {
    console.log(testWebpack());

    {
        let testWebpack = () => 'Webpack works wrong';
    }
}

test();