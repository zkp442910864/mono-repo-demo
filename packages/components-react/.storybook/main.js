module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
	"../../common-docs/react-demo/**/*.stories.mdx",
    "../../common-docs/react-demo/**/*.stories.@(js|jsx|ts|tsx)",
    "../../common-docs/common-mdx/**/*.stories.mdx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}