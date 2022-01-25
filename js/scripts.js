function TicketStub(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.cost = 4;
};

TicketStub.prototype.totalCost = function(ticket) {
  if (this.movie === "1"){
    this.cost += 8;
  }else if (this.movie === "2") {
    this.cost += 6;
  }else {
    this.cost += 10;
  };

  if (this.time === "4") {
    this.cost -= 5;
  }else {
    this.cost += 3;
  };

  if (this.age === "6") {
    this.cost -= 2;
  }else if (this.age === "7") {
    this.cost += 0;
  }else {
    this.cost -= 1;
  };

  return this.cost;
};

TicketStub.prototype.displayTicket = function () {
  $("#movieChoice").text($("select#movie option:selected").text());
  $("#ageChoice").text($("select#movie option:selected").text());
  $("#showing").text($("select#movie option:selected").text());
  $("#ticketPrice").text(this.cost);
}

$(document).ready(function(){
  $("#movie-tickets").submit(function(event){
    event.preventDefault();
    let movie = $("#movie").val();
    let time = $("#time").val();
    let age = $("#age").val();
    let ticket = new TicketStub(movie, time, age);
    ticket.totalCost();
    ticket.displayTicket();
    console.log(ticket);
    console.log($("select#movie option:selected").text());
  })
})