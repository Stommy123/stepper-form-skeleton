export const mockRequest = data =>
  new Promise(
    resolve =>
      setTimeout(_ => {
        console.log('Resolved');
        resolve(data);
      }),
    1000
  );
