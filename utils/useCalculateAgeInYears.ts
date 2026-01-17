export default (birthdate: Date) => {
  const today = new Date();
  const differenceInMilliseconds = today.getTime() - birthdate.getTime();

  return Math.max(
    1,
    Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365))
  );
};
