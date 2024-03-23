export default function Navbar() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const changeText = (event) => {
    let iterations = 0;
    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split('')
        .map((letter, index) => {
          if (index < iterations) return event.target.dataset.value[index];
          return letters[Math.floor(Math.random() * 26)];
        })
        .join('');
      if (iterations >= event.target.dataset.value.length)
        clearInterval(interval);
      iterations += 1 / 4;
    }, 35);
  };

  return (
    <nav className="flex flex-row justify-start">
      <p
        onMouseOver={changeText}
        className="font-mono text-4xl font-bold text-white"
        data-value="ECE WEBRING"
      >
        ECE WEBRING
      </p>
    </nav>
  );
}
