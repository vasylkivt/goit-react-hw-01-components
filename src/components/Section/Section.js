import PropTypes from 'prop-types';

export default function Section({ title, className, children }) {
  return (
    <section className={className}>
      <div className="container">
        <h2 className="title">{title}</h2>
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
