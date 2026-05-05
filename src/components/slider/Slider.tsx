import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import { Project } from "../../layout/sections/projects/project/Project.tsx";

// Описываем тип одного проекта для удобства
type ProjectType = {
    title: string
    text: string
    techText: string
    src: string
}

type SliderPropsType = {
    projectsArr: Array<ProjectType>
}

export const Slider = (props: SliderPropsType) => {
    const items = props.projectsArr.map((p, index) => (
        <Project
            key={index}
            title={p.title}
            text={p.text}
            techText={p.techText}
            src={p.src}
        />
    ));

    return (
        <SliderWrapper>
            <AliceCarousel
                mouseTracking
                items={items}
                disableButtonsControls={false}
            />
        </SliderWrapper>
    );
};

const SliderWrapper = styled.div`
    max-width: 80vw;
    width: 90%;
`
