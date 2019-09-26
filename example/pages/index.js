import router from 'umi/router';

export default function() {
  function goHome() {
    router.push('/home');
  }

  return (
    <div>
      <h1>Page index</h1>
      <button onClick={goHome}>go</button>
    </div>
  );
}
