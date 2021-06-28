import React from 'react'

const Spinner = () => {
  return (
    <div>
      <div className="spinner" />
      <style jsx>{`
        .spinner {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-inline: auto;
          border: 5px solid rgba(0, 0, 0, 0.1);
          border-left-color: #e2a604;

          animation: spin 500ms linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

export default Spinner
