import clsx from 'clsx';

export const Button = ({ variant, Children }) => {
  return <button className={clsx('button', variant)}>{Children}</button>;
};
