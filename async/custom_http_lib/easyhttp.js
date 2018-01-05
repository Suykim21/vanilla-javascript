// ES5 

function easyHTTP() {
  // this refers to easyHTTP.http
  this.http = new XMLHttpRequest();
}

// MAKE AN HTTP GET REQUEST
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);
  // must instantiate self due to scoping
  let self = this;

  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }
  this.http.send();
}


// MAKE AN HTTP POST REQUEST
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);

  // setRequestHeader(header, value)
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;

  this.http.onload = function() {
    callback(null, self.http.responseText);
  }


  this.http.send(JSON.stringify(data));
}


// MAKE AN HTTP PUT REQUEST
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);

  // setRequestHeader(header, value)
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;

  this.http.onload = function() {
    callback(null, self.http.responseText);
  }


  this.http.send(JSON.stringify(data));
}

// MAKE AN HTTP DELETE REQUEST
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);
  // must instantiate self due to scoping
  let self = this;

  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, 'post deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  }
  this.http.send();
}