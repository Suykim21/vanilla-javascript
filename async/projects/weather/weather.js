class Weather {
  constructor(city, state) {
    this.apiKey = '6b55badeaa4e7133';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();
    console.log(responseData.current_observation);
    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    console.log('Im at changeLocation', this);
    this.city = city;
    this.state = state;
  }
}