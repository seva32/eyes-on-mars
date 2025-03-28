export function daysFromNow(isoString: Date | undefined): number {
  try {
    const givenDate = new Date(isoString)
    const currentDate = new Date()

    if (isNaN(givenDate.getTime())) {
      throw new Error('Invalid date format')
    }

    // Calculate the difference in milliseconds
    const diffInMs = currentDate.getTime() - givenDate.getTime()

    // Convert milliseconds to days
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24))
  } catch (error) {
    console.error(error)
    return 0
  }
}
