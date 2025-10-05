document.addEventListener("DOMContentLoaded", () => {
  for (let i = 1; i <= 3; i++) {
        const showBtn = document.getElementById('showBtn' + i);
        const chartDialog = document.getElementById('chartDialog' + i);
        const closeBtn = document.getElementById('closeBtn' + i);
        if (!showBtn || !chartDialog || !closeBtn) continue;
        showBtn.addEventListener('click', () => chartDialog.showModal());
        closeBtn.addEventListener('click', () => chartDialog.close());
  }
});