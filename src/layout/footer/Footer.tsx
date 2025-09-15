
import {Icon} from  '../../components/icon/Icon.tsx'
import styled from "styled-components";
import phone from '../../assets/images/Phone.png'
import message from '../../assets/images/Messages.png'
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={'center'} gap={'20px'}>
                <ContactWrapper>
                    <Phone>
                        <Image src={phone}/>
                        <span>09028793244</span>
                    </Phone>
                    <Email>
                        <Image src={message}/>
                        <span>shalewa64@gmail.com</span>
                    </Email>
                    <Address>
                        <span>497 Evergreen Rd. Roseville, CA 95673</span>
                    </Address>
                </ContactWrapper>

                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={'24px'} height={'22px'} viewBox={'0 0 24 22'} iconId={'twitter'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={'24px'} height={'22px'} viewBox={'0 0 24 22'} iconId={'instagram'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={'24px'} height={'22px'} viewBox={'0 0 24 22'} iconId={'snapchat'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={'24px'} height={'22px'} viewBox={'0 0 24 22'} iconId={'facebook'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={'24px'} height={'22px'} viewBox={'0 0 24 22'} iconId={'youtube'}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #FB3F5C;
    min-height: 20vh;
    color: white;
`

const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
`

const Image = styled.img`
    width: 24px;
    height: 23px;
   
`

const Phone = styled.div`
    
`

const Email = styled.div`
    border-left: 3px solid white;
    padding: 10px;
`

const Address = styled.div`
    border-left: 3px solid white;
`

const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`
    cursor: pointer;
`