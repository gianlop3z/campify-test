export function getTimeAsNumber(time: string): number {
  const [hour, min,] = time.split(':');  
  const date = new Date();
  date.setHours(parseInt(hour), parseInt(min));
  return date.getTime();
}