// Menambahkan "Alloha Aphrodite" ke dalam halaman
const body = document.querySelector('body');

// Membuat elemen h1 baru untuk Alloha Aphrodite
const subTitle = document.createElement('h1');
subTitle.classList.add('sub-title');
subTitle.textContent = 'Alloha Aphrodite';

// Menambahkan elemen tersebut ke dalam body, di atas title
body.insertBefore(subTitle, document.querySelector('.title'));

// Untuk "I Have Something"
const title = document.querySelector('.title');
const text = 'I Have Something'.split('');
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});
