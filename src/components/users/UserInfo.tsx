import {FC, useEffect, useState} from "react";
import {FullUser} from "../../api/types";
import Card from "../Card";
import {Nullable} from "../../types";
import Loader from "../UI/Loader";
import {Col, Row} from "../UI/List";
import axios from "axios";

interface UserInfoProps {
    user: Nullable<FullUser>
}

const UserInfo: FC<UserInfoProps> = ({user}) => {
    if (!user) return <Loader/>

    const [imageSrc, setImageSrc] = useState<string>();
    useEffect(() => {
        const loadImage = async () => {
            try {
                const response = await axios.get(user.image, {
                    responseType: 'arraybuffer', // Указываем, что ожидаем бинарные данные
                });

                const base64 = btoa(
                    new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
                );
                setImageSrc(`data:image/png;base64,${base64}`);
            } catch (error) {
                console.error('Ошибка загрузки изображения:', error);
            }
        };

        loadImage();
    }, []);

    return (
        <Card $flat>
            <Row $justify="space-between">
                <div>
                    {imageSrc ? (
                        <img src={imageSrc} alt="User"/>
                    ) : (
                        <Loader/>
                    )}
                </div>
                <Row $gap="40px">
                    <Col>
                        <h3>Info</h3>
                        <span>
                    {user.firstName}&nbsp;{user.lastName}
                    </span>
                        <span>
                        {user.username}
                    </span>
                        <span>
                        {user.age} yo
                    </span>
                    </Col>
                    <Col>
                        <h3>Company</h3>
                        <span>
                        {user.company.name}
                    </span>
                        <span>
                        {user.company.department}
                    </span>
                        <span>
                        {user.company.title}
                    </span>
                    </Col>
                    <Col>
                        <h3>Address</h3>
                        <span>
                        {user.address.country}
                    </span>
                        <span>
                        {user.address.state}
                    </span>
                        <span>
                        {user.address.city}
                    </span>
                    </Col>
                </Row>
            </Row>
        </Card>
    )
};

export default UserInfo;