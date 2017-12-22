function climbStairs (n) {
  const solution = [0,1,2]
  for(let i=3;i<=n;i++)
    solution[i]=solution[i-1]+solution[i-2]
  return solution[n]
}