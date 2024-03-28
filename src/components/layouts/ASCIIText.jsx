import React, { useState, useEffect, useRef } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize size immediately
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

const AsciiArtConverter = ({ imagePath }) => {

  const { width, height } = useWindowSize(); // Use custom hook for window size
  const MAXIMUM_WIDTH = width * 0.15; // Adjusted for responsiveness
  const MAXIMUM_HEIGHT = height * 0.075; // Adjusted for responsiveness
  const canvasRef = useRef(null);
  const [asciiArt, setAsciiArt] = useState('');
  console.log(MAXIMUM_WIDTH, MAXIMUM_HEIGHT)

  const toGrayScale = (r, g, b) => 0.21 * r + 0.72 * g + 0.07 * b;

  const getFontRatio = () => {
    const pre = document.createElement('pre');
    pre.style.display = 'inline';
    pre.textContent = ' ';
    document.body.appendChild(pre);
    const { width, height } = pre.getBoundingClientRect();
    document.body.removeChild(pre);
    return height / width;
  };

  const convertToGrayScales = (context, width, height) => {
    const imageData = context.getImageData(0, 0, width, height);
    const grayScales = [];

    for (let i = 0; i < imageData.data.length; i += 4) {
      const r = imageData.data[i];
      const g = imageData.data[i + 1];
      const b = imageData.data[i + 2];
      const grayScale = toGrayScale(r, g, b);
      imageData.data[i] =
        imageData.data[i + 1] =
        imageData.data[i + 2] =
        grayScale;
      grayScales.push(grayScale);
    }

    context.putImageData(imageData, 0, 0);
    return grayScales;
  };

  const clampDimensions = (width, height) => {
    const ratio = getFontRatio();
    const rectifiedWidth = Math.floor(ratio * width);

    if (height > MAXIMUM_HEIGHT) {
      const reducedWidth = Math.floor(
        (rectifiedWidth * MAXIMUM_HEIGHT) / height
      );
      return [reducedWidth, MAXIMUM_HEIGHT];
    }
    if (width > MAXIMUM_WIDTH) {
      const reducedHeight = Math.floor(
        (height * MAXIMUM_WIDTH) / rectifiedWidth
      );
      return [MAXIMUM_WIDTH, reducedHeight];
    }
    return [rectifiedWidth, height];
  };

  const getCharacterForGrayScale = (grayScale) => {
    const grayRamp =
      ' $@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\'.';
    const rampLength = grayRamp.length;
    return grayRamp[Math.ceil(((rampLength - 1) * grayScale) / 255)];
  };

  const drawAscii = (grayScales, width) => {
    const asciiImage = grayScales.reduce((asciiImage, grayScale, index) => {
      let nextChars = getCharacterForGrayScale(grayScale);
      if ((index + 1) % width === 0) {
        nextChars += '\n';
      }
      return asciiImage + nextChars;
    }, '');

    setAsciiArt(asciiImage);
  };

  useEffect(() => {
    if (!imagePath) return;

    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = (e) => reject(e);
        image.src = src;
      });
    };

    const processImage = async () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      try {
        const image = await loadImage(imagePath);
        const [width, height] = clampDimensions(image.width, image.height);

        canvas.width = width;
        canvas.height = height;
        context.drawImage(image, 0, 0, width, height);
        const grayScales = convertToGrayScales(context, width, height);

        drawAscii(grayScales, width);
      } catch (e) {
        console.error('Failed to load image:', e);
      }
    };

    processImage();
  }, [imagePath, MAXIMUM_WIDTH, MAXIMUM_HEIGHT]); // Effect runs whenever imagePath changes

  const letters = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\'. ';
  let isAnimating = false;
  const changeText = (event) => {
    if (isAnimating) return;
    isAnimating = true;
    let iterations = 0;
    const originalText = event.target.dataset.value;
    const interval = setInterval(() => {
      const newText = [];
      for (let i = 0; i < originalText.length; i++) {
        if (i < iterations) {
          newText.push(originalText[i]);
        } else {
          newText.push(
            originalText[i] === '\n'
              ? originalText[i]
              : letters[Math.floor(Math.random() * letters.length)]
          );
        }
      }

      event.target.innerText = newText.join('');
      iterations += 250;
      //iterations += Math.floor(Math.random() * 1000); // Increase this to change more characters at a time
      if (iterations >= originalText.length) {
        clearInterval(interval);
        isAnimating = false;
      }
    }, 15); // Decrease this to make it go faster
  };

  return (
    <div className="text-[2px]">
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      <p
        onMouseOver={changeText}
        className="text-center whitespace-pre text-[clamp(1px,1vw,3px)]"
        style={{ textShadow: '#eab308 1px 0 1px' }}
        data-value={asciiArt}
      >
        {asciiArt}
      </p>
    </div>
  );
};

export default AsciiArtConverter;
