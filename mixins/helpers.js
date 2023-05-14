export default {
  methods: {
    createLink(root, typeName, type) {
      if (!typeName) return;
      let link = root;
      // let name = typeName?.replace(/ /g, '-');
      // name = name?.replace(/:/g, '');
      const name = typeName;
      if (type === "query") {
        link += `/?service=${name}`;
      } else {
        link += `/${name}`;
      }
      return "/" + link.toLowerCase();
    },
  },
};
