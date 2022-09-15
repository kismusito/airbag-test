export function clearDuplicates(data: number[]): number[] {
  // Use a set
  // return new Set(data)

  // Use a reduce function
  return data.reduce((previous: number[], current) => {
    if (previous.findIndex((item) => item === current) < 0) {
      return [...previous, current];
    }

    return previous;
  }, []);
}
