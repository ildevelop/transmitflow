export async function runStepsWithDelay(cb: (arg0: string) => void, steps: string[]) {
  for (const step of steps) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    cb(step);
  }
}

export const readFileS = (isSuccess: boolean) => {
  if (isSuccess) {
    return 'SUCCESS';
  }
  return 'FAILURE';
};
