import clsx from 'clsx';
import css from './Alert.module.css';

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx('alert', variant, {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};
