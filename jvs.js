const showBtn1 = document.getElementById('showBtn1');
const chartDialog1 = document.getElementById('chartDialog1');
const closeBtn1 = document.getElementById('closeBtn1');

showBtn1.addEventListener('click', () => chartDialog1.showModal());
closeBtn1.addEventListener('click', () => chartDialog1.close());