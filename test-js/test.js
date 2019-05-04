console.log([...Array(7).keys()].map(days => new Date(Date.now() + 86400000 * days)));
//[...Array(7).keys()].map(days => new Date(Date.now() + 86400000 * days));
//A=>B 是将B结果赋值给A
// 86400000单位是毫秒  代表一天。
// Date.now() 方法返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数。
//map 返回键值对
//扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列

   
