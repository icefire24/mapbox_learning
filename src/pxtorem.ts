export const pxtorem=(option) => {
    return {
        postcssPlugin: 'pxtorem',
        Once(node) {
            console.log(node.source.input.file);
            
        }
  }
}