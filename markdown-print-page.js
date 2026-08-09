/**
 * 绑定预打印页面的导出按钮，在扩展 CSP 下安全触发浏览器打印。
 */
function printReport() {
  window.print();
}

window.addEventListener('load', () => {
  window.focus();
  document.getElementById('print-report-button')?.addEventListener('click', printReport);
});
