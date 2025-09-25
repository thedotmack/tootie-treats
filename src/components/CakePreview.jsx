import PropTypes from 'prop-types';

export function CakePreview({ formData }) {
  return (
    <div className="relative mx-auto h-52 w-52 sm:h-64 sm:w-64">
      <div
        className="absolute inset-0 rounded-full shadow-glow"
        style={{
          background: `radial-gradient(circle at 40% 35%, ${formData.color1}, transparent 60%),
            radial-gradient(circle at 60% 60%, ${formData.color2}, transparent 65%),
            radial-gradient(circle at 50% 80%, ${formData.color3}, transparent 75%)`,
          boxShadow: '0 25px 45px rgba(0,0,0,0.25)'
        }}
      >
        {formData.style === 'drip' && (
          <div
            className="absolute left-1/2 top-0 h-10 w-36 -translate-x-1/2 rounded-b-full"
            style={{ backgroundColor: formData.color3, opacity: 0.7 }}
          />
        )}
        {formData.inscription && (
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <p className="text-lg font-semibold text-white drop-shadow-lg">
              {formData.inscription}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

CakePreview.propTypes = {
  formData: PropTypes.shape({
    color1: PropTypes.string,
    color2: PropTypes.string,
    color3: PropTypes.string,
    style: PropTypes.string,
    inscription: PropTypes.string
  }).isRequired
};
