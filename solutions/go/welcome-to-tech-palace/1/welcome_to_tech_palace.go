package techpalace

import "strings"

// WelcomeMessage returns a welcome message for the customer.
func WelcomeMessage(customer string) string {
  return "Welcome to the Tech Palace, " + customer
}
// AddBorder adds a border to a welcome message.
func AddBorder(welcomeMsg string, numStarsPerLine int) string {
  stars := strings.Repeat("*", numStarsPerLine)
  str := stars + "/n" + welcomeMsg + "/n" + stars
  return str
}

// CleanupMessage cleans up an old marketing message.
func CleanupMessage(oldMsg string) string {
  messageWithoutStars := strings.ReplaceAll(oldMsg, "*", "")
  cleanedMsg := strings.TrimSpace(messageWithoutStars)
  return cleanedMsg
}
