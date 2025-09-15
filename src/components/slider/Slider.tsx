import React from 'react';
import {Slide} from '../slider/slide/Slide.tsx'
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";
import client from '../../assets/images/client.png'
export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide src={client}
                        name={'Adams Ademola'}
                        customer={'Happy Client'}
                        text={'“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”'}/>
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    border: 1px solid red;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 5px;
        background-color: deeppink;
    }
`