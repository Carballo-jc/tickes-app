import { Button, Col, Row, Typography } from "antd";
import React, { useContext, useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
import { SocketContex } from "../context/SocketContext";

const { Title, Text } = Typography;
const CreateTicket = () => {
  useHideMenu(false);

  const { socket } = useContext(SocketContex);
  const [ticket, setTicket] = useState(null);

  const newTiket = () => {
    socket.emit("solicitar-ticket", null, (ticket) => {
      setTicket(ticket);
    });
  };
  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>Presione el boton para crear un nuevo Ticket</Title>
          <Button
            type="primary"
            shape="round"
            size="large"
            onClick={newTiket}
            icon={<DownloadOutlined />}
          >
            Nuevo Ticket
          </Button>
        </Col>
      </Row>
      {ticket && (
        <Row style={{ marginTop: 100 }}>
          <Col span={14} offset={6} align="center">
            <Text level={2}> Su Numero</Text>
            <br />
            <Text type="success" style={{ fontSize: 55 }}>
              {ticket.number}
            </Text>
          </Col>
        </Row>
      )}
    </>
  );
};

export default CreateTicket;
