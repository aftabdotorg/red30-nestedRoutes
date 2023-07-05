import { useLocation } from 'react-router-dom';

export default function Confirmation() {
  const { state } = useLocation();

  return (
    <div className="container">
      <h1>Thank You!</h1>
      {/* short circuit evaluation */}
      {state && (
        <>
          <p>{state.name}, You're now registered for Red30 Tech.</p>
          <p>
            We've sent more details to <strong>{state.email}</strong>
          </p>
        </>
      )}
    </div>
  );
}
