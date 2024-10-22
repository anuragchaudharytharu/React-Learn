export default function UsernameDisplay({ username }) {
  return (
    <div>
      {/* first html element is span */}
      <span>{username}</span>

      {/* added or updated html element is h1. So we need to update our sanpshot
      to update the snapshot, press 'u' after the snapshot testing
      */}
      <span>{username}</span>
    </div>
  );
}
