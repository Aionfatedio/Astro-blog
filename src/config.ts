import type {
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Fuwari",
	subtitle: "中文演示站",
	lang: "zh_CN", 
	themeColor: {
		hue: 250, 
		fixed: false, 
	},
	banner: {
		enable: true,
		src: "assets/images/demo-banner.png", // 确保图片存在于 src/assets/images/ 或 public 目录
		position: "center", // 图片对齐方式 'top', 'center', 'bottom'. 默认为'center' 
		credit: {
			enable: false, // 版权信息显示与否			
			text: "", // 展示内容
			url: "", // 跳转链接
		},
	},
	toc: {
		enable: true, // 帖子右侧展示目录
		depth: 3, // 标题层级，1-3。
	},
	favicon: [
		// 网站图标，为空时使用默认图标
		// {
		//   src: '/favicon/icon.png',    // 标题路径, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/Aionfatedio", 
			external: true, // 跳转链接图标显示
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/qq-avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Aionfatedio",
	bio: "Never ever.",
	links: [
		{
			name: "Email",
			icon: "fa6-solid:envelope", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "mailto:aionfatedio@gmail.com",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
