const fetchTitle = (vm) => {
  const { title } = vm.$options;
  if (title) return (typeof title === 'function')
    ? title.call(vm) : title;
}

const fetchMetadata = (vm) => {
  const { metadata } = vm.$options;
  if (metadata) return (typeof metadata === 'function') 
    ? metadata.call(vm) : metadata;
}

const serverMeta = {
  created () {
    const title = fetchTitle(this);
    const metadata = fetchMetadata(this);
    if (title) this.$ssrContext.title = title;
    if (metadata) this.$ssrContext.metadata = metadata;    
  }
}

const clientMeta = {
  mounted () {
    const title = fetchTitle(this);
    if (title) document.title = title;
  }
}

const fetchMeta = (() => {
  if (process.env.VUE_ENV == 'server') {
    return serverMeta;
  } else {
    return clientMeta;
  }
})();

export {
  fetchMeta
}