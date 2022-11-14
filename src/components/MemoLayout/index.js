import React from 'react';
import styled from 'styled-components';
import { media } from '../style-utils';

const Wrapper = styled.div`
    padding-top: 60px; /* 헤더 높이 */
`;

const MemoLayout = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

MemoLayout.Main = styled.div`
    margin: 0 auto;
    margin-top: 2rem;
    width: 1200px;
    transition: all .3s;
    position: relative;

    ${media.desktop`
        width: 990px;
    `}

    ${media.tablet`
        margin-top: 1rem;
        width: calc(100% - 2rem);
    `}

    ${media.mobile`
        margin-top: 0.5rem;
        width: calc(100% - 1rem);        
    `}

`

export default MemoLayout;