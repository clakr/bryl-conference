const menu = document.querySelector('.menu-btn')
const close = document.querySelector('.close-btn')
const navContainer = document.querySelector('.nav-link-container')
const ctaBtn = document.querySelector('.cta-btn span')

menu.addEventListener('click', () => {
  navContainer.classList.toggle('show-nav')
})

close.addEventListener('click', () => {
  navContainer.classList.toggle('show-nav')
})

const body = document.querySelector('body')
const header = document.querySelector('header')
const headerRect = header.getBoundingClientRect()
const logo = document.querySelector('.nav-logo')
const speakers = document.querySelector('.speakers')

const waveOne = document.querySelector('.wave-1')
const waveTwo = document.querySelector('.wave-2')

const primary = '#042F39'
const secondary = '#0e086a'

document.addEventListener('scroll', () => {
  const bodyRect = body.getBoundingClientRect()
  const speakersRect = speakers.getBoundingClientRect()

  waveOne.style.left = bodyRect.y / 5.9 + 'px'
  waveTwo.style.right = bodyRect.y / 5.9 + 'px'

  if (-bodyRect.y >= headerRect.height) {
    navContainer.classList.add('fixed-nav')
    logo.classList.add('fixed-logo')
  } else {
    navContainer.classList.remove('fixed-nav')
    logo.classList.remove('fixed-logo')
  }

  if (speakersRect.width >= 0) {
    if (speakersRect.y <= 0) {
      body.style.backgroundColor = primary
      navContainer.style.backgroundColor = '#ffffff'
      ctaBtn.style.color = primary
    } else {
      body.style.backgroundColor = secondary
      navContainer.style.backgroundColor = '#ffffff'
      ctaBtn.style.color = secondary
    }
  }

  if (speakersRect.width >= 400) {
    if (speakersRect.y <= 110) {
      body.style.backgroundColor = primary
      navContainer.style.backgroundColor = primary
      ctaBtn.style.color = primary
    } else {
      body.style.backgroundColor = secondary
      navContainer.style.backgroundColor = secondary
      ctaBtn.style.color = secondary
    }
  }
})
