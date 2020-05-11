export const bookDescription = {
  methods: {
    isAddComma(index, dataLength) {
      return (index + 1) < dataLength ? ', ' : ''
    },
    isStar(index) {
      if (index <= this.post.book.stars) return "#FDD835";
      else return "";
    }
  },
  data() {
    return {
      minSlice: 1,
      maxSlice: 2,
    }
  },
  computed: {
    calBookStatusColor() {
      if (this.post.book.status !== "Finished") return { color: "red" };
      else return { color: "green" };
    },
    calBookYearColor() {
      let oldYearCss = {
        border: "1px solid #D50000 !important",
        backgroundColor: "#EF9A9A !important"
      };
      let thisYearCss = {
        border: "1px solid #90d2a3 !important",
        backgroundColor: "#C5E1A5 !important"
      };
      if (this.post.book.year < new Date().getYear() + 1900) {
        return oldYearCss;
      } else {
        return thisYearCss;
      }
    },
    slicedAuthors() {
      return this.post.authors.slice(0, this.minSlice);
    },
    slicedGenres() {
      return this.post.book.genres.slice(0, this.maxSlice);
    },
    slicedSuggestedBy() {
      return this.post.book.suggestedBy.slice(0, this.minSlice);
    },
  }
}