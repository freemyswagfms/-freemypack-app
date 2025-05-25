function navigate(pageId, el) {
  // Смена страницы
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById(pageId);
  if (page) page.classList.add('active');

  // Обновляем активную кнопку (и иконку через .active-tab)
  const buttons = Array.from(document.querySelectorAll('.nav-btn'));
  buttons.forEach(btn => btn.classList.remove('active-tab'));
  el.classList.add('active-tab');

  // Перемещаем индикатор
  const indicator = document.querySelector('.nav-indicator');
  const navInner = document.querySelector('.nav-inner');

  const elRect = el.getBoundingClientRect();
  const innerRect = navInner.getBoundingClientRect();
  const offsetLeft = elRect.left - innerRect.left;
  const btnWidth = el.offsetWidth;

  indicator.style.width = `${btnWidth}px`;
  indicator.style.transform = `translateX(${offsetLeft}px) translateY(-50%)`;
}
