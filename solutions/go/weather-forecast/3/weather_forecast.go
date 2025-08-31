//Package weather contains all the files related to the weather_forecast application.
package weather

//CurrentCondition stores the current weather condition of your country.
var CurrentCondition string
//CurrentLocation variable stores the current location from where the request is made.
var CurrentLocation string

//Forecast returns the current location of the user and the current weather condition in a more readable format.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
