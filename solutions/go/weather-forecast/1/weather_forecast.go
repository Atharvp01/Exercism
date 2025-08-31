//The package weather contains all the files related to the weather_forecast application
package weather

var CurrentCondition string // This variable stores the current weather condition of your country
var CurrentLocation string //This variable stores the current location from where the request is made

//This function return the current location of the user and the current weather condition in a more readable format
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
