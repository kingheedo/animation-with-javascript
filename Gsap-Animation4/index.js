var hoverAnimation = new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity: 0.2,
    image1: './bw1.jpeg',
    image2: './bw2.jpeg',
    speedIn: 2,
    speedOut: 2,
    angle: Math.PI / 8,
    displacementImage: './diss.png'
})