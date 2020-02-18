import _ from 'lodash';


let app = () => {
    let array = [1, 2, 3, 4];

    _.reverse(array);

    console.log(array);
}

module.exports = app;