import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import {Project} from "../../layout/sections/projects/project/Project.tsx";



export const Slide = (props: {
    progectsArr: Array<{ title: string, text: string, techText: string, src: string }>
}) => {
    return (
        <SliderWrapper>
            {
                props.progectsArr.map((p) => <Project title={p.title} text={p.text} techText={p.techText} src={p.src}
                />)
            }
        </SliderWrapper>
    );
};


const items = [
    <div className="item" data-value="1">1</div>,
    <div className="item" data-value="2">2</div>,
    <div className="item" data-value="3">3</div>,
    <div className="item" data-value="4">4</div>,
    <div className="item" data-value="5">5</div>,
];

export const Slider = () => (
    <SliderWrapper>
        <AliceCarousel
            mouseTracking
            items={items}
            controlsStrategy="alternate"
        />
    </SliderWrapper>
);


const SliderWrapper = styled.div`
    max-width: 370px;
`

/*import styled from "styled-components";
import {Project} from "../project/Project.tsx";


type SliderProjectPropsType = {
    title: string;
    text: string;
    techText: string;
    src: string
};

export const SliderProject = (props: { progectsArr: Array<{ title: string, text: string, techText: string, src: string}> }) => {
    return (
        {
            props.progectsArr.map((p) => <Project title={p.title} text={p.text} techText={p.techText} src={p.src}
            />)
        }
    )}*/