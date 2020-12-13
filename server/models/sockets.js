const TicketList = require("./ticket-list");

class Sockets {
  constructor(io) {
    this.io = io;

    this.ticketList = new TicketList();

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("cliente conectado");

      socket.on("solicitar-ticket", (data, callback) => {
        const newTicket = this.ticketList.createTicket();
        callback(newTicket);
      });

      socket.on("siguiente-tiket", (user, callback) => {
        const { agente, escritorio } = user;
        const suTicket = this.ticketList.assignedTicket(agente, escritorio);
        callback(suTicket);

        this.io.emit("ticket-assignado", this.ticketList.lastesTickets);
      });
    });
  }
}

module.exports = Sockets;
