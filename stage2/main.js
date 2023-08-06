let count = 0;

const decrease = () => {
  count > 0 ? count-- : count;
  document.getElementById("count_num").innerText = count;
};

const increase = () => {
  count++;
  document.getElementById("count_num").innerText = count;
};

const reset = () => {
  count = 0;
  document.getElementById("count_num").innerText = count;
};
