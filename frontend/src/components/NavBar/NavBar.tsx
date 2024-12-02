import React, { FC, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginOutlined, LogoutOutlined, ShoppingCartOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Affix, Badge, Col, Row, Space } from "antd";

import { selectUserFromUserState } from "../../redux-toolkit/user/user-selector";
import { selectCartItemsCount } from "../../redux-toolkit/cart/cart-selector";
import { logoutSuccess } from "../../redux-toolkit/user/user-slice";
import { ACCOUNT, BASE, CONTACTS, LOGIN, MENU, REGISTRATION } from "../../constants/routeConstants";
import { CART } from "../../constants/urlConstants";
import "./NavBar.scss";

const NavBar: FC = (): ReactElement => {
    const dispatch = useDispatch();
    const usersData = useSelector(selectUserFromUserState);
    const cartItemsCount = useSelector(selectCartItemsCount);

    const handleLogout = (): void => {
        localStorage.removeItem("token");
        dispatch(logoutSuccess());
    };

    return (
        <>
            <div className={"navbar-logo-wrapper"}>
                <img alt={"navbar-logo"} src="https://f.nodacdn.net/468512" />
            </div>
            <Affix>
                <div className={"navbar-wrapper"}>
                    <Row style={{ padding: "0px 200px" }}>
                        <Col span={12}>
                            <ul>
                                <Link to={BASE}>
                                    <li>Главная</li>
                                </Link>
                                <li>
                                    <Link to={{pathname: MENU, state: {id: "all"}}}>Каталог</Link>
                                </li>
                                <Link to={CONTACTS}>
                                    Контакты
                                </Link>
                                <li>
                                <Link to={CART}>
                                    <ShoppingCartOutlined/>
                                </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col span={12}>
                            <ul>
                                {usersData ? (
                                    <>
                                        <Link to={ACCOUNT}>
                                            <li>
                                                <UserOutlined />
                                                Личный кабинет
                                            </li>
                                        </Link>
                                        <Link id={"handleLogout"} to={BASE} onClick={handleLogout}>
                                            <li>
                                                <LogoutOutlined />
                                                Выход
                                            </li>
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to={LOGIN}>
                                            <li>
                                                <Space align={"baseline"}>
                                                    <LoginOutlined />
                                                    SIGN IN
                                                </Space>
                                            </li>
                                        </Link>
                                        <Link to={REGISTRATION}>
                                            <li>
                                                <UserAddOutlined />
                                                SIGN UP
                                            </li>
                                        </Link>
                                    </>
                                )}
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Affix>
        </>
    );
};

export default NavBar;