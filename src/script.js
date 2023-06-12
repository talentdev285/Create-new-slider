const slideData = [
    { imgSrc: 'image1.jpg', title: 'Slide 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { imgSrc: 'image2.png', title: 'Slide 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { imgSrc: 'image3.jpg', title: 'Slide 3', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  ];
  
  const slideshow = document.getElementById('slideshow');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  let currentIndex = 0;
  
  // Function to create a slide element
  function createSlide(imgSrc, title, description) {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.style.backgroundImage = `url(${imgSrc})`;
  
    const content = document.createElement('div');
    content.classList.add('text-white', 'p-4');
  
    const slideTitle = document.createElement('h2');
    slideTitle.textContent = title;
    slideTitle.classList.add('text-lg', 'font-semibold');
  
    const slideDescription = document.createElement('p');
    slideDescription.textContent = description;
    slideDescription.classList.add('mt-2');
  
    content.appendChild(slideTitle);
    content.appendChild(slideDescription);
    slide.appendChild(content);
  
    return slide;
  }
  
  // Function to show the current slide
  function showSlide() {
    const slides = Array.from(slideshow.children);
    slides.forEach((slide, index) => {
      slide.style.display = index === currentIndex ? 'block' : 'none';
    });
  }
  
  // Function to navigate to the previous slide
  function goToPrevSlide() {
    currentIndex = (currentIndex - 1 + slideData.length) % slideData.length;
    showSlide();
  }
  
  // Function to navigate to the next slide
  function goToNextSlide() {
    currentIndex = (currentIndex + 1) % slideData.length;
    showSlide();
  }
  
  // Event listeners for previous and next buttons
  prevBtn.addEventListener('click', goToPrevSlide);
  nextBtn.addEventListener('click', goToNextSlide);
  
  // Populate slideshow with slides
  slideData.forEach((item) => {
    const slide = createSlide(item.imgSrc, item.title, item.description);
    slideshow.appendChild(slide);
  });
  
  // Show the initial slide
  showSlide();
  