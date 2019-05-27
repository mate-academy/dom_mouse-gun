document.addEventListener("click", (e) => {
  document.addEventListener("mousemove", (e) => {
    console.log(e.clientX + ':' + e.clientY);
  });
});

