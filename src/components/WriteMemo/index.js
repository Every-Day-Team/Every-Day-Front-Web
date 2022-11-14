import React, { Component } from 'react';
import InputPlaceholder from '../InputPlaceholder';
import WhiteBox from '../WhiteBox';
import InputSet from '../InputSet';
import SaveButton from '../SaveButton';


class WriteMemo extends Component {
    render() {
        return (
            <WhiteBox>
                {/*<InputPlaceholder/>*/}
                <InputSet/>
                <SaveButton/>
            </WhiteBox>
        );
    }
}

export default WriteMemo;