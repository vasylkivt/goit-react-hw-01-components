import PropTypes from 'prop-types';
import css from './Section.module.css';
export default function Section({ title, className, children }) {
  return (
    <section className={className}>
      <div className={css.container}>
        <h2 className={css.title}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
