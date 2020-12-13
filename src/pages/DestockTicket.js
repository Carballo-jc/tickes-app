import { CiCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import React, { useContext, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useHideMenu } from "../hooks/useHideMenu";
import { getUserStorage } from "../helpers/getUserStorage";
import { SocketContex } from "../context/SocketContext";

const { Title, Text } = Typography;
const DestockTicket = () => {
  useHideMenu(true);

  const [user] = useState(getUserStorage);
  const [ticket, setTicket] = useState(null);
  const { socket } = useContext(SocketContex);
  const history = useHistory();

  const levelDestock = () => {
    localStorage.clear();
    history.replace("/ingresar");
  };
  const nextTicket = () => {
    socket.emit("siguiente-tiket", user, (ticket) => {
      setTicket(ticket);
    });
  };

  if (!user.agente || !user.escritorio) {
    return <Redirect to="/ingresar" />;
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{user.agente}</Title>
          <Text>Usted esta en el escritorio: </Text>
          <Text type="success">{user.escritorio}</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={levelDestock}>
            <CiCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />

      {ticket && (
        <Row>
          <Col>
            <Text> Esta atendiendo el ticket numero:</Text>
            <Text
              style={{ fontSize: 30 }}
              type="danger
             "
            >
              {ticket.number}
            </Text>
          </Col>
        </Row>
      )}

      <Row>
        <Col offset={18} span={6} align="right">
          <Button shape="round" type="primary" onClick={nextTicket}>
            <RightCircleOutlined />
            Siguietnte
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default DestockTicket;
