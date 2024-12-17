const sidebar =
document. querySelector(".sidebar");

const toggleOpen =
() => sidebar. classList.toggle("open");

const nav=
document.querySelector("nav");

const buttons =
document. querySelectorAll("nav button");

buttons [0].classList.add("active" );

buttons. forEach((button, index) =>
button. addEventListener("click", () => {
buttons. forEach(
b => b.classList. remove( "active" )
);
button. classList.add("active");
nav. style. setProperty(
" --top",
'${index === 0 ? 0 : index * 56}px'

);
})
);