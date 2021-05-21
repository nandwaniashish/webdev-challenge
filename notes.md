## Notes

### Outline

- Validate HTML5 outline for SEO and test for semantics

### Commits

- Conventional commits; broken down into sub-features

### People Search

- Mobile First Design (use min-width)
  - Scale cards of equal height using flexbox

### Departments Filtering

- query flattened departments and build tree structure
  - data should be SSR'd and UI should hydrate (getStaticProps should take care of this)
- Tree Patten [a11y and behavior](https://www.w3.org/TR/wai-aria-practices/examples/treeview/treeview-2/treeview-2a.html)
- Link color?
- Keyboard Behavior?
- would it be more intiutive to have a clear all departments filter?
  - Tree view works perfectly for docs but may have issues in experience while using it as a filter?

### Unit tests

- jest and enzyme
