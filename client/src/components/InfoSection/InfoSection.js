import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './InfoSection-elements'

const InfoSection = ({ primary, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel1, buttonLabel2, description, headline, lightText, topLine, img, alt, start, buttonDisplay }) => {
    return (
        <InfoSec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Link to='/catalogo'>
                                <Button buttonDisplay={buttonDisplay} big fontBig primary={primary}>
                                    {buttonLabel1}
                                </Button>
                            </Link>
                            <Link to='/cita'>
                                <Button buttonDisplay={buttonDisplay} big fontBig primary={primary}>
                                    {buttonLabel2}
                                </Button>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} loading="lazy" alt={alt} />
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>
    )
}

export default InfoSection;