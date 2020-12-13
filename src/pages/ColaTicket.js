import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Typography, List, Card, Tag, Divider } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";
import { SocketContex } from "../context/SocketContext";
import { getLastTickets } from "../helpers/getLastTickets";

const { Title, Text } = Typography;

const ColaTicket = () => {
  useHideMenu(false);

  const { socket } = useContext(SocketContex);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    socket.on("ticket-assignado", (asignado) => {
      setTickets(asignado);
    });
    return () => {
      socket.off("ticket-assignado");
    };
  }, [socket]);

  useEffect(() => {
    getLastTickets().then(setTickets);
  }, []);

  return (
    <>
      <Title level={1}>Atendiendo al Cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agente}</Tag>,
                    <Tag color="magenta">Escritorio: {item.escritorio}</Tag>,
                  ]}
                >
                  <Title>No. {item.number}</Title>
                </Card>
              </List.Item>
            )}
          ></List>
        </Col>
        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`ticket No. ${item.number}`}
                  description={
                    <>
                      <Text type="secondary">En el Escritorio</Text>
                      <Tag color="magenta">{item.number}</Tag>
                      <Text type="secondary">Agente</Text>
                      <Tag color="volcano">{item.agente}</Tag>
                    </>
                  }
                ></List.Item.Meta>
              </List.Item>
            )}
          ></List>
        </Col>
      </Row>
    </>
  );
};

export default ColaTicket;
