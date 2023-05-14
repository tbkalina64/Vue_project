<template>
  <div class="breadcrumbs">
    <ul>
      <li>
        <nuxt-link property="item" typeof="WebPage" to="/">
          <span property="name">Home</span>
        </nuxt-link>
        <meta property="position" content="1" />
      </li>
      <li
        v-for="(crumb, index) in crumbs"
        :key="index"
        property="itemListElement"
        typeof="ListItem"
      >
        <nuxt-link property="item" typeof="WebPage" :to="crumb.path">
          <span
            property="name"
            v-html="
              `/${
                $route.fullPath === crumb.path && title !== null
                  ? title
                  : crumb.title
              }`
            "
          />
        </nuxt-link>
        <meta property="position" :content="index + 2" />
      </li>
    </ul>
  </div>
</template>

<script>
const titleCase = require("ap-style-title-case");

export default {
  name: "Breadcrumbs",
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath;
      const params = fullPath.startsWith("/")
        ? fullPath.substring(1).split("/")
        : fullPath.split("/");
      const crumbs = [];
      let path = "";
      params.forEach((param) => {
        path = `${path}/${param}`;
        const match = this.$router.match(path);
        if (match.name !== null) {
          if (param.includes("#") || param.includes("?")) {
            const linkItem = param.search("#");
            return (param = params.splice(linkItem));
          }

          let title = "";

          switch (param) {
            case "it-company":
              title = "IT Company";
              break;

            case "vib-brattleboro":
              title = "VIB — Brattleboro";
              break;

            case "vib2-downtown-brattleboro":
              title = "VIB<sup>2</sup> — Downtown Brattleboro";
              break;

            case "vib3-downtown-bennington":
              title = "VIB<sup>3</sup> — Downtown Bennington";
              break;

            default:
              title = titleCase(param.replace(/[-]/g, " "));
              break;
          }

          crumbs.push({
            title,
            ...match,
          });
        }
      });
      if (this.$route.name === "locations-slug-id") {
        return crumbs.slice(0, -1);
      }

      if (!this.$route.name) {
        return crumbs.slice(0, -1);
      }
      return crumbs;
    },
  },
  methods: {
    isLastLink(index) {
      return this.breadcrumbsLinks.length - 1 === index;
    },
  },
};
</script>

<style scoped>
ol {
  list-style: none;
}
li {
  display: inline;
}
li:last-child:after {
  content: "";
}
li a {
  color: black;
}
ul li:last-child a {
  color: #c4c4c4;
}
</style>
