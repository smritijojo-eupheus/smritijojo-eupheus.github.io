export const auth = async (creds: {
  username: string;
  password: string;
}): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (creds.username === "harry" && creds.password === "password") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};
