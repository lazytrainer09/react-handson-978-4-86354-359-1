setTimeout(() => {
  console.log('3秒後に呼ばれます');
}, 3000)

const callback = () => { console.log('5秒後に呼ばれます') };
setTimeout(callback, 5000)
