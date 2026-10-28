// vite.config.js
import { defineConfig } from "file:///C:/Users/marin/Documents/Github/marina-website/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/marin/Documents/Github/marina-website/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { ViteImageOptimizer } from "file:///C:/Users/marin/Documents/Github/marina-website/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
var vite_config_default = defineConfig({
  base: "/marina-website/",
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 10
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 10
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 10
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtYXJpblxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXG1hcmluYS13ZWJzaXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtYXJpblxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXG1hcmluYS13ZWJzaXRlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9tYXJpbi9Eb2N1bWVudHMvR2l0aHViL21hcmluYS13ZWJzaXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgeyBWaXRlSW1hZ2VPcHRpbWl6ZXIgfSBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZS1vcHRpbWl6ZXInO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOiAnL21hcmluYS13ZWJzaXRlLycsXHJcbiAgcGx1Z2luczogW3JlYWN0KCksIFxyXG4gICAgVml0ZUltYWdlT3B0aW1pemVyKHtcclxuICAgICAgcG5nOiB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9zaGFycC5waXhlbHBsdW1iaW5nLmNvbS9hcGktb3V0cHV0I3BuZ1xyXG4gICAgICAgIHF1YWxpdHk6IDEwLFxyXG4gICAgICB9LFxyXG4gICAgICBqcGVnOiB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9zaGFycC5waXhlbHBsdW1iaW5nLmNvbS9hcGktb3V0cHV0I2pwZWdcclxuICAgICAgICBxdWFsaXR5OiAxMCxcclxuICAgICAgfSxcclxuICAgICAganBnOiB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9zaGFycC5waXhlbHBsdW1iaW5nLmNvbS9hcGktb3V0cHV0I2pwZWdcclxuICAgICAgICBxdWFsaXR5OiAxMCxcclxuICAgICAgfSxcclxuICAgIH0pLF1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VSxTQUFTLG9CQUFvQjtBQUNyVyxPQUFPLFdBQVc7QUFDbEIsU0FBUywwQkFBMEI7QUFHbkMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQUMsTUFBTTtBQUFBLElBQ2QsbUJBQW1CO0FBQUEsTUFDakIsS0FBSztBQUFBO0FBQUEsUUFFSCxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsTUFBTTtBQUFBO0FBQUEsUUFFSixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsS0FBSztBQUFBO0FBQUEsUUFFSCxTQUFTO0FBQUEsTUFDWDtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQUU7QUFDUCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
