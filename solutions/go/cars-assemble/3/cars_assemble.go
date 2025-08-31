package cars

// CalculateWorkingCarsPerHour calculates how many working cars are
// produced by the assembly line every hour.
func CalculateWorkingCarsPerHour(productionRate int, successRate float64) float64 {
  return float64(productionRate) * (successRate/100)
}

// CalculateWorkingCarsPerMinute calculates how many working cars are
// produced by the assembly line every minute.
func CalculateWorkingCarsPerMinute(productionRate int, successRate float64) int {
  carsPerHours := CalculateWorkingCarsPerHour(productionRate, successRate)
  return int(carsPerHours)/60
}

// CalculateCost works out the cost of producing the given number of cars.
func CalculateCost(carsCount int) uint {
  cost := 0
  if carsCount == 10{
    cost = 95000 
    return uint(cost)
  } 
  if carsCount > 10 {
  carCountInTens := carsCount/10 
  remainingCars := carsCount - (carCountInTens*10)
  cost += carCountInTens*95000
  cost += remainingCars*10000
  } else{
    cost += carsCount*10000
  }
  return uint(cost)
}
