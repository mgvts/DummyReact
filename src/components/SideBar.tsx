import {FC, useRef, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import Btn from "./UI/Btn";
import {FaUsers} from "react-icons/fa6";
import {FaHome, FaNewspaper} from "react-icons/fa";
import {Col, Row} from "./UI/List";
import {useClickOutside} from "../hooks/useClickOutlide";

interface SideBarProps {
}

const SideBarWrapper = styled.aside<{ $isActive?: boolean }>`
    padding: 4px 0;
    width: ${props => props.$isActive ? '120px' : '80px'};
    transition: width 0.3s ease;
    height: 100vh;

    border-right: thin solid lightgrey;
`;

const BarContent = styled.div<{ $isActive?: boolean }>`
    margin-top: 12px;
    display: flex;
    flex-direction: column;
`;

const ItemInline = styled(Link)<{ $isActive?: boolean, $isCurrentPage?: boolean }>`
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.$isActive ? 'space-between' : 'center'};
    align-items: center;
    padding: 4px 12px;
    color: #292929;
    font-weight: 500;
    background-color: ${props => props.$isCurrentPage && 'lightgrey'};

    &:hover {
        text-decoration: underline;
    }
`;

const ICON_COLOR = 'black';
const ICON_SIZE = 32;

const LINKS = [
    {
        title: 'Posts',
        to: './posts',
        ariaLabel: 'link to posts page',
        img: <FaNewspaper color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        title: 'About',
        to: './about',
        ariaLabel: 'link to about page',
        img: <FaHome color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        title: 'UsersPage',
        to: './users',
        ariaLabel: 'link to users page',
        img: <FaUsers color={ICON_COLOR} size={ICON_SIZE}/>
    }
];

const SideBar: FC<SideBarProps> = ({}) => {


    const [isActive, setIsActive] = useState(false);
    const pathName = useLocation().pathname;
    const wrapperRef = useRef<HTMLDivElement>(null);

    return (
        <SideBarWrapper ref={wrapperRef} $isActive={isActive}>
            <Col>
                <Row $gap='12px' style={{padding: '4px 12px'}}>
                    <Btn
                        size='medium'
                        onClick={() => setIsActive((prev) => !prev)}
                        text={isActive ? '<' : '>'}
                    />
                    {isActive && <Row $align='center'>Title</Row>}
                </Row>
                <BarContent $isActive={isActive}>
                    {LINKS.map((link, index) => (
                        <ItemInline
                            key={index}
                            to={link.to}
                            $isCurrentPage={pathName === link.to}
                            $isActive={isActive}
                            aria-label={link.ariaLabel}
                        >
                            <Row $gap='4px' $align='center'>
                                {link.img}{isActive && link.title}
                            </Row>
                        </ItemInline>
                    ))}
                </BarContent>
            </Col>
        </SideBarWrapper>
    );
};

export default SideBar;