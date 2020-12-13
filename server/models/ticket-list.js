const Ticket = require("./tickets");

class TicketList {
  constructor() {
    this.lastesNumber = 0;

    this.pending = [];
    this.assigned = [];
  }

  get nextNumber() {
    this.lastesNumber++;
    return this.lastesNumber;
  }

  get lastesTickets() {
    return this.assigned.slice(0, 13);
  }

  createTicket() {
    const newTicket = new Ticket(this.nextNumber);
    this.pending.push(newTicket);
    return newTicket;
  }

  assignedTicket(agente, escritorio) {
    if (this.pending.length === 0) {
      return null;
    }
    const nextTicket = this.pending.shift();

    nextTicket.agente = agente;
    nextTicket.escritorio = escritorio;

    this.assigned.unshift(nextTicket);
    return nextTicket;
  }
}

module.exports = TicketList;
