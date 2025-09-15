
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import styled from "styled-components";
import {Button} from "../../../components/Button.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Get in Touch</SectionTitle>
            <FlexWrapper align={'flex-start'} justify={'space-around'}>
                <StyledForm>
                    <FieldGroup>
                        <Label>Your Email Address</Label>
                        <Field placeholder={'something@website.com'}/>
                        <Label>Subject</Label>
                        <Field placeholder={'Question about your article'}/>
                        <Field placeholder={'Your message starts with…'} as={'textarea'}/>
                    </FieldGroup>
                    <Button type={'submit'}>Send</Button>
                </StyledForm>
                <Map src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105883.81977075207!2d-118.38638171008627!3d33.970196961709775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b7dbd41fb7e9%3A0x24a2ff6a792f2618!2sSouth%20Los%20Angeles%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2ssk!4v1757957768009!5m2!1sen!2ssk'}
                     loading={'lazy'}
                     referrerPolicy={'no-referrer-when-downgrade'}
                     allowFullScreen
                />
            </FlexWrapper>

        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
`

const StyledForm = styled.form`
    width: 30%;
    
    
`

const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Field = styled.input`
    
`

const Label = styled.label`

`

const Map = styled.iframe`
    width: 512px;
    height: 506px;
    border: 0;
`

