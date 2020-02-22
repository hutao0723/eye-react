// 引入所有的svg的文件
const requireAll = requireContext => requireContext.keys().map(requireContext);
const files = require.context('.', false, /\.svg$/);
requireAll(files) 