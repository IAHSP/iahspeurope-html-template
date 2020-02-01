// listen for scroll event and call animate function
document.addEventListener('scroll', stickTheSide);

function stickTheSide() {
  const sideHeader = document.getElementById('side-header');
  let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  let sideHeaderHeight = sideHeader.clientHeight;
  let windowHeight = window.innerHeight;
  let maxStopage = sideHeaderHeight - windowHeight;
  let scrollY = window.scrollY || window.pageYOffset;

  if (scrollY < maxStopage) {
    sideHeader.style.top = "-" + scrollY + "px";
  } else {
    sideHeader.style.top = "-" + maxStopage + "px";
  }
}

